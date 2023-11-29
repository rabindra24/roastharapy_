import Accordian from "@/components/section/Accordian";
import Comapanies from "@/components/section/Comapanies";
import Commitments from "@/components/section/Commitments";
import Contact from "@/components/section/Contact";
import Cta from "@/components/section/Cta";
import Cta2 from "@/components/section/Cta2";
import Footer from "@/components/section/Footer";
import Landing from "@/components/section/Landing";
import Navbar from "@/components/section/Navbar";
import Strategy from "@/components/section/Strategy";
import Team from "@/components/section/Team";
import Testomonials from "@/components/section/Testomonials";
import Works from "@/components/section/Works";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Comapanies />
      <Commitments />
      <Strategy />
      <Works />
      <Cta />
      <Team />
      <Testomonials />
      <Cta2 />
      <Contact />
      <Accordian />

      <Footer />
    </main>
  );
}
