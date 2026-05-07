import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const program = [
    {
        time: "14:30",
        title: "Przyjęcie gości",
        text: "Zbiórka przy kościele — szampan powitalny, ciche szepty, ostatnie poprawki.",
    },
    {
        time: "15:00",
        title: "Ceremonia zaślubin",
        text: "Uroczysta msza w Kościele Niepokalanego Serca NMP w Zabrzu.",
    },
    {
        time: "16:00",
        title: "Transfer do Moszny",
        text: "Dedykowany autokar zabiera Was w godzinną podróż przez śląskie krajobrazy.",
    },
    {
        time: "17:30",
        title: "Aperitif na zamkowym tarasie",
        text: "Krzemienny taras Zamku Moszna, kieliszki schłodzone, fotografia na zachód słońca.",
    },
    {
        time: "19:00",
        title: "Kolacja zasiadana",
        text: "Pięciodaniowe menu degustacyjne w Sali Lustrzanej — sztuka kulinarna w czystej formie.",
    },
    {
        time: "21:00",
        title: "Pierwszy taniec",
        text: "Świece, kwartet smyczkowy, jedno słowo: razem.",
    },
    {
        time: "23:30",
        title: "Tort & toast",
        text: "Ceremonia krojenia, fajerwerki nad zamkiem, łza wzruszenia.",
    },
    {
        time: "02:00",
        title: "Nocna uczta",
        text: "Stół z polskimi przysmakami i wybór koktajli autorskich.",
    },
    {
        time: "04:00",
        title: "Świt nad Mosznem",
        text: "Mgła, kawa, ostatni taniec. Zostają tylko najwytrwalsi.",
    },
];

export default function Schedule() {
    const [active, setActive] = useState(0);
    const cur = program[active];

    return (
        <section
            id="plan"
            data-testid="schedule-section"
            className="section-pad relative bg-ink2"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="overline">Akt V — Plan Dnia</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory">
                            Choreografia
                            <br />
                            <span className="text-champagne not-italic">
                                naszej nocy
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 mx-auto mt-10" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                    <div className="md:col-span-5">
                        <div
                            className="space-y-1 max-h-[60vh] md:max-h-[70vh] overflow-y-auto no-scrollbar pr-2"
                            data-testid="schedule-list"
                        >
                            {program.map((p, i) => (
                                <button
                                    key={p.time}
                                    onClick={() => setActive(i)}
                                    data-testid={`schedule-item-${i}`}
                                    className={`group w-full text-left flex items-baseline gap-6 py-5 md:py-6 border-b border-white/5 transition-all ${
                                        i === active
                                            ? "text-ivory"
                                            : "text-ivory/40 hover:text-ivory/80"
                                    }`}
                                >
                                    <span
                                        className={`font-serif text-xl md:text-2xl tabular-nums tracking-tight ${
                                            i === active
                                                ? "text-champagne"
                                                : ""
                                        }`}
                                    >
                                        {p.time}
                                    </span>
                                    <span className="font-sans text-sm md:text-base uppercase tracking-[0.2em]">
                                        {p.title}
                                    </span>
                                    <span
                                        className={`ml-auto h-[1px] transition-all duration-700 ${
                                            i === active
                                                ? "w-12 bg-champagne"
                                                : "w-4 bg-white/15 group-hover:w-8"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-7 md:sticky md:top-32 self-start">
                        <div
                            className="hairline p-10 md:p-14 lg:p-16 relative overflow-hidden"
                            data-testid="schedule-detail"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="overline mb-6">
                                        Punkt {active + 1} / {program.length}
                                    </div>
                                    <div className="font-serif text-7xl md:text-8xl lg:text-9xl text-champagne leading-none mb-8">
                                        {cur.time}
                                    </div>
                                    <h3 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
                                        {cur.title}
                                    </h3>
                                    <p className="text-ivory/60 text-base md:text-lg leading-relaxed max-w-lg">
                                        {cur.text}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
