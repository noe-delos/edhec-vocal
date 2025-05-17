/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

// components/interview-selection.tsx

import React from "react";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InterviewSelectionProps {
  onStart: (interviewType: string) => void;
}

export function InterviewSelection({ onStart }: InterviewSelectionProps) {
  const cardClasses =
    "relative w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden px-4 pt-4 pb-2";
  const badgeClasses =
    "bg-gray-100 text-gray-700 text-sm rounded-lg px-3 py-1 mr-2 mb-2";
  const buttonClasses =
    "py-5 px-6 rounded-lg flex items-center justify-between font-medium hover:cursor-pointer hover:opacity-80";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* En-tête EDHEC */}
      <header className="py-6 px-4 border-b bg-white">
        <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/5/53/Logo_EDHEC_Business_School.svg/2560px-Logo_EDHEC_Business_School.svg.png"
            alt="Logo EDHEC"
            width={180}
            height={60}
            className="mb-4 sm:mb-0"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Préparation aux Entretiens
          </h1>
        </div>
      </header>

      {/* Sélection d'entretien */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Finance d'Entreprise */}
          <Card className={cardClasses}>
            {/* Floating profile image */}
            <div className="absolute top-5 right-5 size-20 rounded-full overflow-hidden shadow-md">
              <img
                src="/lisa.png"
                alt="Lisa"
                className="object-cover w-full h-full"
              />
            </div>

            <CardHeader className="flex items-center pt-6 pb-2">
              <div className="p-3 rounded-full bg-red-100">
                <Icon
                  icon="material-symbols:money-bag-rounded"
                  width="32"
                  height="32"
                  className="text-red-900"
                />
              </div>
              <CardTitle className="ml-4 text-xl font-semibold">
                Finance d'Entreprise
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-4">
              <div className="flex flex-wrap">
                <span className={badgeClasses}>Valorisation & DCF</span>
                <span className={badgeClasses}>Fusions & LBO</span>
                <span className={badgeClasses}>Comptabilité & Finance</span>
              </div>
            </CardContent>
            <CardFooter className="pb-4 pt-2">
              <div className="flex justify-end w-full">
                <Button
                  className={buttonClasses}
                  style={{ backgroundColor: "#A02235", color: "#fff" }}
                  onClick={() => onStart("corporate")}
                >
                  <span>Démarrer</span>
                  <Icon icon="ic:round-chevron-right" width="20" height="20" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Sales & Trading */}
          <Card className={cardClasses}>
            {/* Floating profile image */}
            <div className="absolute top-5 right-5 size-20 rounded-full overflow-hidden shadow-md">
              <img
                src="/julien.png"
                alt="Julien"
                className="object-cover w-full h-full"
              />
            </div>

            <CardHeader className="flex items-center pt-6 pb-2">
              <div className="p-3 rounded-full bg-red-100">
                <Icon
                  icon="tabler:bolt-filled"
                  width="32"
                  height="32"
                  className="text-red-900"
                />
              </div>
              <CardTitle className="ml-4 text-xl font-semibold">
                Finance de marché
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-4">
              <div className="flex flex-wrap">
                <span className={badgeClasses}>Analyse de Marché</span>
                <span className={badgeClasses}>
                  Stratégies d'Investissement
                </span>
                <span className={badgeClasses}>Trading & Couverture</span>
              </div>
            </CardContent>
            <CardFooter className="pb-4 pt-2">
              <div className="flex justify-end w-full">
                <Button
                  className={buttonClasses}
                  style={{ backgroundColor: "#A02235", color: "#fff" }}
                  onClick={() => onStart("market")}
                >
                  <span>Démarrer</span>
                  <Icon icon="ic:round-chevron-right" width="20" height="20" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>EDHEC Préparation aux Entretiens</p>
      </footer>
    </div>
  );
}
