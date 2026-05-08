import { Reveal } from "@/components/Reveal";

export default function Footer() {
    return (
        <footer
            data-testid="footer"
            className="relative bg-ink border-t border-white/5 pt-24 pb-12"
        >
            <div className="container-luxe">
                <Reveal>
                    <div className="text-center">
                        <div className="overline text-ivory/40 mb-8">
                            Finał
                        </div>
                        <h2 className="font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-shimmer leading-[0.9] tracking-tightest">
                            Do zobaczenia
                        </h2>
                        <div className="mt-8 font-serif text-2xl md:text-3xl text-champagne">
                            19 · VII · MMXXVI
                        </div>
                    </div>
                </Reveal>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="font-serif text-lg tracking-[0.3em] text-ivory/70">
                        P <span className="text-champagne">&</span> A
                    </div>
                    <p className="text-ivory/35 text-xs uppercase tracking-[0.3em] text-center">
                        Z miłością · Agnieszka & Paweł · Moszna 2026
                    </p>
                    <a
                        href="#top"
                        data-testid="footer-back-to-top"
                        className="text-[11px] uppercase tracking-[0.3em] text-ivory/50 hover:text-champagne transition-colors"
                    >
                        ↑ Na górę
                    </a>
                </div>
            </div>
        </footer>
    );
}
