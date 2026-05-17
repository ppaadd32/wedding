import {
    ActHeader,
    ScrollShift,
    itemMotion,
} from "@/components/ScrollMotion";
import { MapPin, Clock, Church } from "lucide-react";

const CHURCH_IMG =
    "https://images.unsplash.com/photo-1666564424049-26cab5618df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxoaXN0b3JpYyUyMGNhc3RsZSUyMGV4dGVyaW9yfGVufDB8fHx8MTc3ODE3MjU4MHww&ixlib=rb-4.1.0&q=85";
const MOSZNA_IMG =
    "https://static.prod-images.emergentagent.com/jobs/f06a9f9c-d82b-43ef-be36-a164b4102429/images/c85528aed0ed1ecd8e474f7d2c577626a733b433833ad493a9650699bf0326e8.png";

const Card = ({ tag, title, where, time, image, mapHref, dataId, index }) => {
    const m = itemMotion(index);
    const xBoost = index === 0 ? [-72, 24] : [72, -24];

    return (
        <ScrollShift
            className="group relative overflow-hidden"
            y={m.y}
            x={xBoost}
            scale={m.scale}
            rotate={m.rotate}
            opacity={m.opacity}
        >
            <div
                data-testid={dataId}
                className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute left-6 top-6">
                    <span className="overline glass px-3 py-2">{tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                    <h3 className="mb-4 font-serif italic text-3xl leading-tight text-ivory md:text-4xl lg:text-5xl">
                        {title}
                    </h3>
                    <div className="space-y-2 text-ivory/80">
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin size={14} className="text-champagne" />
                            <span>{where}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Clock size={14} className="text-champagne" />
                            <span>{time}</span>
                        </div>
                    </div>
                    <a
                        href={mapHref}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`${dataId}-map-link`}
                        className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-champagne transition-colors hover:text-ivory"
                    >
                        Otwórz mapę
                        <span className="h-[1px] w-6 bg-current" />
                    </a>
                </div>
            </div>
        </ScrollShift>
    );
};

export default function Details() {
    return (
        <section
            id="detale"
            data-testid="details-section"
            className="section-pad relative overflow-hidden bg-ink"
        >
            <div className="container-luxe">
                <ActHeader center className="mb-16 text-center md:mb-24">
                    <span className="overline text-[14px] md:text-[17px]">
                        Akt IV — Detale
                    </span>
                    <h2 className="mt-6 font-serif italic text-5xl text-ivory md:text-6xl lg:text-7xl">
                        Dwa miejsca,
                        <br className="hidden sm:block" />
                        <span className="text-champagne not-italic">
                            jedna obietnica
                        </span>
                    </h2>
                    <div className="divider-luxe mx-auto mt-10 w-24" />
                </ActHeader>

                <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    <Card
                        index={0}
                        dataId="details-ceremony"
                        tag="Ceremonia"
                        title="Kościół Niepokalanego Serca NMP"
                        where="ul. Franciszkańska 1, Zabrze"
                        time="14:00 — 19 lipca 2026"
                        image={CHURCH_IMG}
                        mapHref="https://maps.google.com/?q=Ko%C5%9Bci%C3%B3%C5%82+Niepokalanego+Serca+NMP+Zabrze"
                    />
                    <Card
                        index={1}
                        dataId="details-reception"
                        tag="Wesele"
                        title="Zamek Moszna"
                        where="Zamkowa 1, Moszna"
                        time="16:00 — 4:00"
                        image={MOSZNA_IMG}
                        mapHref="https://maps.google.com/?q=Zamek+Moszna"
                    />
                </div>

                <ScrollShift
                    y={[70, -50]}
                    x={[0, 0]}
                    scale={[0.92, 1]}
                    opacity={[0.2, 1, 1, 0.75]}
                    className="mx-auto mt-20 max-w-4xl md:mt-32"
                >
                    <div className="grid gap-6 text-center sm:grid-cols-2 md:gap-12">
                        <ScrollShift
                            y={[50, -35]}
                            x={[-36, 20]}
                            className="text-center"
                        >
                            <Church
                                className="mx-auto mb-4 text-champagne"
                                size={20}
                            />
                            <div className="overline mb-2">Dress Code</div>
                            <div className="font-serif text-2xl text-ivory md:text-3xl">
                                Black Tie Optional
                            </div>
                            <p className="mt-3 text-sm text-ivory/55">
                                Eleganckie odcienie czerni, kremu i głębokich
                                klejnotów.
                            </p>
                        </ScrollShift>
                        <ScrollShift
                            y={[55, -40]}
                            x={[36, -20]}
                            className="text-center"
                        >
                            <Clock
                                className="mx-auto mb-4 text-champagne"
                                size={20}
                            />
                            <div className="overline mb-2">Czas trwania</div>
                            <div className="font-serif text-2xl text-ivory md:text-3xl">
                                Od 15:00 do świtu
                            </div>
                            <p className="mt-3 text-sm text-ivory/55">
                                Pełna noc cinematograficznych wspomnień.
                            </p>
                        </ScrollShift>
                    </div>
                </ScrollShift>
            </div>
        </section>
    );
}
