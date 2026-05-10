import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Plus, Minus } from "lucide-react";

const items = [
    {
        q: "Jaki obowiązuje dress code?",
        a: "Black Tie Optional — mile widziane eleganckie stylizacje wieczorowe w odcieniach granatu, chłodnego błękitu oraz srebra. Garnitury, smokingi i długie suknie będą idealnie wpisywać się w klimat uroczystości.",
    },
    {
        q: "Czy na miejscu dostępny jest parking?",
        a: "Tak. Dla wszystkich gości dostępny będzie bezpłatny parking bezpośrednio przy miejscu przyjęcia. Szczegóły dojazdu znajdziecie w sekcji lokalizacja.",
    },
    {
        q: "Czy będą dostępne opcje wegetariańskie lub bezglutenowe?",
        a: "Oczywiście. Nasz szef kuchni przygotuje pełnowartościowe alternatywy dopasowane do preferencji żywieniowych. Prosimy o zaznaczenie odpowiedniej informacji w formularzu RSVP.",
    },
    {
        q: "Do kiedy prosimy o potwierdzenie obecności?",
        a: "Będziemy wdzięczni za potwierdzenie obecności najpóźniej do 1 czerwca 2026 roku poprzez formularz RSVP dostępny na stronie.",
    },
    {
        q: "Jak wygląda kwestia prezentów?",
        a: "Wasza obecność będzie dla nas największym prezentem. Jeśli jednak chcielibyście podarować nam coś więcej, będziemy wdzięczni za symboliczny wkład w naszą podróż poślubną.",
    },
    {
        q: "Czy podczas wesela będą wykonywane zdjęcia i nagrania?",
        a: "Tak. Chcemy zachować te chwile na lata, dlatego podczas uroczystości obecny będzie fotograf oraz operator wideo.",
    },
    {
        q: "Czy mogę robić zdjęcia telefonem podczas ceremonii?",
        a: "Będzie nam bardzo miło, jeśli podczas ceremonii odłożycie telefony i przeżyjecie ten moment razem z nami. O wszystkie wspomnienia zadba nasz fotograf.",
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
