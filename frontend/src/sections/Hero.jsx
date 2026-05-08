import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
    "/images/weddingBack.png";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative h-[100svh] w-full overflow-hidden"
        >
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 will-change-transform"
            >
                <img
                    src={HERO_IMG}
                    alt="Agnieszka & Paweł"
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.div
                style={{ opacity: overlay }}
                className="absolute inset-0 bg-ink"
            />
            <div className="absolute inset-0 vignette" />

            {/* Top whisper */}
            <div className="absolute top-0 inset-x-0 z-10">
                <div className="container-luxe pt-28 md:pt-32">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.2 }}
                        className="overline text-center md:text-left"
                    >
                        Pamiętnik Miłości — Akt I
                    </motion.p>
                </div>
            </div>

            {/* Center monogram */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, delay: 0.2 }}
                        className="overline mb-8"
                    >
                        19 · 07 · 2026 — Zamek Moszna
                    </motion.div>

                    <h1
                        data-testid="hero-title"
                        className="font-serif italic text-ivory text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-[0.9] tracking-tightest"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.4,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="block"
                        >
                            Agnieszka
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.0 }}
                            className="block not-italic font-serif text-champagne my-2 md:my-4"
                        >
                            &
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.4,
                                delay: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="block"
                        >
                            Paweł
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                        className="mt-12 flex flex-col items-center gap-8"
                    >
                        <a
                            href="#rsvp"
                            data-testid="hero-cta-rsvp"
                            className="group relative inline-flex items-center gap-3 px-8 py-3.5 border border-champagne/70 text-champagne text-[11px] uppercase tracking-[0.4em] hover:bg-champagne hover:text-ink transition-all duration-700"
                        >
                            <span>Potwierdź obecność</span>
                            <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-500" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom corners */}
            <div className="absolute bottom-8 left-0 right-0 z-10">
                <div className="container-luxe flex items-end justify-between gap-6">
                    <div className="hidden md:block">
                        <div className="overline mb-2 text-ivory/70">
                            Lokalizacja
                        </div>
                        <div className="font-serif text-xl md:text-2xl text-ivory leading-tight">
                            Zabrze · Moszna
                        </div>
                    </div>
                    <motion.a
                        href="#odliczanie"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-ivory/60 hover:text-champagne transition-colors"
                        data-testid="hero-scroll-indicator"
                    >
                        <span className="overline">Przewiń</span>
                        <ArrowDown size={16} />
                    </motion.a>
                    <div className="hidden md:block text-right">
                        <div className="overline mb-2 text-ivory/70">Data</div>
                        <div className="font-serif text-xl md:text-2xl text-ivory leading-tight">
                            19 lipca 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
