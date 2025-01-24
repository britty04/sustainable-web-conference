import { Hero } from "@/components/conference/Hero";
import { About } from "@/components/conference/About";
import { Speakers } from "@/components/conference/Speakers";
import { Schedule } from "@/components/conference/Schedule";
import { Footer } from "@/components/conference/Footer";
import { PaperSubmission } from "@/components/conference/PaperSubmission";
import { Objectives } from "@/components/conference/Objectives";
import { Navbar } from "@/components/conference/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <PaperSubmission />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Index;