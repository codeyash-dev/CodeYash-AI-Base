import Image from "next/image";
import { portfolioProjects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Portfolio | CodeYash Developers",
  description: "Browse a collection of past projects and case studies.",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Project Portfolio</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A selection of projects that showcase our skills and dedication.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project) => {
          const image = PlaceHolderImages.find((img) => img.id === project.imageId);
          return (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {image && (
                 <div className="overflow-hidden aspect-video bg-muted relative">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      data-ai-hint={image.imageHint}
                    />
                 </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}