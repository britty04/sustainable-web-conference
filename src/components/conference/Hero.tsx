import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          International Conference on Sustainable Digital Transformation
        </h1>
        <p className="text-xl md:text-2xl mb-6">ICSDT 2025</p>
        <p className="text-lg md:text-xl mb-8">June 8, 2025 • Nilai, Malaysia</p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Register Now
        </Button>
      </div>
    </div>
  );
};