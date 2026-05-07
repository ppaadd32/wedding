import { motion } from "framer-motion";

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

export function Reveal({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={delay}
            className={className}
        >
            {children}
        </motion.div>
    );
}
