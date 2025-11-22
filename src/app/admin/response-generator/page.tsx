import { ResponseGeneratorForm } from "@/components/response-generator-form";

export const metadata = {
  title: "AI Response Generator | Yashedu Connect",
  description: "Use AI to generate professional responses to client inquiries instantly.",
};

export default function ResponseGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">AI Response Generator</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Save time and maintain a professional tone. Paste a client's inquiry below to get AI-powered response suggestions.
        </p>
      </div>
      <ResponseGeneratorForm />
    </div>
  );
}
