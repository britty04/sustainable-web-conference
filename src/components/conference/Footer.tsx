import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">ICSDT 2025</h3>
            <p className="text-sm opacity-80">
              International Conference on<br />
              Sustainable Digital Transformation
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Venue</h3>
            <div className="flex items-start space-x-2 text-sm opacity-80">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <p>
                INTI UNIVERSITY<br />
                Nilai, Malaysia
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:mariaprisiclla@srcas.ac.in" className="hover:underline">
                  mariaprisiclla@srcas.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>[Conference Contact Number]</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Organized By</h3>
            <p className="text-sm opacity-80">
              Sri Ramakrishna College of Arts & Science<br />
              In association with<br />
              INTI UNIVERSITY Malaysia
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">
            © 2025 ICSDT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};