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
        {portfolioProjects.map((project, index) => {
          const image = PlaceHolderImages.find((img) => img.id === project.imageId);
          return (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-primary/50" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              {image && (
                 <div className="overflow-hidden aspect-[16/9] bg-muted relative">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out group-hover:shadow-[0_0_25px_5px] group-hover:shadow-accent/50"
                      data-ai-hint={image.imageHint}
                      sizes="100vw"
                    />
                 </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                <CardDescription className="text-xs">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
