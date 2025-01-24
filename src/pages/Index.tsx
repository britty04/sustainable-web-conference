import { Hero } from "@/components/conference/Hero";
import { About } from "@/components/conference/About";
import { Speakers } from "@/components/conference/Speakers";
import { Schedule } from "@/components/conference/Schedule";
import { Footer } from "@/components/conference/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Index;