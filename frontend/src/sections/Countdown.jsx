import { useEffect, useState, useRef } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { premiumEase } from "@/components/Reveal";
import { ScrollShift } from "@/components/ScrollMotion";
import Film from "@/sections/Film";

const TARGET = new Date("2026-07-19T14:00:00+02:00").getTime();

const CELL_MOTION = [
    { y: [90, -50], x: [-48, 12], scale: [0.82, 1] },
    { y: [70, -70], x: [-16, 16], scale: [0.85, 1] },
    { y: [80, -60], x: [16, -16], scale: [0.85, 1] },
    { y: [100, -40], x: [48, -12], scale: [0.82, 1] },
];

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

function CountdownCell({ value, label, index }) {
    const motionCfg = CELL_MOTION[index] ?? CELL_MOTION[0];

    return (
        <ScrollShift
            y={motionCfg.y}
            x={motionCfg.x}
            scale={motionCfg.scale}
            opacity={[0.25, 1, 1, 0.7]}
            className="relative flex flex-col items-center justify-center py-8 md:py-12"
        >
            <div
                data-testid={`countdown-${label.toLowerCase()}`}
                className="relative flex w-full flex-col items-center justify-center"
            >
                <motion.div
                    className="font-mono text-6xl leading-none tracking-tight text-ivory tabular-nums sm:text-7xl md:text-8xl xl:text-9xl"
                >
                    {String(value).padStart(2, "0")}
                </motion.div>

                <div className="mt-9 flex items-center gap-4">
                    <span className="h-px w-10 bg-champagne/30" />
                    <span className="overline text-[16px] text-ivory/60 md:text-[18px]">
                        {label}
                    </span>
                    <span className="h-px w-10 bg-champagne/30" />
                </div>
            </div>
        </ScrollShift>
    );
}

export default function Countdown() {
    const [t, setT] = useState(calc());
    const sectionRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 68,
        damping: 26,
        restDelta: 0.0008,
    });

    const sectionY = useTransform(
        progress,
        [0, 1],
        [0, reduceMotion ? 0 : -40],
    );
    const dividerScale = useTransform(progress, [0, 0.5, 1], [0.6, 1, 0.85]);

    useEffect(() => {
        const i = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(i);
    }, []);

    const cells = [
        { value: t.days, label: "Dni" },
        { value: t.hours, label: "Godzin" },
        { value: t.minutes, label: "Minut" },
        { value: t.seconds, label: "Sekund" },
    ];

    return (
        <section
            ref={sectionRef}
            id="odliczanie"
            data-testid="countdown-section"
            className="section-pad relative -mt-16 overflow-hidden bg-ink pt-28 md:-mt-24 md:pt-36"
        >
            <motion.div
                style={reduceMotion ? undefined : { y: sectionY }}
                className="container-luxe will-change-transform"
            >
                <ScrollShift
                    y={[80, -40]}
                    x={[-32, 32]}
                    opacity={[0.2, 1, 1, 0.8]}
                    className="mb-4 flex flex-col items-center text-center md:mb-6"
                >
                    <span className="overline text-[14px] md:text-[17px]">
                        Akt II — Odliczanie
                    </span>
                </ScrollShift>

                <ScrollShift
                    y={[120, -80]}
                    x={[-40, 40]}
                    scale={[0.9, 1.04]}
                    opacity={[0.15, 1, 1, 0.75]}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="mt-6 font-serif italic text-4xl text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
                        Do{" "}
                        <span className="text-champagne not-italic">
                            {"\u201ETak\u201D"}
                        </span>{" "}
                        zostało
                    </h2>

                    <motion.div
                        style={
                            reduceMotion
                                ? undefined
                                : { scaleX: dividerScale }
                        }
                        className="divider-luxe mt-10 w-24 origin-center"
                    />
                </ScrollShift>

                <Film />

                <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-10">
                    {cells.map((cell, i) => (
                        <CountdownCell
                            key={cell.label}
                            value={cell.value}
                            label={cell.label}
                            index={i}
                        />
                    ))}
                </div>

                <ScrollShift
                    y={[50, -30]}
                    opacity={[0.3, 1, 1, 0.5]}
                    className="mt-20 text-center"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-ivory/50">
                        19 — 07 — 2026 · 14:00
                    </p>
                </ScrollShift>
            </motion.div>
        </section>
    );
}
