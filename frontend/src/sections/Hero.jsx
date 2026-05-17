import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { appleEase, premiumEase } from "@/components/Reveal";

const HERO_IMG = "/images/weddingBack.png";

const fadeIn = (delay = 0, y = 48) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.5, delay, ease: premiumEase },
});

export default function Hero() {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 72,
        damping: 28,
        restDelta: 0.0008,
    });

    const imageY = useTransform(smoothProgress, [0, 1], [0, reduceMotion ? 0 : 340]);
    const imageX = useTransform(smoothProgress, [0, 1], [0, reduceMotion ? 0 : -40]);
    const imageScale = useTransform(
        smoothProgress,
        [0, 1],
        [1.1, reduceMotion ? 1.1 : 1.28],
    );
    const imageRotate = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : 1.5],
    );
    const overlayOpacity = useTransform(smoothProgress, [0, 0.65, 1], [0.42, 0.62, 0.92]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.4, 0.8], [1, 0.9, 0]);
    const contentY = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : -140],
    );
    const nameLeftX = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : -80],
    );
    const nameRightX = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : 80],
    );
    const ampersandY = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : -50],
    );
    const ctaY = useTransform(
        smoothProgress,
        [0, 1],
        [0, reduceMotion ? 0 : 60],
    );
    const letterboxOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
    const bridgeOpacity = useTransform(smoothProgress, [0.55, 1], [0, 1]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
        >
            {/* Cinematic letterbox */}
            <motion.div
                style={{ opacity: letterboxOpacity }}
                className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[7vh] min-h-[28px] bg-ink/90"
                aria-hidden
            />
            <motion.div
                style={{ opacity: letterboxOpacity }}
                className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[7vh] min-h-[28px] bg-ink/90"
                aria-hidden
            />

            {/* Parallax background */}
            <motion.div
                style={{
                    y: imageY,
                    x: imageX,
                    scale: imageScale,
                    rotate: imageRotate,
                }}
                className="hero-cinematic absolute inset-0 origin-center will-change-transform"
            >
                <img
                    src={HERO_IMG}
                    alt="Agnieszka & Paweł"
                    className="h-[115%] w-full object-cover object-[center_28%] sm:object-center"
                />
            </motion.div>

            <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute inset-0 bg-ink"
            />

            {/* Warm cinematic scrim */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.2, ease: appleEase }}
                className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.4, delay: 0.3, ease: premiumEase }}
                className="absolute inset-0 vignette"
            />

            {/* Scroll bridge into next section */}
            <motion.div
                style={{ opacity: bridgeOpacity }}
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-ink via-ink/80 to-transparent"
            />

            {/* Top meta */}
            <motion.div
                {...fadeIn(0.9, 24)}
                className="absolute top-24 left-0 right-0 z-20 md:top-28"
            >
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="container-luxe flex items-start justify-between gap-4"
                >
                    <div className="overline text-[11px] text-ivory/70 sm:text-[13px] md:text-[17px]">
                        <span className="md:hidden">Akt I</span>
                        <span className="hidden md:inline">
                            Akt I — Pamiętnik Miłości
                        </span>
                    </div>
                    <div className="overline text-right text-[11px] text-ivory/70 sm:text-[13px] md:text-[17px]">
                        19 · 07 · 2026
                        <span className="hidden md:inline"> — Zamek Moszna</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Center content */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: premiumEase }}
                    className="text-center"
                >
                    <h1
                        data-testid="hero-title"
                        className="font-serif italic text-ivory text-[15vw] leading-[0.88] tracking-tightest sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem]"
                    >
                        <motion.span
                            {...fadeIn(0.55, 64)}
                            style={{ x: nameLeftX }}
                            className="block will-change-transform"
                        >
                            Agnieszka
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.65 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ y: ampersandY }}
                            transition={{
                                duration: 1.25,
                                delay: 1.05,
                                ease: premiumEase,
                            }}
                            className="my-1 block font-serif text-champagne not-italic will-change-transform sm:my-2 md:my-4"
                        >
                            &
                        </motion.span>
                        <motion.span
                            {...fadeIn(1.25, 64)}
                            style={{ x: nameRightX }}
                            className="block will-change-transform"
                        >
                            Paweł
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ y: ctaY }}
                        transition={{
                            duration: 1.35,
                            delay: 1.85,
                            ease: premiumEase,
                        }}
                        className="mt-8 flex flex-col items-center gap-6 will-change-transform sm:mt-12 sm:gap-8"
                    >
                        <motion.a
                            href="#rsvp"
                            data-testid="hero-cta-rsvp"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.6, ease: appleEase }}
                            className="group relative inline-flex items-center gap-3 border border-champagne/70 px-7 py-3 text-[10px] uppercase tracking-[0.35em] text-champagne transition-colors duration-700 hover:bg-champagne hover:text-ink sm:px-8 sm:py-3.5 sm:text-[11px] sm:tracking-[0.4em]"
                        >
                            <span>Potwierdź obecność</span>
                            <span className="h-[1px] w-6 bg-current transition-all duration-700 group-hover:w-10" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom meta */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="absolute bottom-20 left-0 right-0 z-20 sm:bottom-24 md:bottom-8"
            >
                <div className="container-luxe flex items-end justify-between gap-6">
                    <motion.div
                        {...fadeIn(2.1, 20)}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 2.2,
                                ease: premiumEase,
                            }}
                            className="mb-3 h-px w-10 origin-left bg-champagne/40"
                        />
                        <motion.div
                            {...fadeIn(2.15, 16)}
                            className="overline text-[11px] md:text-[14px] lg:text-[17px]"
                        >
                            Lokalizacja
                        </motion.div>
                        <motion.div
                            {...fadeIn(2.25, 16)}
                            className="font-serif text-lg leading-tight text-ivory md:text-2xl"
                        >
                            Zabrze · Moszna
                        </motion.div>
                    </motion.div>

                    <motion.div
                        {...fadeIn(2.1, 20)}
                        className="text-right"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 2.2,
                                ease: premiumEase,
                            }}
                            className="mb-3 ml-auto h-px w-10 origin-right bg-champagne/40"
                        />
                        <motion.div
                            {...fadeIn(2.15, 16)}
                            className="overline text-[11px] md:text-[14px] lg:text-[17px]"
                        >
                            Data
                        </motion.div>
                        <motion.div
                            {...fadeIn(2.25, 16)}
                            className="font-serif text-lg leading-tight text-ivory md:text-2xl"
                        >
                            19 lipca 2026
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:bottom-10"
            >
            <motion.a
                href="#odliczanie"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.6, ease: premiumEase }}
                className="flex flex-col items-center gap-2 text-ivory/50 transition-colors hover:text-champagne"
                aria-label="Przewiń w dół"
            >
                <span className="text-[9px] uppercase tracking-[0.45em]">
                    Odkryj
                </span>
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown size={16} strokeWidth={1.25} />
                </motion.span>
            </motion.a>
            </motion.div>
        </section>
    );
}
