import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services, portfolioProjects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        <div className="container mx-auto text-center px-4 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter mb-4 animate-fade-in-down">
            Empowering Your Digital Presence
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-down animation-delay-300">
            From custom web solutions to intelligent AI integrations, I bring your ideas to life. Let's build something amazing together.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-600 shadow-lg shadow-accent/20">
            <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">My Services</h2>
            <p className="text-lg text-muted-foreground mt-2">Crafting solutions for the modern web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="text-center hover:shadow-2xl hover:-translate-y-2 transition-transform-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Modern</h2>
            <p className="text-lg text-muted-foreground mt-2">A glimpse into my project portfolio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.slice(0, 2).map((project, index) => {
              const image = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <Card key={project.id} className="overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
                  {image && (
                    <div className="overflow-hidden aspect-video bg-muted relative">
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <Button asChild variant="outline">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}