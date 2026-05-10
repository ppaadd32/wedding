import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "/images/weddingBack.png";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
    const overlay = useTransform(scrollYProgress, [0, 1], [0.38, 0.82]);

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

            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
            <div className="absolute inset-0 vignette" />

            <div className="absolute top-0 inset-x-0 z-10">
                <div className="container-luxe pt-32 md:pt-40">
                    <motion.p
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.2 }}
                        className="overline text-center md:text-left text-ivory/75"
                    >
                        Pamiętnik Miłości — Akt I
                    </motion.p>
                </div>
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 0.2 }}
                        className="overline mb-10 text-ivory/80"
                    >
                        19 · 07 · 2026 — Zamek Moszna
                    </motion.div>

                    <h1
                        data-testid="hero-title"
                        className="font-serif italic text-ivory text-[16vw] sm:text-[13vw] md:text-[10.5vw] lg:text-[10rem] xl:text-[12rem] leading-[0.86] tracking-tightest"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.45,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="block"
                        >
                            Agnieszka
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.65 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.0 }}
                            className="block not-italic font-serif text-champagne my-3 md:my-5"
                        >
                            &
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.45,
                                delay: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="block"
                        >
                            Paweł
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                        className="mt-14 flex flex-col items-center gap-8"
                    >
                        <a
                            href="#rsvp"
                            data-testid="hero-cta-rsvp"
                            className="group relative inline-flex items-center gap-4 px-10 py-4 border border-champagne/70 text-champagne text-[12px] uppercase tracking-[0.42em] hover:bg-champagne hover:text-ink transition-all duration-700"
                        >
                            <span>Potwierdź obecność</span>
                            <span className="w-7 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 z-10">
                <div className="container-luxe flex items-end justify-between gap-6">
                    <div className="hidden md:block">
                        <div className="overline mb-3 text-ivory/65">
                            Lokalizacja
                        </div>
                        <div className="font-serif text-2xl md:text-3xl text-ivory leading-tight">
                            Zabrze · Moszna
                        </div>
                    </div>

                    <motion.a
                        href="#odliczanie"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                        className="flex flex-col items-center gap-3 text-ivory/60 hover:text-champagne transition-colors"
                        data-testid="hero-scroll-indicator"
                    >
                        <span className="overline text-[11px]">Przewiń</span>
                        <ArrowDown size={20} />
                    </motion.a>

                    <div className="hidden md:block text-right">
                        <div className="overline mb-3 text-ivory/65">Data</div>
                        <div className="font-serif text-2xl md:text-3xl text-ivory leading-tight">
                            19 lipca 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}