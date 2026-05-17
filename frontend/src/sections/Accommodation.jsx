import {
    ActHeader,
    ScrollShift,
    itemMotion,
} from "@/components/ScrollMotion";
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
            className="section-pad relative overflow-hidden bg-ink2"
        >
            <div className="container-luxe">
                <ActHeader center className="mb-16 text-center md:mb-24">
                    <span className="overline text-[14px] md:text-[17px]">
                        Akt VII — Nocleg
                    </span>
                    <h2 className="mt-6 font-serif italic text-5xl text-ivory md:text-6xl lg:text-7xl">
                        Gdzie złożyć
                        <br />
                        <span className="text-champagne not-italic">
                            głowę o świcie
                        </span>
                    </h2>
                    <div className="divider-luxe mx-auto mt-10 w-24" />
                </ActHeader>

                <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                    {places.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <ScrollShift
                                key={p.name}
                                {...itemMotion(i)}
                                className="group hairline p-8 transition-all duration-700 hover:border-champagne/40 md:p-10"
                            >
                                <Icon
                                    size={22}
                                    className="mb-8 text-champagne"
                                />
                                <div className="overline mb-2 text-ivory/50">
                                    {p.dist}
                                </div>
                                <h3 className="mb-4 font-serif text-2xl leading-tight text-ivory md:text-3xl">
                                    {p.name}
                                </h3>
                                <p className="mb-8 min-h-[80px] text-sm leading-relaxed text-ivory/55">
                                    {p.desc}
                                </p>
                                <div className="flex items-end justify-between">
                                    <div className="font-serif text-lg italic text-champagne">
                                        {p.price}
                                    </div>
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`accommodation-link-${i}`}
                                        className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:text-champagne"
                                    >
                                        Rezerwacja
                                        <span className="h-[1px] w-5 bg-current transition-all duration-500 group-hover:w-8" />
                                    </a>
                                </div>
                            </ScrollShift>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
