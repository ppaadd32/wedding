import { Reveal } from "@/components/Reveal";

const images = [
    {
        src: "https://images.unsplash.com/photo-1662833833862-4f5328756afa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjB3ZWRkaW5nJTIwZGV0YWlsc3xlbnwwfHx8fDE3NzgxNzI1NjJ8MA&ixlib=rb-4.1.0&q=85",
        cls: "md:col-span-7 aspect-[4/3]",
        cap: "Obrączki",
    },
    {
        src: "https://static.prod-images.emergentagent.com/jobs/f06a9f9c-d82b-43ef-be36-a164b4102429/images/bd9368a061bbda47cfb288ad9c98ec421dbd4087be5f4a76bf33f9e5dcd6798f.png",
        cls: "md:col-span-5 aspect-[3/4]",
        cap: "Kieliszki",
    },
    {
        src: "https://images.unsplash.com/photo-1696343995156-3c686d3fc64b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHx2b2d1ZSUyMGVkaXRvcmlhbCUyMGNvdXBsZXxlbnwwfHx8fDE3NzgxNzI1NjJ8MA&ixlib=rb-4.1.0&q=85",
        cls: "md:col-span-4 aspect-[3/4]",
        cap: "Polna ścieżka",
    },
    {
        src: "https://images.unsplash.com/photo-1698833994525-c2c0c02601fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMGVkaXRvcmlhbCUyMGNvdXBsZXxlbnwwfHx8fDE3NzgxNzI1NjJ8MA&ixlib=rb-4.1.0&q=85",
        cls: "md:col-span-8 aspect-[16/10]",
        cap: "Editorial",
    },
    {
        src: "https://static.prod-images.emergentagent.com/jobs/f06a9f9c-d82b-43ef-be36-a164b4102429/images/c85528aed0ed1ecd8e474f7d2c577626a733b433833ad493a9650699bf0326e8.png",
        cls: "md:col-span-12 aspect-[21/9]",
        cap: "Zamek Moszna",
    },
];

export default function Gallery() {
    return (
        <section
            id="galeria"
            data-testid="gallery-section"
            className="section-pad relative bg-ink"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                        <div>
                            <span className="overline text-[14px] md:text-[17px]">Akt VI — Galeria</span>
                            <h2 className="mt-6 font-serif italic text-5xl md:text-6xl lg:text-7xl text-ivory">
                                Kadry
                                <br />
                                <span className="text-champagne not-italic">
                                    przed dniem
                                </span>
                            </h2>
                        </div>
                        <p className="text-ivory/55 text-sm md:text-base max-w-sm">
                            Sesja narzeczeńska — fragmenty czasu, które
                                pozwoliliśmy sobie zatrzymać. Pełna galeria
                                ślubna pojawi się tutaj po 19 lipca.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
                    {images.map((img, i) => (
                        <Reveal
                            key={i}
                            delay={i}
                            className={`relative overflow-hidden group ${img.cls}`}
                        >
                            <img
                                src={img.src}
                                alt={img.cap}
                                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                                <span className="overline text-ivory">
                                    {img.cap}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
