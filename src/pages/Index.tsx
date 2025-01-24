import { Hero } from "@/components/conference/Hero";
import { About } from "@/components/conference/About";
import { Speakers } from "@/components/conference/Speakers";
import { Schedule } from "@/components/conference/Schedule";
import { Footer } from "@/components/conference/Footer";
import { PaperSubmission } from "@/components/conference/PaperSubmission";
import { Objectives } from "@/components/conference/Objectives";
import { Navbar } from "@/components/conference/Navbar";
import { Collaboration } from "@/components/conference/Collaboration";
import { FAQ } from "@/components/conference/FAQ";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const hasShownToast = sessionStorage.getItem("registrationToast");
    if (!hasShownToast) {
      setTimeout(() => {
        toast({
          title: "Welcome to ICSDT 2025!",
          description: "Registration is now open. Early bird discounts available!",
          duration: 5000,
        });
        sessionStorage.setItem("registrationToast", "true");
      }, 2000);
    }
  }, [toast]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Collaboration />
      <Objectives />
      <PaperSubmission />
      <Speakers />
      <Schedule />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;