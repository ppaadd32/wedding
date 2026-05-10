import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Plus, Minus } from "lucide-react";

const items = [
    {
        q: "Czy mogę przyjść z osobą towarzyszącą?",
        a: "Tak — w formularzu RSVP możesz dopisać osobę towarzyszącą. Prosimy o potwierdzenie do 10 czerwca 2026.",
    },
    {
        q: "Czy zapewniacie transport z Zabrza do Moszny?",
        a: "Oczywiście. Dedykowany autokar odjeżdża sprzed kościoła o godzinie 16:00 i wraca z Moszny o 03:00 oraz 05:00.",
    },
    {
        q: "Jaki jest dress code?",
        a: "Black Tie Optional. Polecamy odcienie czerni, kremu, głębokiego granatu i klejnotowych zieleni / burgundu.",
    },
    {
        q: "Czy są opcje wegetariańskie / bezglutenowe?",
        a: "Tak. Nasz szef kuchni przygotuje pełnowartościowe alternatywy. Zaznacz preferencje w RSVP.",
    },
    {
        q: "Czy mogę przyjechać z dzieckiem?",
        a: "Wesele jest wydarzeniem dla dorosłych — pozwólcie sobie na noc tylko we dwoje. Dla najmłodszych gości (z najbliższej rodziny) zorganizujemy oddzielną opiekę po wcześniejszym uzgodnieniu.",
    },
    {
        q: "Czy będę mógł zostać na noc w zamku?",
        a: "Limitowana liczba pokoi w Zamku Moszna jest dostępna pod kodem rezerwacyjnym PA1907. Polecamy rezerwację jak najwcześniej.",
    },
    {
        q: "Lista prezentów?",
        a: "Waszej obecności nie zastąpi nic. Jeśli czujecie potrzebę gestu — będziemy wdzięczni za wkład w naszą podróż poślubną.",
    },
];

function Item({ q, a, idx }) {
    const [open, setOpen] = useState(idx === 0);
    return (
        <div className="border-b border-white/8">
            <button
                onClick={() => setOpen((v) => !v)}
                data-testid={`faq-item-${idx}`}
                className="w-full flex items-center justify-between gap-6 py-7 md:py-9 text-left group"
            >
                <span className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory group-hover:text-champagne transition-colors">
                    {q}
                </span>
                <span className="flex-shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-ivory/70 group-hover:border-champagne group-hover:text-champagne transition-all">
                    {open ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-700 ease-out ${
                    open ? "max-h-60 pb-8" : "max-h-0"
                }`}
            >
                <p className="text-ivory/60 text-base md:text-lg leading-relaxed max-w-3xl">
                    {a}
                </p>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="section-pad relative bg-ink2"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="overline">Akt IX — FAQ</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory">
                            Pytania
                            <br />
                            <span className="text-champagne not-italic">
                                bez owijania
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 mx-auto mt-10" />
                    </div>
                </Reveal>

                <Reveal delay={1}>
                    <div className="max-w-4xl mx-auto">
                        {items.map((it, i) => (
                            <Item
                                key={it.q}
                                q={it.q}
                                a={it.a}
                                idx={i}
                            />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
