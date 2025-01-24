import { Card, CardContent } from "@/components/ui/card";
import { HandshakeIcon, Building2 } from "lucide-react";

export const Collaboration = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Collaboration Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Sri Ramakrishna College of Arts & Science</h3>
              <p className="text-gray-600">Coimbatore, India</p>
              {/* Add logo image here */}
              <div className="w-48 h-48 mx-auto mt-4 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Logo Placeholder</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">INTI UNIVERSITY</h3>
              <p className="text-gray-600">Nilai, Malaysia</p>
              {/* Add logo image here */}
              <div className="w-48 h-48 mx-auto mt-4 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Logo Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <HandshakeIcon className="w-16 h-16 mx-auto text-accent animate-bounce-slow" />
          <p className="mt-4 text-lg text-gray-700">
            Working together to advance sustainable digital transformation through research and innovation
          </p>
        </div>
      </div>
    </section>
  );
};