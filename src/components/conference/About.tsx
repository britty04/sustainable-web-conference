import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const topics = [
    "Computing",
    "Education",
    "Engineering",
    "Innovation",
    "Technology",
    "Interdisciplinary",
    "Sustainability",
    "Business",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">About the Conference</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Join us for the 3rd International Conference on Sustainable Digital Transformation,
            where experts from around the world gather to share insights and foster cross-border
            partnerships for sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-white rounded-full text-sm text-primary border border-primary/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};