'use server';
/**
 * @fileOverview A Genkit flow for an AI assistant that answers questions about a portfolio owner's skills, experience, and projects.
 *
 * - aiPoweredPortfolioAssistantQuery - A function that handles queries to the AI portfolio assistant.
 * - AiPoweredPortfolioAssistantQueryInput - The input type for the aiPoweredPortfolioAssistantQuery function.
 * - AiPoweredPortfolioAssistantQueryOutput - The return type for the aiPoweredPortfolioAssistantQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredPortfolioAssistantQueryInputSchema = z.object({
  question: z.string().describe("The natural language question from a potential employer."),
  aboutMeContent: z.string().describe("The content of the 'About Me' section of the portfolio."),
  educationContent: z.string().describe("The content of the 'Education' section of the portfolio."),
  certificationsContent: z.string().describe("The content of the 'Certifications' section of the portfolio."),
  workHistoryContent: z.string().describe("The content of the 'Work History / Experience' section of the portfolio."),
  skillsContent: z.string().describe("The content of the 'Skills' section of the portfolio."),
  projectsContent: z.string().describe("The content of the 'Projects Portfolio' section of the portfolio."),
});
export type AiPoweredPortfolioAssistantQueryInput = z.infer<typeof AiPoweredPortfolioAssistantQueryInputSchema>;

const AiPoweredPortfolioAssistantQueryOutputSchema = z.object({
  answer: z.string().describe("The AI assistant's answer to the employer's question, based on the provided portfolio content."),
});
export type AiPoweredPortfolioAssistantQueryOutput = z.infer<typeof AiPoweredPortfolioAssistantQueryOutputSchema>;

const aiPoweredPortfolioAssistantQueryPrompt = ai.definePrompt({
  name: 'aiPoweredPortfolioAssistantQueryPrompt',
  input: { schema: AiPoweredPortfolioAssistantQueryInputSchema },
  output: { schema: AiPoweredPortfolioAssistantQueryOutputSchema },
  prompt: `You are a professional career branding expert, web content writer, and UX designer. Your task is to act as an AI assistant for a professional online web portfolio. You will answer questions about the portfolio owner's skills, experience, and projects based *only* on the provided portfolio content. Do not make up information that is not explicitly present in the provided sections. If you cannot find the answer in the provided content, state that you do not have that specific information. The tone should be professional, confident, and clear. Use concise paragraphs and bullet points where appropriate.

Here is the portfolio content:

## About Me
{{{aboutMeContent}}}

## Education
{{{educationContent}}}

## Certifications
{{{certificationsContent}}}

## Work History / Experience
{{{workHistoryContent}}}

## Skills
{{{skillsContent}}}

## Projects Portfolio
{{{projectsContent}}}

Employer's Question: {{{question}}}`,
});

const aiPoweredPortfolioAssistantQueryFlow = ai.defineFlow(
  {
    name: 'aiPoweredPortfolioAssistantQueryFlow',
    inputSchema: AiPoweredPortfolioAssistantQueryInputSchema,
    outputSchema: AiPoweredPortfolioAssistantQueryOutputSchema,
  },
  async (input) => {
    const {output} = await aiPoweredPortfolioAssistantQueryPrompt(input);
    return output!;
  }
);

export async function aiPoweredPortfolioAssistantQuery(
  input: AiPoweredPortfolioAssistantQueryInput
): Promise<AiPoweredPortfolioAssistantQueryOutput> {
  return aiPoweredPortfolioAssistantQueryFlow(input);
}
