import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | CodeYash Developers",
  description: "Get in touch for project inquiries, collaborations, or any questions.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ContactForm />
    </div>
  );
}
