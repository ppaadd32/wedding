import { Reveal } from "@/components/Reveal";
import { QRCodeSVG } from "qrcode.react";

const KAHOOT_URL = "https://kahoot.it/?pin=000000";

export default function Kahoot() {
    return (
        <section
            id="kahoot"
            data-testid="kahoot-section"
            className="section-pad relative bg-ink"
        >
            <div className="container-luxe">
                <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
                    <Reveal className="md:col-span-7">
                        <span className="overline">Akt X — Niespodzianka</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory leading-[0.95]">
                            Wedding
                            <br />
                            <span className="text-champagne not-italic">
                                Kahoot
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 my-10" />
                        <p className="text-ivory/65 text-base md:text-lg leading-relaxed max-w-xl">
                            Jak dobrze nas znacie? Zeskanuj kod, dołącz do
                            quizu i powalcz o tytuł{" "}
                            <span className="text-champagne italic">
                                Najlepszego Świadka Naszej Historii
                            </span>{" "}
                            — zwycięzca otrzyma butelkę z naszej winnicy.
                        </p>

                        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                            <div>
                                <div className="font-serif text-4xl md:text-5xl text-champagne">
                                    10
                                </div>
                                <div className="overline mt-2 text-ivory/50">
                                    Pytań
                                </div>
                            </div>
                            <div>
                                <div className="font-serif text-4xl md:text-5xl text-champagne">
                                    5'
                                </div>
                                <div className="overline mt-2 text-ivory/50">
                                    Minut
                                </div>
                            </div>
                            <div>
                                <div className="font-serif text-4xl md:text-5xl text-champagne">
                                    1
                                </div>
                                <div className="overline mt-2 text-ivory/50">
                                    Zwycięzca
                                </div>
                            </div>
                        </div>

                        <a
                            href={KAHOOT_URL}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="kahoot-link"
                            className="group inline-flex items-center gap-3 mt-12 px-8 py-3.5 border border-champagne/70 text-champagne text-[11px] uppercase tracking-[0.4em] hover:bg-champagne hover:text-ink transition-all duration-700"
                        >
                            <span>Otwórz quiz</span>
                            <span className="w-6 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
                        </a>
                    </Reveal>

                    <Reveal delay={1} className="md:col-span-5">
                        <div className="relative hairline p-10 md:p-12 bg-ink2">
                            <div className="absolute -top-3 left-8 px-4 bg-ink2 overline">
                                Skanuj
                            </div>
                            <div className="bg-ivory p-6 md:p-8">
                                <QRCodeSVG
                                    value={KAHOOT_URL}
                                    size={280}
                                    fgColor="#0A0A0A"
                                    bgColor="#F9F8F6"
                                    level="M"
                                    className="w-full h-auto"
                                    data-testid="kahoot-qr"
                                />
                            </div>
                            <div className="mt-8 text-center">
                                <div className="overline text-ivory/50 mb-2">
                                    Pin
                                </div>
                                <div className="font-serif text-3xl md:text-4xl text-champagne tracking-[0.3em]">
                                    000 000
                                </div>
                                <p className="text-ivory/40 text-xs mt-3">
                                    Pin zostanie odsłonięty w dniu wesela.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
