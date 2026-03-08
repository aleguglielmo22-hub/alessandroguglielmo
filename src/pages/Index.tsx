import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChiSonoSection from "@/components/ChiSonoSection";
import FormazioneSection from "@/components/FormazioneSection";
import EsperienzeSection from "@/components/EsperienzeSection";
import LavoriSection from "@/components/LavoriSection";
import ServiziSection from "@/components/ServiziSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChiSonoSection />
      <FormazioneSection />
      <EsperienzeSection />
      <LavoriSection />
      <ServiziSection />
      <ContattiSection />
      <Footer />
    </>
  );
};

export default Index;
