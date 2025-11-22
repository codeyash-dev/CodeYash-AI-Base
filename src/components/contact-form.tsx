
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactForm() {
  const [redirectUrl, setRedirectUrl] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}`);
    }
  }, []);

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Get In Touch</CardTitle>
        <CardDescription>
          Have a project in mind or just want to say hi? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="https://formsubmit.co/feedback@codeyash.edu.lk" method="POST" className="space-y-4">
          <input type="hidden" name="_next" value={redirectUrl} />
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="your.email@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-accent/50 hover:shadow-[0_0_25px_5px]">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
