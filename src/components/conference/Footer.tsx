import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ICSDT 2025</h3>
            <p className="text-sm opacity-80">
              International Conference on Sustainable Digital Transformation
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Venue</h3>
            <p className="text-sm opacity-80">
              INTI UNIVERSITY<br />
              Nilai, Malaysia
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm opacity-80">
              Email: mariaprisiclla@srcas.ac.in<br />
              Phone: [Conference Contact Number]
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Organized By</h3>
            <p className="text-sm opacity-80">
              Sri Ramakrishna College of Arts & Science<br />
              In association with<br />
              INTI UNIVERSITY Malaysia
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">
            © 2025 ICSDT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};