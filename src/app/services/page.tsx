import { services } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Services | Yashedu Connect",
  description: "Explore the range of professional services offered, from web development to AI integration.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          We provide a wide array of digital services to bring your vision to reality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="bg-primary text-primary-foreground rounded-lg h-16 w-16 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <service.icon className="h-8 w-8" />
              </div>
            </div>
            <div className="p-6 pt-0 sm:pt-6">
              <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
