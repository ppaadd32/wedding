import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollShift } from "@/components/ScrollMotion";
import { premiumEase } from "@/components/Reveal";

const YOUTUBE_ID = "mVTUYGZM4UY";
const EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&color=white`;

export default function Film() {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 68,
        damping: 26,
        restDelta: 0.0008,
    });

    const frameY = useTransform(progress, [0, 1], [100, -80]);
    const frameScale = useTransform(progress, [0, 0.5, 1], [0.88, 1, 0.94]);
    const frameRotate = useTransform(progress, [0, 1], [2, -1.5]);
    const glowOpacity = useTransform(progress, [0, 0.4, 0.7, 1], [0, 0.6, 0.4, 0]);

    return (
        <motion.div
            ref={ref}
            data-testid="film-section"
            className="relative mb-20 md:mb-28"
        >
            <ScrollShift
                y={[40, -30]}
                x={[-24, 24]}
                className="mb-6 text-center md:mb-8"
            >
                <span className="overline text-[12px] text-ivory/55 md:text-[14px]">
                    Nasza historia w kadrze
                </span>
            </ScrollShift>

            <motion.div
                style={
                    reduceMotion
                        ? undefined
                        : {
                              y: frameY,
                              scale: frameScale,
                              rotate: frameRotate,
                          }
                }
                className="relative mx-auto max-w-4xl will-change-transform"
            >
                <motion.div
                    style={reduceMotion ? undefined : { opacity: glowOpacity }}
                    className="pointer-events-none absolute -inset-6 rounded-sm bg-champagne/10 blur-3xl md:-inset-10"
                    aria-hidden
                />

                <div className="hairline relative overflow-hidden bg-ink2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.4, ease: premiumEase }}
                        className="absolute inset-x-0 top-0 z-10 h-px origin-center bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
                    />

                    <div className="relative aspect-video w-full">
                        <iframe
                            src={EMBED}
                            title="Film — Agnieszka & Paweł"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                        />
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.4, delay: 0.15, ease: premiumEase }}
                        className="absolute inset-x-0 bottom-0 z-10 h-px origin-center bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
                    />
                </div>

                <ScrollShift
                    y={[20, -16]}
                    x={[16, -16]}
                    className="mt-5 text-center md:mt-6"
                >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-ivory/45">
                        Obejrzyj z dźwiękiem · pełny ekran dostępny w odtwarzaczu
                    </p>
                </ScrollShift>
            </motion.div>
        </motion.div>
    );
}
