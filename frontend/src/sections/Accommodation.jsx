import { Reveal } from "@/components/Reveal";
import { Building, Hotel, Trees } from "lucide-react";

const places = [
    {
        icon: Hotel,
        name: "Zamek Moszna — Hotel",
        dist: "0 km od wesela",
        price: "od 480 zł / noc",
        desc: "Apartamenty w skrzydłach historycznego zamku. Limitowana liczba miejsc — kod rezerwacyjny: PA1907.",
        href: "https://moszna.pl",
    },
    {
        icon: Building,
        name: "Hotel Moszna Centrum",
        dist: "1.2 km",
        price: "od 320 zł / noc",
        desc: "Nowoczesny boutique hotel w samym sercu wsi. Spokój, czystość linii, śniadanie do południa.",
        href: "https://maps.google.com/?q=Hotel+Moszna",
    },
    {
        icon: Trees,
        name: "Pałac w Krapkowicach",
        dist: "12 km",
        price: "od 250 zł / noc",
        desc: "Dla gości szukających ciszy w otoczeniu starodrzewu. Prywatny park i basen.",
        href: "https://maps.google.com/?q=Pa%C5%82ac+Krapkowice",
    },
];

export default function Accommodation() {
    return (
        <section
            id="nocleg"
            data-testid="accommodation-section"
            className="section-pad relative bg-ink2"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="overline text-[14px] md:text-[17px]">Akt VII — Nocleg</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory">
                            Gdzie złożyć
                            <br />
                            <span className="text-champagne not-italic">
                                głowę o świcie
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 mx-auto mt-10" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                    {places.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <Reveal
                                key={p.name}
                                delay={i}
                                className="group hairline p-8 md:p-10 hover:border-champagne/40 transition-all duration-700"
                            >
                                <Icon
                                    size={22}
                                    className="text-champagne mb-8"
                                />
                                <div className="overline mb-2 text-ivory/50">
                                    {p.dist}
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl text-ivory leading-tight mb-4">
                                    {p.name}
                                </h3>
                                <p className="text-ivory/55 text-sm leading-relaxed mb-8 min-h-[80px]">
                                    {p.desc}
                                </p>
                                <div className="flex items-end justify-between">
                                    <div className="font-serif italic text-champagne text-lg">
                                        {p.price}
                                    </div>
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`accommodation-link-${i}`}
                                        className="text-[11px] uppercase tracking-[0.3em] text-ivory/70 hover:text-champagne transition-colors flex items-center gap-2"
                                    >
                                        Rezerwacja
                                        <span className="w-5 h-[1px] bg-current group-hover:w-8 transition-all duration-500" />
                                    </a>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
