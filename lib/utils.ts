import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatInterviewType(type: string): string {
  switch (type) {
    case "behavioral":
      return "Behavioral Interview";
    case "technical":
      return "Technical Interview";
    case "case":
      return "Case Study Interview";
    case "motivation":
      return "Motivation Interview";
    default:
      return "Interview";
  }
}

export function getInterviewDescription(type: string): string {
  switch (type) {
    case "behavioral":
      return "Practice answering questions about your past experiences and how you handled different situations.";
    case "technical":
      return "Demonstrate your technical knowledge and problem-solving abilities.";
    case "case":
      return "Analyze a business scenario and provide your approach to solving the problem.";
    case "motivation":
      return "Explain your motivation for applying and your career aspirations.";
    default:
      return "Practice your interview skills with our AI assistant.";
  }
}
