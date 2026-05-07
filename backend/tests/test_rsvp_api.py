"""Backend API tests for Patrycja & Adrian wedding site."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://cinematic-vows-11.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
def test_root_greeting(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Patrycja" in data["message"] and "Adrian" in data["message"]


# ---------- RSVP Create (yes) ----------
def test_create_rsvp_yes_full_payload(client):
    payload = {
        "name": "TEST_Anna Kowalska",
        "email": "anna.test@example.com",
        "attendance": "yes",
        "guests_count": 2,
        "plus_one_name": "Jan Kowalski",
        "dietary": "wegetarianskie",
        "message": "Nie moge sie doczekac!",
    }
    r = client.post(f"{API}/rsvp", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert data["name"] == payload["name"]
    assert data["attendance"] == "yes"
    assert data["guests_count"] == 2
    assert data["plus_one_name"] == "Jan Kowalski"
    assert data["dietary"] == "wegetarianskie"
    # verify persistence via list
    list_r = client.get(f"{API}/rsvp")
    assert list_r.status_code == 200
    ids = [it["id"] for it in list_r.json()]
    assert data["id"] in ids


# ---------- RSVP Create (no) ----------
def test_create_rsvp_no(client):
    payload = {"name": "TEST_Marek Nowak", "attendance": "no"}
    r = client.post(f"{API}/rsvp", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["attendance"] == "no"
    assert data["name"] == "TEST_Marek Nowak"
    assert "id" in data


# ---------- Validation ----------
def test_rsvp_missing_name_returns_422(client):
    r = client.post(f"{API}/rsvp", json={"attendance": "yes"})
    assert r.status_code == 422


def test_rsvp_invalid_attendance_returns_422(client):
    r = client.post(f"{API}/rsvp", json={"name": "TEST_X", "attendance": "maybe"})
    assert r.status_code == 422


def test_rsvp_guests_out_of_range_returns_422(client):
    r = client.post(f"{API}/rsvp", json={"name": "TEST_Y", "attendance": "yes", "guests_count": 99})
    assert r.status_code == 422


# ---------- List & no _id ----------
def test_list_rsvps_no_objectid(client):
    r = client.get(f"{API}/rsvp")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) > 0
    for it in items:
        assert "_id" not in it
        assert "id" in it
        assert "name" in it
        assert "attendance" in it


# ---------- Stats ----------
def test_rsvp_stats(client):
    r = client.get(f"{API}/rsvp/stats")
    assert r.status_code == 200
    data = r.json()
    assert set(["yes", "no", "total_guests"]).issubset(data.keys())
    assert isinstance(data["yes"], int)
    assert isinstance(data["no"], int)
    assert isinstance(data["total_guests"], int)
    assert data["yes"] >= 1
    assert data["no"] >= 1
    assert data["total_guests"] >= 2
