import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const TARGET = new Date("2026-07-19T14:00:00+02:00").getTime();

function calc() {
    const diff = TARGET - Date.now();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        done: false,
    };
}

const Cell = ({ value, label }) => (
    <div
        className="relative flex flex-col items-center justify-center py-8 md:py-12"
        data-testid={`countdown-${label.toLowerCase()}`}
    >
        <div className="font-mono text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-ivory leading-none tabular-nums tracking-tight">
            {String(value).padStart(2, "0")}
        </div>

        <div className="mt-9 flex items-center gap-4">
            <span className="w-10 h-px bg-champagne/30" />


<span className="overline text-[16px] md:text-[18px] text-ivory/60">
    {label}
</span>

            <span className="w-10 h-px bg-champagne/30" />
        </div>
    </div>
);

export default function Countdown() {
    const [t, setT] = useState(calc());

    useEffect(() => {
        const i = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(i);
    }, []);

    return (
        <section
            id="odliczanie"
            data-testid="countdown-section"
            className="section-pad relative bg-ink"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                        <span className="overline text-[14px] md:text-[17px]">

    Akt II — Odliczanie

</span>

                        <h2 className="mt-6 font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
                            Do{" "}
                            <span className="text-champagne">
                                {"\u201ETak\u201D"}
                            </span>{" "}
                            zostało
                        </h2>

                        <div className="divider-luxe w-24 mt-10" />
                    </div>
                </Reveal>

                <Reveal delay={1}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-6 md:gap-x-10">
                        <Cell value={t.days} label="Dni" />
                        <Cell value={t.hours} label="Godzin" />
                        <Cell value={t.minutes} label="Minut" />
                        <Cell value={t.seconds} label="Sekund" />
                    </div>
                </Reveal>

                <Reveal delay={2}>
                    <p className="text-center text-ivory/50 text-sm tracking-[0.3em] uppercase mt-20">
                        19 — 07 — 2026 · 14:00
                    </p>
                </Reveal>
            </div>
        </section>
    );
}