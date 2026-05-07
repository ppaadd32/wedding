from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ.get("MONGO_URL")
db_name = os.environ.get("DB_NAME", "wedding")

if not mongo_url:
    raise RuntimeError("MONGO_URL is not set")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class RSVPCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: Optional[str] = Field(default=None, max_length=200)
    attendance: Literal["yes", "no"]
    guests_count: int = Field(default=1, ge=0, le=10)
    plus_one_name: Optional[str] = Field(default=None, max_length=120)
    dietary: Optional[str] = Field(default=None, max_length=400)
    message: Optional[str] = Field(default=None, max_length=1000)


class RSVP(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: Optional[str] = None
    attendance: Literal["yes", "no"]
    guests_count: int = 1
    plus_one_name: Optional[str] = None
    dietary: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Patrycja & Adrian — 19.07.2026"}


@api_router.post("/rsvp", response_model=RSVP)
async def create_rsvp(payload: RSVPCreate):
    rsvp = RSVP(**payload.model_dump())
    doc = rsvp.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.rsvps.insert_one(doc)
    return rsvp


@api_router.get("/rsvp", response_model=List[RSVP])
async def list_rsvps():
    items = await db.rsvps.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.get("/rsvp/stats")
async def rsvp_stats():
    yes = await db.rsvps.count_documents({"attendance": "yes"})
    no = await db.rsvps.count_documents({"attendance": "no"})
    total_guests_doc = await db.rsvps.aggregate([
        {"$match": {"attendance": "yes"}},
        {"$group": {"_id": None, "total": {"$sum": "$guests_count"}}}
    ]).to_list(1)
    total_guests = total_guests_doc[0]["total"] if total_guests_doc else 0
    return {"yes": yes, "no": no, "total_guests": total_guests}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
