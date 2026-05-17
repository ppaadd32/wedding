import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { StaggerReveal, staggerItem, premiumEase } from "@/components/Reveal";
import { ScrollShift } from "@/components/ScrollMotion";
import { toast } from "sonner";
import { Loader2, Check } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = {
    name: "",
    email: "",
    attendance: "yes",
    guests_count: 1,
    plus_one_name: "",
    dietary: "",
    message: "",
};

const successVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.2, ease: premiumEase },
    },
};

export default function RSVP() {
    const [form, setForm] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim()) {
            toast.error("Podaj swoje imię i nazwisko");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API}/rsvp`, {
                ...form,
                guests_count: Number(form.guests_count) || 1,
            });
            setDone(true);
            toast.success(
                form.attendance === "yes"
                    ? "Dziękujemy! Do zobaczenia 19 lipca."
                    : "Dziękujemy za informację. Będzie nam Was brakować.",
            );
        } catch (err) {
            console.error(err);
            toast.error("Coś poszło nie tak. Spróbuj ponownie.");
        } finally {
            setLoading(false);
        }
    };

    const inputCls =
        "w-full bg-transparent border-b border-white/15 px-0 py-3 text-ivory placeholder-ivory/30 focus:outline-none focus:border-champagne transition-colors text-base font-sans";
    const labelCls = "overline text-ivory/50 mb-3 block";

    return (
        <section
            id="rsvp"
            data-testid="rsvp-section"
            className="section-pad relative bg-ink"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.4, ease: premiumEase }}
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink2/50 to-transparent"
            />

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: premiumEase }}
                className="absolute inset-x-6 top-0 h-px origin-center bg-gradient-to-r from-transparent via-champagne/25 to-transparent sm:inset-x-10 md:inset-x-16 lg:inset-x-24"
            />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 1.3, ease: premiumEase }}
                className="container-luxe"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    className="grid gap-10 md:grid-cols-12 md:gap-20"
                >
                    <ScrollShift
                        y={[70, -50]}
                        x={[-36, 24]}
                        opacity={[0.2, 1, 1, 0.85]}
                        className="md:col-span-5"
                    >
                        <span className="overline text-[14px] md:text-[17px]">
                            Akt VIII — RSVP
                        </span>
                        <h2 className="mt-6 font-serif italic text-5xl leading-[0.95] text-ivory md:text-6xl lg:text-7xl">
                            Powiedz
                            <br />
                            <span className="text-champagne not-italic">
                                {"\u201Ebędę\u201D"}
                            </span>
                        </h2>
                        <div className="divider-luxe my-10 w-24" />
                        <p className="max-w-md text-base leading-relaxed text-ivory/65 md:text-lg">
                            Prosimy o potwierdzenie obecności do{" "}
                            <span className="text-champagne">
                                10 czerwca 2026
                            </span>
                            . Wasze odpowiedzi pomogą nam dopiąć ostatni
                            detal — kolacji w Sali Lustrzanej.
                        </p>
                    </ScrollShift>

                    <ScrollShift
                        y={[90, -60]}
                        x={[40, -30]}
                        scale={[0.94, 1]}
                        opacity={[0.15, 1, 1, 0.9]}
                        className="md:col-span-7"
                    >
                        {done ? (
                            <motion.div
                                initial="hidden"
                                animate="show"
                                variants={successVariants}
                                data-testid="rsvp-success"
                                className="hairline p-10 text-center md:p-16"
                            >
                                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-champagne/40">
                                    <Check
                                        className="text-champagne"
                                        size={28}
                                    />
                                </div>
                                <h3 className="mb-4 font-serif italic text-3xl text-ivory md:text-4xl">
                                    Otrzymaliśmy Twoją odpowiedź
                                </h3>
                                <p className="mx-auto max-w-md text-ivory/60">
                                    Z całego serca dziękujemy. Każde słowo
                                    od Was znaczy dla nas niezwykle dużo.
                                </p>
                                <button
                                    onClick={() => {
                                        setForm(initial);
                                        setDone(false);
                                    }}
                                    data-testid="rsvp-reset"
                                    className="mt-10 text-[11px] uppercase tracking-[0.3em] text-champagne transition-colors hover:text-ivory"
                                >
                                    Zgłoś kolejną osobę
                                </button>
                            </motion.div>
                        ) : (
                            <StaggerReveal
                                as={motion.form}
                                amount={0.12}
                                className="space-y-10"
                                onSubmit={submit}
                                data-testid="rsvp-form"
                            >
                                <motion.div
                                    variants={staggerItem}
                                    className="grid gap-8 sm:grid-cols-2"
                                >
                                    <div>
                                        <label className={labelCls}>
                                            Imię i nazwisko
                                        </label>
                                        <input
                                            data-testid="rsvp-name"
                                            type="text"
                                            value={form.name}
                                            onChange={(e) =>
                                                set("name", e.target.value)
                                            }
                                            className={inputCls}
                                            placeholder="Anna Kowalska"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className={labelCls}>
                                            E-mail
                                        </label>
                                        <input
                                            data-testid="rsvp-email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                set("email", e.target.value)
                                            }
                                            className={inputCls}
                                            placeholder="anna@example.com"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={staggerItem}>
                                    <label className={labelCls}>
                                        Czy będziesz z nami?
                                    </label>
                                    <div className="mt-1 grid grid-cols-2 gap-4">
                                        {[
                                            { v: "yes", l: "Tak, oczywiście" },
                                            { v: "no", l: "Niestety nie" },
                                        ].map((o) => (
                                            <button
                                                type="button"
                                                key={o.v}
                                                data-testid={`rsvp-attendance-${o.v}`}
                                                onClick={() =>
                                                    set("attendance", o.v)
                                                }
                                                className={`border px-5 py-4 text-[11px] uppercase tracking-[0.3em] transition-all duration-500 ${
                                                    form.attendance === o.v
                                                        ? "border-champagne bg-champagne text-ink"
                                                        : "border-white/15 text-ivory/70 hover:border-champagne/50 hover:text-champagne"
                                                }`}
                                            >
                                                {o.l}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>

                                {form.attendance === "yes" && (
                                    <>
                                        <motion.div
                                            variants={staggerItem}
                                            className="grid gap-8 sm:grid-cols-2"
                                        >
                                            <div>
                                                <label className={labelCls}>
                                                    Liczba osób
                                                </label>
                                                <input
                                                    data-testid="rsvp-guests"
                                                    type="number"
                                                    min="1"
                                                    max="6"
                                                    value={form.guests_count}
                                                    onChange={(e) =>
                                                        set(
                                                            "guests_count",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={inputCls}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelCls}>
                                                    Osoba towarzysząca
                                                </label>
                                                <input
                                                    data-testid="rsvp-plus-one"
                                                    type="text"
                                                    value={form.plus_one_name}
                                                    onChange={(e) =>
                                                        set(
                                                            "plus_one_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={inputCls}
                                                    placeholder="Imię i nazwisko"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={staggerItem}>
                                            <label className={labelCls}>
                                                Dieta / Alergie
                                            </label>
                                            <input
                                                data-testid="rsvp-dietary"
                                                type="text"
                                                value={form.dietary}
                                                onChange={(e) =>
                                                    set(
                                                        "dietary",
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputCls}
                                                placeholder="Wegańska, bezglutenowa..."
                                            />
                                        </motion.div>
                                    </>
                                )}

                                <motion.div variants={staggerItem}>
                                    <label className={labelCls}>
                                        Słowo do Pary Młodej
                                    </label>
                                    <textarea
                                        data-testid="rsvp-message"
                                        value={form.message}
                                        onChange={(e) =>
                                            set("message", e.target.value)
                                        }
                                        rows={3}
                                        className={`${inputCls} resize-none`}
                                        placeholder="Opcjonalnie..."
                                    />
                                </motion.div>

                                <motion.div
                                    variants={staggerItem}
                                    className="pt-4"
                                >
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        data-testid="rsvp-submit"
                                        className="group inline-flex items-center gap-3 border border-champagne px-10 py-4 text-[11px] uppercase tracking-[0.4em] text-champagne transition-all duration-700 hover:bg-champagne hover:text-ink disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <Loader2
                                                size={14}
                                                className="animate-spin"
                                            />
                                        ) : (
                                            <span className="h-2 w-2 rounded-full bg-current" />
                                        )}
                                        Wyślij potwierdzenie
                                        <span className="h-[1px] w-6 bg-current transition-all duration-500 group-hover:w-12" />
                                    </button>
                                </motion.div>
                            </StaggerReveal>
                        )}
                    </ScrollShift>
                </motion.div>
            </motion.div>
        </section>
    );
}
