import { Button } from "@/components/ui/button";
import { Globe2, Leaf, Cpu, Network } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/95 via-secondary/95 to-accent/95 overflow-hidden pt-16">
      {/* Animated Background Elements */}
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

      {/* Main Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            International Conference on{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
              Sustainable Digital Transformation
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-blue-100">ICSDT 2025</p>
          <p className="text-xl md:text-2xl text-blue-100/90">August 6, 2025 • Nilai, Malaysia</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              Submit Paper
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { value: "100+", label: "Expected Participants" },
              { value: "6", label: "Countries" },
              { value: "400+", label: "Pages of Content" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20"
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