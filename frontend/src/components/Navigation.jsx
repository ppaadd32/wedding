import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#historia", label: "Historia" },
    { href: "#detale", label: "Detale" },
    { href: "#plan", label: "Plan Dnia" },
    { href: "#galeria", label: "Galeria" },
    { href: "#nocleg", label: "Nocleg" },
    { href: "#rsvp", label: "RSVP" },
    { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="main-nav"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
                scrolled
                    ? "glass border-b border-white/5"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="container-luxe flex items-center justify-between h-20 md:h-24">
                <a
                    href="#top"
                    data-testid="nav-logo"
                    className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-ivory hover:text-champagne transition-colors"
                >
                    P <span className="text-champagne">&</span> A
                </a>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-[14px] uppercase tracking-[0.28em] text-ivory/70 hover:text-champagne transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#rsvp"
                    data-testid="nav-rsvp-cta"
                    className="hidden md:inline-flex items-center px-5 py-2.5 text-[14px] uppercase tracking-[0.3em] border border-champagne/60 text-champagne hover:bg-champagne hover:text-ink transition-all duration-500"
                >
                    RSVP
                </a>

                <button
                    aria-label="Menu"
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-ivory"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}                    
                </button>
            </div>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="md:hidden glass border-t border-white/5"
                >
                    <div className="container-luxe py-8 flex flex-col gap-6">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="text-sm uppercase tracking-[0.3em] text-ivory/80 hover:text-champagne"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#rsvp"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex items-center justify-center w-full py-3 text-xs uppercase tracking-[0.3em] border border-champagne/60 text-champagne"
                        >
                            RSVP
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
