'use client'

import { useFormState, useFormStatus } from 'react-dom';
import { generateAiResponses, type ResponseGeneratorState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
      <Wand2 className="mr-2 h-4 w-4" />
      {pending ? 'Generating...' : 'Generate Responses'}
    </Button>
  );
}

export function ResponseGeneratorForm() {
  const initialState: ResponseGeneratorState = { suggestions: [], error: undefined, inquiry: '' };
  const [state, formAction] = useFormState(generateAiResponses, initialState);
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: "Response copied to clipboard.",
      });
    });
  };

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-4">
        <div>
          <Textarea
            name="inquiry"
            placeholder="Paste the client's inquiry here..."
            rows={6}
            className="text-base"
            defaultValue={state.inquiry}
          />
          {state.error && <p className="text-sm font-medium text-destructive mt-2">{state.error}</p>}
        </div>
        <SubmitButton />
      </form>

      {state.suggestions && state.suggestions.length > 0 && (
        <div className="space-y-6">
            <h2 className="text-2xl font-headline font-semibold">Suggested Responses</h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {state.suggestions.map((suggestion, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium font-headline">Option {index + 1}</CardTitle>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy(suggestion)}>
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy</span>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{suggestion}</p>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
      )}
      
      {state.error && !state.suggestions && (
         <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {state.error}
            </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
