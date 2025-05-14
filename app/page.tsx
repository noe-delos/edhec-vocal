"use client";

// app/page.tsx

import { useState } from "react";
import { InterviewSelection } from "@/components/interview-selection";
import { Conversation } from "@/components/conversation";

export default function Home() {
  const [interviewType, setInterviewType] = useState<string | null>(null);

  const handleStartInterview = (type: string) => {
    setInterviewType(type);
  };

  const handleBackToSelection = () => {
    setInterviewType(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {!interviewType ? (
        <InterviewSelection onStart={handleStartInterview} />
      ) : (
        <Conversation
          interviewType={interviewType}
          onBack={handleBackToSelection}
        />
      )}
    </main>
  );
}
