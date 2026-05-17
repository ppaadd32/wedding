import { QRCodeSVG } from "qrcode.react";
import {
    ScrollLayer,
    ScrollShift,
    actColLeft,
    actColRight,
    itemMotion,
} from "@/components/ScrollMotion";

const KAHOOT_URL = "https://kahoot.it/?pin=000000";

export default function Kahoot() {
    return (
        <section
            id="kahoot"
            data-testid="kahoot-section"
            className="section-pad relative overflow-hidden bg-ink"
        >
            <div className="container-luxe">
                <div className="grid items-center gap-12 md:grid-cols-12 md:gap-20">
                    <ScrollShift
                        {...actColLeft}
                        className="md:col-span-7"
                    >
                        <span className="overline text-[14px] md:text-[17px]">
                            Akt X — Niespodzianka
                        </span>
                        <h2 className="mt-6 font-serif italic text-5xl leading-[0.95] text-ivory md:text-6xl lg:text-7xl">
                            Wedding
                            <br />
                            <span className="text-champagne not-italic">
                                Kahoot
                            </span>
                        </h2>
                        <div className="divider-luxe my-10 w-24" />
                        <p className="max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">
                            Jak dobrze nas znacie? Zeskanuj kod, dołącz do
                            quizu i powalcz o tytuł{" "}
                            <span className="italic text-champagne">
                                Najlepszego Świadka Naszej Historii
                            </span>{" "}
                            — zwycięzca otrzyma butelkę z naszej winnicy.
                        </p>

                        <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                            {[10, "5'", 1].map((val, i) => (
                                <ScrollShift
                                    key={i}
                                    {...itemMotion(i)}
                                    className="text-center"
                                >
                                    <div className="font-serif text-4xl text-champagne md:text-5xl">
                                        {val}
                                    </div>
                                    <div className="overline mt-2 text-ivory/50">
                                        {i === 0
                                            ? "Pytań"
                                            : i === 1
                                              ? "Minut"
                                              : "Zwycięzca"}
                                    </div>
                                </ScrollShift>
                            ))}
                        </div>

                        <ScrollShift
                            y={[40, -25]}
                            x={[-20, 30]}
                            className="mt-12 inline-block"
                        >
                            <a
                                href={KAHOOT_URL}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="kahoot-link"
                                className="group inline-flex items-center gap-3 border border-champagne/70 px-8 py-3.5 text-[11px] uppercase tracking-[0.4em] text-champagne transition-all duration-700 hover:bg-champagne hover:text-ink"
                            >
                                <span>Otwórz quiz</span>
                                <span className="h-[1px] w-6 bg-current transition-all duration-500 group-hover:w-12" />
                            </a>
                        </ScrollShift>
                    </ScrollShift>

                    <ScrollShift
                        {...actColRight}
                        y={[100, -70]}
                        scale={[0.88, 1]}
                        rotate={[2, -2]}
                        className="md:col-span-5"
                    >
                        <ScrollLayer speed={0.4}>
                            <div className="relative hairline bg-ink2 p-10 md:p-12">
                                <div className="absolute -top-3 left-8 bg-ink2 px-4 overline">
                                    Skanuj
                                </div>
                                <div className="bg-ivory p-6 md:p-8">
                                    <QRCodeSVG
                                        value={KAHOOT_URL}
                                        size={280}
                                        fgColor="#0A0A0A"
                                        bgColor="#F9F8F6"
                                        level="M"
                                        className="h-auto w-full"
                                        data-testid="kahoot-qr"
                                    />
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="overline mb-2 text-ivory/50">
                                        Pin
                                    </div>
                                    <div className="font-serif text-3xl tracking-[0.3em] text-champagne md:text-4xl">
                                        000 000
                                    </div>
                                    <p className="mt-3 text-xs text-ivory/40">
                                        Pin zostanie odsłonięty w dniu wesela.
                                    </p>
                                </div>
                            </div>
                        </ScrollLayer>
                    </ScrollShift>
                </div>
            </div>
        </section>
    );
}
