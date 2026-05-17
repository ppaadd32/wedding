import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ActHeader,
    ScrollShift,
    actColRight,
    itemMotion,
} from "@/components/ScrollMotion";

const program = [
    {
        time: "14:00",
        title: "Ceremonia zaślubin",
        text: "Uroczysta msza w Kościele Niepokalanego Serca NMP w Zabrzu.",
    },
    {
        time: "16:00",
        title: "Powitanie na sali",
        text: "Dedykowany autokar zabiera Was w godzinną podróż przez śląskie krajobrazy.",
    },
    {
        time: "17:00",
        title: "Pierwszy taniec",
        text: "Krzemienny taras Zamku Moszna, kieliszki schłodzone, fotografia na zachód słońca.",
    },
    {
        time: "19:00",
        title: "Kolacja zasiadana",
        text: "Pięciodaniowe menu degustacyjne w Sali Lustrzanej — sztuka kulinarna w czystej formie.",
    },
    {
        time: "23:30",
        title: "Tort",
        text: "Ceremonia krojenia, fajerwerki nad zamkiem, łza wzruszenia.",
    },
    {
        time: "04:00",
        title: "Świt nad Moszną",
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
            className="section-pad relative overflow-hidden bg-ink2"
        >
            <div className="container-luxe">
                <ActHeader center className="mb-16 text-center md:mb-24">
                    <span className="overline text-[14px] md:text-[17px]">
                        Akt V — Plan Dnia
                    </span>
                    <h2 className="mt-6 font-serif italic text-5xl text-ivory md:text-6xl lg:text-7xl">
                        Choreografia
                        <br />
                        <span className="text-champagne not-italic">
                            naszej nocy
                        </span>
                    </h2>
                    <div className="divider-luxe mx-auto mt-10 w-24" />
                </ActHeader>

                <div className="grid gap-8 md:grid-cols-12 md:gap-16">
                    <ScrollShift
                        y={[60, -40]}
                        x={[-40, 16]}
                        className="md:col-span-5"
                    >
                        <div
                            className="no-scrollbar max-h-[60vh] space-y-1 overflow-y-auto pr-2 md:max-h-[70vh]"
                            data-testid="schedule-list"
                        >
                            {program.map((p, i) => (
                                <ScrollShift
                                    key={p.time}
                                    {...itemMotion(i)}
                                    className="block"
                                >
                                    <button
                                        onClick={() => setActive(i)}
                                        data-testid={`schedule-item-${i}`}
                                        className={`group flex w-full items-baseline gap-6 border-b border-white/5 py-5 text-left transition-all md:py-6 ${
                                            i === active
                                                ? "text-ivory"
                                                : "text-ivory/40 hover:text-ivory/80"
                                        }`}
                                    >
                                        <span
                                            className={`font-serif text-xl tabular-nums tracking-tight md:text-2xl ${
                                                i === active
                                                    ? "text-champagne"
                                                    : ""
                                            }`}
                                        >
                                            {p.time}
                                        </span>
                                        <span className="font-sans text-sm uppercase tracking-[0.2em] md:text-base">
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
                                </ScrollShift>
                            ))}
                        </div>
                    </ScrollShift>

                    <ScrollShift
                        {...actColRight}
                        className="self-start md:col-span-7 md:sticky md:top-32"
                    >
                        <div
                            className="hairline relative overflow-hidden p-10 md:p-14 lg:p-16"
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
                                    <div className="mb-8 font-serif text-7xl leading-none text-champagne md:text-8xl lg:text-9xl">
                                        {cur.time}
                                    </div>
                                    <h3 className="mb-6 font-serif italic text-3xl text-ivory md:text-4xl lg:text-5xl">
                                        {cur.title}
                                    </h3>
                                    <p className="max-w-lg text-base leading-relaxed text-ivory/60 md:text-lg">
                                        {cur.text}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </ScrollShift>
                </div>
            </div>
        </section>
    );
}
