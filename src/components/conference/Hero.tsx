import { Button } from "@/components/ui/button";
import { Globe2, Leaf, Cpu, Network } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
          alt="Conference Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <Globe2 className="w-32 h-32 animate-spin-slow text-primary/20" />
          </div>
          <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <Leaf className="w-24 h-24 animate-float text-secondary/20" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
            <Cpu className="w-20 h-20 animate-pulse text-accent/20" />
          </div>
          <div className="absolute top-1/3 right-1/4">
            <Network className="w-28 h-28 animate-bounce-slow text-primary/20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in glass-card p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            International Conference on{" "}
            <span className="text-gradient">
              Sustainable Digital Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light text-muted-foreground">
            ICSDT 2025
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            August 6, 2025 • Nilai, Malaysia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white dark:bg-primary-dark dark:hover:bg-primary-dark/90 transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary dark:text-white border-primary dark:border-white hover:bg-primary/10 dark:hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
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
                className="glass-card p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold mb-2 text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};