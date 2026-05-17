import { Reveal } from "@/components/Reveal";


const STORY_IMG =
    "https://images.unsplash.com/photo-1696343995156-3c686d3fc64b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHx2b2d1ZSUyMGVkaXRvcmlhbCUyMGNvdXBsZXxlbnwwfHx8fDE3NzgxNzI1NjJ8MA&ixlib=rb-4.1.0&q=85";

const milestones = [
    {
        year: "2019",
        title: "Pierwsze spojrzenie",
        text: "Wszystko zaczęło się na spotkaniach przy kościele. Spojrzenia ukradkiem, krótkie rozmowy i coś, czego wtedy jeszcze nie potrafiliśmy nazwać.",
    },
    {
        year: "2021",
        title: "Pierwsza podróż",
        text: "Nasz pierwszy zagraniczny wyjazd — Chorwacja. Słońce, Adriatyk i chwile, które po raz pierwszy pozwoliły nam poczuć, że naprawdę tworzymy własny świat.",
    },
    {
        year: "2023",
        title: "Coraz bliżej",
        text: "Codzienność zaczęła mieć wspólny rytm. Długie rozmowy, spontaniczne podróże i przekonanie, że najlepsze momenty zawsze zaczynają się od „razem”.",
    },
    {
        year: "2025",
        title: "Oświadczyny",
        text: "Malta. Wieczór pełen światła, ciepłego powietrza i emocji, których nie da się opisać. Jedno pytanie i odpowiedź, która zmieniła wszystko.",
    },
];

export default function Story() {
    return (
        <section
            id="historia"
            data-testid="story-section"
            className="section-pad relative bg-ink2"
        >
            <div className="container-luxe">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                    <Reveal className="md:col-span-5 md:sticky md:top-32">
                        <span className="overline text-[14px] md:text-[17px]">
    Akt III
</span>
                        <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory leading-[0.95]">
                            Nasza
                            <br />
                            <span className="text-champagne not-italic">
                                Historia
                            </span>
                        </h2>
                        <div className="divider-luxe w-24 my-10" />
                        <p className="text-ivory/70 text-base md:text-lg leading-relaxed max-w-md">
                            Cztery rozdziały. Cztery wspomnienia, które
                            doprowadziły nas tutaj — do dnia, w którym
                            powiemy sobie wszystko bez słów.
                        </p>
                        <div className="mt-12 hidden md:block">
                            <img
                                src={STORY_IMG}
                                alt="Historia"
                                className="w-full aspect-[3/4] object-cover grayscale-[15%]"
                            />
                        </div>
                    </Reveal>

                    <div className="md:col-span-7 space-y-20 md:space-y-32">
                        {milestones.map((m, idx) => (
                            <Reveal
                                key={m.year}
                                delay={idx}
                                className="relative pl-8 md:pl-14"
                            >
                                <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-champagne/60 via-champagne/20 to-transparent" />
                                <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full bg-champagne" />
                                <div className="overline text-[13px] md:text-[16px]">{m.year}</div>
                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 leading-tight">
                                    {m.title}
                                </h3>
                                <p className="text-ivory/65 text-base md:text-lg leading-relaxed max-w-lg">
                                    {m.text}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
