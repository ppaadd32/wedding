import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import Navigation from "@/components/Navigation";
import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/sections/Hero";
import Countdown from "@/sections/Countdown";
import Story from "@/sections/Story";
import Details from "@/sections/Details";
import Schedule from "@/sections/Schedule";
import Gallery from "@/sections/Gallery";
import Accommodation from "@/sections/Accommodation";
import RSVP from "@/sections/RSVP";
import FAQ from "@/sections/FAQ";
import Kahoot from "@/sections/Kahoot";
import Footer from "@/sections/Footer";
import { Toaster } from "sonner";

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        const id = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App relative">
            <GrainOverlay />
            <Navigation />
            <main>
                <Hero />
                <Countdown />
                <Story />
                <Details />
                <Schedule />
                <Gallery />
                <Accommodation />
                <RSVP />
                <FAQ />
                <Kahoot />
            </main>
            <Footer />
            <Toaster
                theme="dark"
                position="bottom-center"
                toastOptions={{
                    style: {
                        background: "#141414",
                        border: "1px solid rgba(229,211,179,0.25)",
                        color: "#F9F8F6",
                        fontFamily: "Manrope, sans-serif",
                    },
                }}
            />
        </div>
    );
}

export default App;
