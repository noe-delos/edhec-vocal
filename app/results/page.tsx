/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

// app/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

// Score circle component
const ScoreCircle = ({ score }: { score: number }) => {
  const normalizedScore = Math.min(Math.max(score, 0), 10);
  const percentage = (normalizedScore / 10) * 100;

  // Determine color based on score
  const getColor = (score: number) => {
    if (score < 4) return "#ef4444"; // Red
    if (score < 7) return "#f97316"; // Orange
    return "#22c55e"; // Green
  };

  const color = getColor(normalizedScore);

  return (
    <motion.div
      className="relative w-24 h-24"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />

        {/* Progress circle with animation */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: `${2 * Math.PI * 45}` }}
          animate={{
            strokeDashoffset: `${2 * Math.PI * 45 * (1 - percentage / 100)}`,
          }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Text in the middle */}
        <text
          x="50"
          y="50"
          dy=".3em"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#111827"
        >
          {normalizedScore}/10
        </text>
      </svg>
    </motion.div>
  );
};

// Message bubble component
const MessageBubble = ({
  message,
  role,
  index,
}: {
  message: string;
  role: "agent" | "user";
  index: number;
}) => {
  const isAgent = role === "agent";

  return (
    <motion.div
      className={`flex mb-4 ${isAgent ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-lg ${
          isAgent ? "bg-gray-100 text-gray-800" : "bg-red-700 text-white"
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
};

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [interviewType, setInterviewType] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<any>(null);
  const [review, setReview] = useState<any>(null);

  // Get interview type label
  const getInterviewTypeLabel = () => {
    switch (interviewType) {
      case "corporate":
        return "Finance d'Entreprise";
      case "market":
        return "Sales & Trading";
      default:
        return "Entretien";
    }
  };

  // Function to fetch transcript and review
  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Get query parameters
      const conversationId = searchParams.get("conversationId");
      const interviewType = searchParams.get("interviewType");

      if (!conversationId || !interviewType) {
        throw new Error("Missing required parameters");
      }

      setConversationId(conversationId);
      setInterviewType(interviewType);

      // Fetch transcript
      const transcriptResponse = await fetch(`/api/get-transcript`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId,
          interviewType,
        }),
      });

      if (!transcriptResponse.ok) {
        throw new Error("Failed to fetch transcript");
      }

      const transcriptData = await transcriptResponse.json();
      setTranscript(transcriptData);

      // Fetch or generate review
      const reviewResponse = await fetch("/api/generate-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript: transcriptData.conversationData.transcript,
          interviewType,
        }),
      });

      if (!reviewResponse.ok) {
        throw new Error("Failed to generate review");
      }

      const reviewData = await reviewResponse.json();
      setReview(reviewData.review);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Une erreur est survenue lors du chargement des données");
    } finally {
      setIsLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle back button click
  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 border-b bg-white">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleBack}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">
              Analyse de votre entretien
            </h1>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/5/53/Logo_EDHEC_Business_School.svg/2560px-Logo_EDHEC_Business_School.svg.png"
            alt="Logo EDHEC"
            width={120}
            height={40}
          />
        </div>
      </header>

      {/* Main content */}
      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Chargement de l'analyse...</p>
          </div>
        </div>
      ) : (
        <main className="flex-grow p-6">
          <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="flex flex-col">
              {/* Interview type and score */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-4 flex items-center">
                  <div className="size-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={
                        interviewType === "corporate"
                          ? "/lisa.png"
                          : "/julien.png"
                      }
                      alt={interviewType === "corporate" ? "Lisa" : "Julien"}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Entretien</p>
                    <h3 className="font-semibold text-lg">
                      {getInterviewTypeLabel()}
                    </h3>
                  </div>
                </Card>

                <Card className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Note globale</p>
                    <h3 className="font-semibold text-lg">Performance</h3>
                  </div>
                  {review && <ScoreCircle score={review.score} />}
                </Card>
              </motion.div>

              {/* Transcript */}
              <motion.div
                className="flex-grow bg-white rounded-xl shadow-sm p-6 overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 300px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-6">
                  Transcription de l'entretien
                </h2>

                <div className="space-y-1">
                  {transcript &&
                    transcript.conversationData.transcript.map(
                      (entry: any, index: number) => (
                        <MessageBubble
                          key={index}
                          message={entry.message}
                          role={entry.role}
                          index={index}
                        />
                      )
                    )}
                </div>
              </motion.div>
            </div>

            {/* Right column - Analysis */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 160px)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {review ? (
                <div className="prose prose-red max-w-none">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#A02235" }}
                  >
                    Synthèse de votre entretien
                  </h2>

                  {/* Summary */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Résumé</h3>
                    <p>{review.summary}</p>
                  </div>

                  {/* Strengths */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Icon
                        icon="mdi:check-circle"
                        className="size-12 mr-2 text-green-500"
                      />
                      Points forts
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {review.strengths.map(
                        (strength: string, index: number) => (
                          <li key={index}>{strength}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Icon
                        icon="mdi:alert-circle"
                        className="mr-2 size-12 text-amber-500"
                      />
                      Points à améliorer
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {review.weaknesses.map(
                        (weakness: string, index: number) => (
                          <li key={index}>{weakness}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Advice */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Icon
                        icon="mdi:lightbulb"
                        className="mr-2 size-12 text-blue-500"
                      />
                      Conseils personnalisés
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {review.advice.map((advice: string, index: number) => (
                        <li key={index}>{advice}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Analysis */}
                  {review.detailedAnalysis && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Analyse détaillée
                      </h3>
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {review.detailedAnalysis}
                        </ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon
                    icon="mdi:file-document-outline"
                    className="mx-auto mb-4 text-gray-400 size-12"
                  />
                  <p className="text-gray-500">Aucune analyse disponible</p>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="py-4 text-center text-gray-500 text-sm border-t">
        <p>EDHEC Préparation aux Entretiens</p>
      </footer>
    </div>
  );
}
