import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Church } from "lucide-react";

const CHURCH_IMG =
    "https://images.unsplash.com/photo-1666564424049-26cab5618df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxoaXN0b3JpYyUyMGNhc3RsZSUyMGV4dGVyaW9yfGVufDB8fHx8MTc3ODE3MjU4MHww&ixlib=rb-4.1.0&q=85";
const MOSZNA_IMG =
    "https://static.prod-images.emergentagent.com/jobs/f06a9f9c-d82b-43ef-be36-a164b4102429/images/c85528aed0ed1ecd8e474f7d2c577626a733b433833ad493a9650699bf0326e8.png";

const Card = ({ tag, title, where, time, image, mapHref, dataId }) => (
    <Reveal className="group relative overflow-hidden">
        <div
            data-testid={dataId}
            className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute top-6 left-6">
                <span className="overline glass px-3 py-2">{tag}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <h3 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight mb-4">
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
                    className="inline-flex items-center gap-2 mt-6 text-[11px] uppercase tracking-[0.3em] text-champagne hover:text-ivory transition-colors"
                >
                    Otwórz mapę
                    <span className="w-6 h-[1px] bg-current" />
                </a>
            </div>
        </div>
    </Reveal>
);

export default function Details() {
    return (
        <section
            id="detale"
            data-testid="details-section"
            className="section-pad relative bg-ink"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="overline">Akt IV — Detale</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory">
                            Dwa miejsca,
                            <br className="hidden sm:block" />
                            <span className="text-champagne not-italic">
                                jedna obietnica
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 mx-auto mt-10" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    <Card
                        dataId="details-ceremony"
                        tag="Ceremonia"
                        title="Niepokalanego Serca NMP"
                        where="ul. Wolności, Zabrze"
                        time="15:00 — 19 lipca 2026"
                        image={CHURCH_IMG}
                        mapHref="https://maps.google.com/?q=Ko%C5%9Bci%C3%B3%C5%82+Niepokalanego+Serca+NMP+Zabrze"
                    />
                    <Card
                        dataId="details-reception"
                        tag="Wesele"
                        title="Zamek Moszna"
                        where="Moszna 1, 47-370 Zielina"
                        time="17:30 — do świtu"
                        image={MOSZNA_IMG}
                        mapHref="https://maps.google.com/?q=Zamek+Moszna"
                    />
                </div>

                <Reveal delay={1}>
                    <div className="mt-20 md:mt-32 grid sm:grid-cols-3 gap-6 md:gap-12 text-center">
                        <div>
                            <Church
                                className="mx-auto text-champagne mb-4"
                                size={20}
                            />
                            <div className="overline mb-2">Dress Code</div>
                            <div className="font-serif text-2xl md:text-3xl text-ivory">
                                Black Tie Optional
                            </div>
                            <p className="text-ivory/55 text-sm mt-3">
                                Eleganckie odcienie czerni, kremu i głębokich
                                klejnotów.
                            </p>
                        </div>
                        <div>
                            <Clock
                                className="mx-auto text-champagne mb-4"
                                size={20}
                            />
                            <div className="overline mb-2">Czas trwania</div>
                            <div className="font-serif text-2xl md:text-3xl text-ivory">
                                Od 15:00 do świtu
                            </div>
                            <p className="text-ivory/55 text-sm mt-3">
                                Pełna noc cinematograficznych wspomnień.
                            </p>
                        </div>
                        <div>
                            <MapPin
                                className="mx-auto text-champagne mb-4"
                                size={20}
                            />
                            <div className="overline mb-2">Transport</div>
                            <div className="font-serif text-2xl md:text-3xl text-ivory">
                                Zorganizowany
                            </div>
                            <p className="text-ivory/55 text-sm mt-3">
                                Autokar Zabrze → Moszna o 16:00.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
