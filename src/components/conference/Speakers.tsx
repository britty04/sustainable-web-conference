import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const speakers = [
  {
    name: "Dr. G. Maria Pricilla",
    role: "PC Chair",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Siti Sarah M",
    role: "PC Chair",
    affiliation: "INTI UNIVERSITY",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. M Hemalatha",
    role: "Organizing Committee",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. N. Mahendiren",
    role: "Organizing Committee",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/placeholder.svg",
  },
];

export const Speakers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Conference Chairs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback>{speaker.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-sm text-accent mb-1">{speaker.role}</p>
                  <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};