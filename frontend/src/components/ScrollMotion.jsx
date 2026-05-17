import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

const springConfig = { stiffness: 68, damping: 26, restDelta: 0.0008 };

/**
 * Continuous scroll-linked motion — elements shift position as you scroll.
 */
export function ScrollShift({
    children,
    className = "",
    y = [64, -64],
    x = [0, 0],
    scale = [1, 1],
    rotate = [0, 0],
    opacity,
    offset = ["start end", "end start"],
    as: Tag = motion.div,
}) {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    const progress = useSpring(scrollYProgress, springConfig);

    const translateY = useTransform(progress, [0, 1], y);
    const translateX = useTransform(progress, [0, 1], x);
    const scaleVal = useTransform(progress, [0, 1], scale);
    const rotateVal = useTransform(progress, [0, 1], rotate);
    const opacityVal = useTransform(
        progress,
        [0, 0.2, 0.8, 1],
        opacity ?? [1, 1, 1, 1],
    );

    if (reduceMotion) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        );
    }

    const style = {
        y: translateY,
        x: translateX,
        scale: scaleVal,
        rotate: rotateVal,
        ...(opacity ? { opacity: opacityVal } : {}),
    };

    return (
        <Tag
            ref={ref}
            style={style}
            className={`will-change-transform ${className}`.trim()}
        >
            {children}
        </Tag>
    );
}

/** Alternating scroll vectors for list / grid items */
export function itemMotion(index) {
    const presets = [
        { y: [110, -60], x: [-56, 12], scale: [0.84, 1], rotate: [-1.2, 0.6] },
        { y: [90, -75], x: [-24, 28], scale: [0.86, 1], rotate: [0, 0] },
        { y: [100, -65], x: [24, -28], scale: [0.87, 1], rotate: [0.8, -0.4] },
        { y: [115, -50], x: [56, -12], scale: [0.83, 1], rotate: [1.4, -0.8] },
        { y: [85, -80], x: [-40, 40], scale: [0.88, 1], rotate: [-0.6, 0.3] },
        { y: [105, -55], x: [40, -36], scale: [0.85, 1], rotate: [1, -0.5] },
    ];
    const p = presets[index % presets.length];
    return {
        ...p,
        opacity: [0.2, 1, 1, 0.72],
    };
}

export const actHeader = {
    y: [110, -70],
    x: [-32, 32],
    scale: [0.9, 1.03],
    opacity: [0.1, 1, 1, 0.72],
};

export const actHeaderCenter = {
    y: [120, -80],
    x: [0, 0],
    scale: [0.88, 1.02],
    opacity: [0.08, 1, 1, 0.68],
};

export const actColLeft = {
    y: [85, -55],
    x: [-52, 18],
    scale: [0.94, 1],
    opacity: [0.15, 1, 1, 0.82],
};

export const actColRight = {
    y: [95, -65],
    x: [52, -22],
    scale: [0.93, 1],
    opacity: [0.12, 1, 1, 0.78],
};

export function ActHeader({ children, className = "", center = false }) {
    const preset = center ? actHeaderCenter : actHeader;
    return (
        <ScrollShift className={className} {...preset}>
            {children}
        </ScrollShift>
    );
}

/** Pin-style: element moves faster than scroll (depth layer). */
export function ScrollLayer({
    children,
    className = "",
    speed = 0.35,
    offset = ["start end", "end start"],
}) {
    const amount = 120 * speed;
    return (
        <ScrollShift
            className={className}
            y={[amount, -amount]}
            offset={offset}
        >
            {children}
        </ScrollShift>
    );
}
