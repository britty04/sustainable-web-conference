import { Button } from "@/components/ui/button";
import { Globe2, Leaf, Cpu, Network } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Globe2 className="w-32 h-32 animate-spin-slow text-primary" />
          </div>
          <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-10">
            <Leaf className="w-24 h-24 animate-float text-secondary" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 opacity-10">
            <Cpu className="w-20 h-20 animate-pulse text-accent" />
          </div>
          <div className="absolute top-1/3 right-1/4 opacity-10">
            <Network className="w-28 h-28 animate-bounce-slow text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in backdrop-blur-sm p-8 rounded-2xl glass-morphism">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            International Conference on{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Sustainable Digital Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light text-muted-foreground">ICSDT 2025</p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">August 6, 2025 • Nilai, Malaysia</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="transform hover:scale-105 transition-all duration-300 text-primary-foreground"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground hover:text-accent-foreground transform hover:scale-105 transition-all duration-300"
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
                className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};