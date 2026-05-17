import { motion, useReducedMotion } from "framer-motion";

export const premiumEase = [0.22, 1, 0.36, 1];
export const appleEase = [0.25, 0.1, 0.25, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25,
            delay: i * 0.1,
            ease: premiumEase,
        },
    }),
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.15,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 32, x: -6 },
    show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.15,
            ease: premiumEase,
        },
    },
};

export function Reveal({
    children,
    delay = 0,
    className = "",
    amount = 0.2,
}) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <motion.div className={className}>{children}</motion.div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount }}
            variants={fadeUp}
            custom={delay}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerReveal({
    children,
    className = "",
    amount = 0.15,
    as: Component = motion.div,
    ...rest
}) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return (
            <Component className={className} {...rest}>
                {children}
            </Component>
        );
    }

    return (
        <Component
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount }}
            variants={staggerContainer}
            className={className}
            {...rest}
        >
            {children}
        </Component>
    );
}
