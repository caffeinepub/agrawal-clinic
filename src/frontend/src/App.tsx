import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HealthTips from "./components/HealthTips";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HealthTips />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
