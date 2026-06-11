import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { Locations } from "@/components/Locations";
import { Menu } from "@/components/Menu";
import { Navigation } from "@/components/Navigation";
import { Reservation } from "@/components/Reservation";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Historia />
        <Menu />
        <Gallery />
        <Locations />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}