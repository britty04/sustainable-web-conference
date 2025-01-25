import { Button } from "@/components/ui/button";
import { Globe2, Leaf, Cpu, Network } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/90 overflow-hidden pt-16">
      {/* Moving Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Globe2 className="w-32 h-32 text-white/10 animate-spin-slow" />
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <Leaf className="w-24 h-24 text-white/10 animate-float" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
          <Cpu className="w-20 h-20 text-white/10 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Network className="w-28 h-28 text-white/10 animate-bounce-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            International Conference on{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Sustainable Digital Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light">ICSDT 2025</p>
          <p className="text-lg md:text-xl mb-8 text-blue-100">August 6, 2025 • Nilai, Malaysia</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-transform"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-white/90 hover:text-black"
            >
              Submit Paper
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { value: "100+", label: "Expected Participants" },
              { value: "6", label: "Countries" },
              { value: "400+", label: "Pages of Content" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
