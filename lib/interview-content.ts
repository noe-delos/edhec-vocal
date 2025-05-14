// lib/interview-content.ts

// Corporate Interview Content (from Investment Banking document)
export const corporateInterviewContent = {
  persona: `
You are an experienced investment banking interviewer from a top global bank. Your role is to conduct a realistic interview to help the candidate prepare for investment banking interviews.

Follow these guidelines:
1. Start by introducing yourself and the purpose of the interview
2. Begin with a "walk me through your resume" question
3. Ask a mix of fit/qualitative and technical questions
4. Move from basic to more advanced questions
5. Be conversational but professional
6. Ask follow-up questions when appropriate
7. Provide constructive feedback at the end

Your interview should cover the following types of questions:
- Background and personal questions
- "Why banking?" questions
- Commitment questions
- Technical questions about accounting, valuation, DCF, and financial models
- Brain teaser questions

Keep responses concise and focused. Ask one question at a time and wait for the candidate's answer before proceeding.
  `,

  questions: [
    // Fit/Qualitative Questions
    "Walk me through your resume.",
    "Why do you want to work in investment banking?",
    "What makes you interested in our firm specifically?",
    "How would your previous experience prepare you for investment banking?",
    "Can you tell me about a time when you showed leadership?",
    "What are your biggest strengths and weaknesses?",
    "If I gave you an offer right now, would you accept it?",

    // Technical Questions - Accounting
    "Walk me through the three financial statements and how they're connected.",
    "If I purchase a piece of equipment for $100, how does that affect the three financial statements?",
    "What's the difference between EBITDA and net income?",

    // Technical Questions - Valuation
    "What are the main valuation methodologies?",
    "What is WACC and how do you calculate it?",
    "How would you value a company with negative earnings?",

    // Technical Questions - DCF
    "Walk me through a DCF.",
    "What discount rate would you use in a DCF?",
    "How do you calculate terminal value?",

    // Technical Questions - Models
    "What happens to EPS in a merger when the acquirer has a higher P/E ratio than the target?",
    "What are the key drivers of returns in an LBO model?",
    "What's more important in an LBO: revenue growth or margin expansion?",

    // Brain Teasers
    "How many tennis balls can fit in a Boeing 747?",
    "If I roll two dice, what's the probability of getting a sum greater than 7?",
    "How would you value a laundromat?",
  ],
};

// Market Interview Content (from S&T document)
export const marketInterviewContent = {
  persona: `
You are an experienced interviewer for a Sales & Trading position at a major investment bank. Your role is to help the candidate prepare for Sales & Trading interviews by conducting a realistic interview session.

Follow these guidelines:
1. Begin by introducing yourself and explaining the focus of the interview
2. Start with behavioral questions to establish rapport
3. Move to market-based questions to test their knowledge
4. Ask investment-focused questions to assess their analytical skills
5. Include some technical questions about trading concepts
6. Be direct but not intimidating
7. Provide brief feedback at the end

Your interview should cover the 5 components of an S&T interview:
- Behavioral questions (40-60%)
- Market-based questions (20-30%)
- Investment questions (10-20%)
- Technical questions (0-10%)
- Brainteasers (0-5%)

Keep your questions concise and focused. Listen carefully to the candidate's responses and ask follow-up questions when appropriate.
  `,

  questions: [
    // Behavioral Questions
    "Walk me through your resume.",
    "Why sales & trading instead of investment banking?",
    "Do you prefer sales or trading? Why?",
    "What makes a good trader?",
    "Rate yourself on a scale of 1 to 10 on the type of risk taker you are.",
    "Tell me about a time you've displayed integrity.",

    // Market-Based Questions
    "Where is the S&P 500 right now? Where do you see it in a year?",
    "What is the current 10-year Treasury rate?",
    "What's happening with oil prices and why?",
    "How would you explain what's currently happening in the economy?",
    "What is the Bank of Canada rate right now? What about the Federal Reserve?",

    // Investment Questions
    "If you had $10 million, how would you invest it?",
    "What sectors are you bullish on right now?",
    "Pitch me a stock you're long on.",
    "What's your view on gold as an investment?",

    // Technical Questions
    "What's the major difference between a mortgage-backed security and a traditional bond?",
    "Explain the Black-Scholes model.",
    "What is the relationship between interest rates and exchange rates?",
    "How would you hedge a binary option?",

    // Brainteasers
    "I flip a coin until I get two consecutive heads. What's the expected number of flips?",
    "If I roll two dice, what's the probability I roll at least one six?",
  ],
};

// Helper function to get interview content based on type
export function getInterviewContent(type: string) {
  switch (type) {
    case "corporate":
      return corporateInterviewContent;
    case "market":
      return marketInterviewContent;
    default:
      return corporateInterviewContent; // Default to corporate
  }
}
