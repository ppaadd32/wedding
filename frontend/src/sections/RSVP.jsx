import { useState } from "react";
import axios from "axios";
import { Reveal } from "@/components/Reveal";
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
            <div className="container-luxe">
                <div className="grid md:grid-cols-12 gap-10 md:gap-20">
                    <Reveal className="md:col-span-5">
                        <span className="overline text-[14px] md:text-[17px]">Akt VIII — RSVP</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory leading-[0.95]">
                            Powiedz
                            <br />
                            <span className="text-champagne not-italic">
                                {"\u201Ebędę\u201D"}
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 my-10" />
                        <p className="text-ivory/65 text-base md:text-lg leading-relaxed max-w-md">
                            Prosimy o potwierdzenie obecności do{" "}
                            <span className="text-champagne">
                                10 czerwca 2026
                            </span>
                            . Wasze odpowiedzi pomogą nam dopiąć ostatni
                            detal — kolacji w Sali Lustrzanej.
                        </p>
                    </Reveal>

                    <Reveal delay={1} className="md:col-span-7">
                        {done ? (
                            <div
                                data-testid="rsvp-success"
                                className="hairline p-10 md:p-16 text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full border border-champagne/40 flex items-center justify-center mb-8">
                                    <Check
                                        className="text-champagne"
                                        size={28}
                                    />
                                </div>
                                <h3 className="font-serif italic text-3xl md:text-4xl text-ivory mb-4">
                                    Otrzymaliśmy Twoją odpowiedź
                                </h3>
                                <p className="text-ivory/60 max-w-md mx-auto">
                                    Z całego serca dziękujemy. Każde słowo
                                    od Was znaczy dla nas niezwykle dużo.
                                </p>
                                <button
                                    onClick={() => {
                                        setForm(initial);
                                        setDone(false);
                                    }}
                                    data-testid="rsvp-reset"
                                    className="mt-10 text-[11px] uppercase tracking-[0.3em] text-champagne hover:text-ivory transition-colors"
                                >
                                    Zgłoś kolejną osobę
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                className="space-y-10"
                                data-testid="rsvp-form"
                            >
                                <div className="grid sm:grid-cols-2 gap-8">
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
                                </div>

                                <div>
                                    <label className={labelCls}>
                                        Czy będziesz z nami?
                                    </label>
                                    <div className="grid grid-cols-2 gap-4 mt-1">
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
                                                className={`px-5 py-4 border text-[11px] uppercase tracking-[0.3em] transition-all duration-500 ${
                                                    form.attendance === o.v
                                                        ? "border-champagne text-ink bg-champagne"
                                                        : "border-white/15 text-ivory/70 hover:border-champagne/50 hover:text-champagne"
                                                }`}
                                            >
                                                {o.l}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {form.attendance === "yes" && (
                                    <>
                                        <div className="grid sm:grid-cols-2 gap-8">
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
                                        </div>

                                        <div>
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
                                        </div>
                                    </>
                                )}

                                <div>
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
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        data-testid="rsvp-submit"
                                        className="group inline-flex items-center gap-3 px-10 py-4 border border-champagne text-champagne text-[11px] uppercase tracking-[0.4em] hover:bg-champagne hover:text-ink transition-all duration-700 disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <Loader2
                                                size={14}
                                                className="animate-spin"
                                            />
                                        ) : (
                                            <span className="w-2 h-2 bg-current rounded-full" />
                                        )}
                                        Wyślij potwierdzenie
                                        <span className="w-6 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
