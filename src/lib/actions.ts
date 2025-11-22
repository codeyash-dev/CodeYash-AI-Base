"use server";

import { z } from "zod";
import { suggestResponse } from '@/ai/flows/ai-suggested-responses';
import type { SuggestResponseOutput } from '@/ai/flows/ai-suggested-responses';

// Contact form action - This is no longer used by the contact form component,
// but is kept here in case it's needed for other purposes.
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate success.
  console.log('New contact form submission:', validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.', success: true };
}


// AI response generator action
const responseGeneratorSchema = z.object({
  inquiry: z.string().min(10, 'Inquiry must be at least 10 characters long.'),
});

export type ResponseGeneratorState = {
  suggestions?: string[];
  error?: string;
  inquiry?: string;
};

export async function generateAiResponses(prevState: ResponseGeneratorState, formData: FormData): Promise<ResponseGeneratorState> {
  const inquiry = formData.get('inquiry');

  const validatedFields = responseGeneratorSchema.safeParse({
    inquiry,
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors.inquiry?.join(', '), inquiry: typeof inquiry === 'string' ? inquiry : '' };
  }
  
  try {
    const result: SuggestResponseOutput = await suggestResponse({ inquiry: validatedFields.data.inquiry });
    return { suggestions: result.suggestedResponses, inquiry: validatedFields.data.inquiry };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate AI suggestions. Please try again.', inquiry: validatedFields.data.inquiry };
  }
}
