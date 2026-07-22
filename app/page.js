import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import TrustedCompanies from "@/components/TrustedCompanies";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
     <Navbar />
      <Hero />
      <TrustedCompanies />
      <Stats />
      <Features />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
