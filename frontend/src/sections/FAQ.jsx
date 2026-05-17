import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ActHeader, ScrollShift, itemMotion } from "@/components/ScrollMotion";

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
        <ScrollShift {...itemMotion(idx)} className="border-b border-white/8">
            <button
                onClick={() => setOpen((v) => !v)}
                data-testid={`faq-item-${idx}`}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
            >
                <span className="font-serif text-xl text-ivory transition-colors group-hover:text-champagne md:text-2xl lg:text-3xl">
                    {q}
                </span>
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-ivory/70 transition-all group-hover:border-champagne group-hover:text-champagne">
                    {open ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-700 ease-out ${
                    open ? "max-h-60 pb-8" : "max-h-0"
                }`}
            >
                <p className="max-w-3xl text-base leading-relaxed text-ivory/60 md:text-lg">
                    {a}
                </p>
            </div>
        </ScrollShift>
    );
}

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="section-pad relative overflow-hidden bg-ink2"
        >
            <div className="container-luxe">
                <ActHeader center className="mb-16 text-center md:mb-24">
                    <span className="overline text-[14px] md:text-[17px]">
                        Akt IX — FAQ
                    </span>
                    <h2 className="mt-6 font-serif italic text-5xl text-ivory md:text-6xl lg:text-7xl">
                        Pytania
                        <br />
                        <span className="text-champagne not-italic">
                            bez owijania
                        </span>
                    </h2>
                    <div className="divider-luxe mx-auto mt-10 w-24" />
                </ActHeader>

                <ScrollShift
                    y={[50, -40]}
                    scale={[0.96, 1]}
                    opacity={[0.15, 1, 1, 0.8]}
                    className="mx-auto max-w-4xl"
                >
                    {items.map((it, i) => (
                        <Item key={it.q} q={it.q} a={it.a} idx={i} />
                    ))}
                </ScrollShift>
            </div>
        </section>
    );
}
