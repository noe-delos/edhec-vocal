/* eslint-disable @typescript-eslint/no-unused-vars */

// lib/interview-questions.ts

// Questions d'entretien Corporate (Finance d'entreprise)
const corporateQuestions = {
  behavioral: [
    "Présentez-moi votre parcours.",
    "Pourquoi souhaitez-vous travailler dans la banque d'investissement ?",
    "Qu'est-ce qui vous intéresse dans notre entreprise spécifiquement ?",
    "Comment votre expérience précédente vous prépare-t-elle à la banque d'investissement ?",
    "Pouvez-vous me parler d'une situation où vous avez fait preuve de leadership ?",
    "Quelles sont vos plus grandes forces et faiblesses ?",
    "Si je vous faisais une offre maintenant, l'accepteriez-vous ?",
    "Parlez-moi d'un moment où vous avez échoué. Qu'avez-vous appris ?",
    "Comment travaillez-vous en équipe ?",
    "Décrivez une situation où vous avez résolu un problème complexe.",
  ],
  technical: [
    "Expliquez-moi les trois états financiers et comment ils sont liés.",
    "Si j'achète un équipement pour 100€, comment cela affecte-t-il les trois états financiers ?",
    "Quelle est la différence entre l'EBITDA et le résultat net ?",
    "Comment calculez-vous le fonds de roulement ?",
    "Expliquez-moi ce qu'est le levier financier et son impact sur le ROE.",
    "Si les amortissements augmentent de 10€, comment cela affecte-t-il les états financiers ?",
    "Quelle est la différence entre la valeur d'entreprise et la capitalisation boursière ?",
    "Comment traitez-vous les intérêts minoritaires dans une valorisation ?",
    "Expliquez la différence entre fusion et acquisition.",
  ],
  valuation: [
    "Quelles sont les principales méthodologies de valorisation ?",
    "Qu'est-ce que le WACC et comment le calculez-vous ?",
    "Comment valoriseriez-vous une entreprise à résultats négatifs ?",
    "Expliquez-moi le modèle DCF.",
    "Comment calculez-vous la valeur terminale dans un DCF ?",
    "Quels multiples utiliseriez-vous pour valoriser une entreprise technologique ?",
    "Quand utiliseriez-vous la méthode des comparables plutôt qu'un DCF ?",
    "Quel est l'impact d'une diminution du taux d'imposition sur la valorisation d'une entreprise ?",
    "Comment prenez-vous en compte le risque pays dans une valorisation ?",
  ],
  models: [
    "Que se passe-t-il pour le BPA dans une fusion quand l'acquéreur a un ratio P/E plus élevé que la cible ?",
    "Quels sont les principaux facteurs de rendement dans un modèle LBO ?",
    "Qu'est-ce qui est plus important dans un LBO : la croissance du chiffre d'affaires ou l'expansion des marges ?",
    "Comment modéliseriez-vous une provision pour créances douteuses ?",
    "Quels sont les principaux éléments à considérer dans un modèle de fusion-acquisition ?",
    "Comment calculez-vous les synergies dans un modèle de fusion ?",
    "Expliquez les différentes structures de financement dans un LBO.",
  ],
  brainteaser: [
    "Combien de balles de tennis peuvent tenir dans un Boeing 747 ?",
    "Si je lance deux dés, quelle est la probabilité d'obtenir une somme supérieure à 7 ?",
    "Comment évalueriez-vous une laverie automatique ?",
    "Combien y a-t-il de stations-service à Paris ?",
    "À quelle vitesse les cheveux poussent-ils en euros ?",
    "Combien pèse un avion vide ?",
  ],
};

// Questions d'entretien Market (Sales & Trading)
const marketQuestions = {
  behavioral: [
    "Présentez-moi votre parcours.",
    "Pourquoi le Sales & Trading plutôt que la banque d'investissement ?",
    "Préférez-vous le sales ou le trading ? Pourquoi ?",
    "Qu'est-ce qui fait un bon trader ?",
    "Sur une échelle de 1 à 10, quel type de preneur de risque êtes-vous ?",
    "Parlez-moi d'une situation où vous avez fait preuve d'intégrité.",
    "Quelle est votre plus grande réussite ?",
    "Comment restez-vous informé des marchés ?",
    "Quel est votre style de travail en équipe ?",
    "Comment gérez-vous le stress ?",
  ],
  market: [
    "Où se situe le S&P 500 actuellement ? Où le voyez-vous dans un an ?",
    "Quel est le taux des bons du Trésor américain à 10 ans actuellement ?",
    "Que se passe-t-il avec les prix du pétrole et pourquoi ?",
    "Comment expliqueriez-vous ce qui se passe actuellement dans l'économie ?",
    "Quel est le taux de la Banque du Canada actuellement ? Et celui de la Réserve fédérale ?",
    "Expliquez ce que chaque banque centrale essaie d'accomplir avec sa politique.",
    "Expliquez les conditions économiques actuelles au Canada (ou aux États-Unis, au Japon, dans la zone euro, en Angleterre).",
    "Où se dirige le taux américain à 10 ans ?",
  ],
  investment: [
    "Si vous aviez 10 millions d'euros, comment les investiriez-vous ?",
    "Sur quels secteurs êtes-vous optimiste actuellement ?",
    "Présentez-moi une action sur laquelle vous êtes long.",
    "Quelle est votre vision de l'or comme investissement ?",
    "Nommez 3 secteurs sur lesquels vous êtes long.",
    "Nommez 3 secteurs sur lesquels vous êtes short.",
    "Nommez une action dans chacun des secteurs mentionnés ci-dessus.",
    "Comment évaluez-vous une entreprise ?",
    "Quels ratios utilisez-vous lors de l'évaluation d'une entreprise ?",
  ],
  technical: [
    "Quelle est la principale différence entre un titre adossé à des créances hypothécaires et une obligation traditionnelle ?",
    "Expliquez le modèle Black-Scholes.",
    "Quelle est la relation entre les taux d'intérêt et les taux de change ?",
    "Comment couvririez-vous une option binaire ?",
    "Expliquez la durée et la convexité. Quelle est la formule de la durée ?",
    "Qu'est-ce que le spot ? Qu'est-ce qu'un taux forward ?",
    "Qu'est-ce que la courbe des rendements ?",
    "Qu'est-ce que le Dow Jones Industrial Average, NASDAQ, S&P 500 ? Comment ça marche ?",
    "Expliquez ce que sont les « Greeks » des options.",
  ],
  brainteaser: [
    "Je lance une pièce jusqu'à obtenir deux faces consécutives. Quel est le nombre attendu de lancers ?",
    "Si je lance deux dés, quelle est la probabilité d'obtenir au moins un six ?",
    "Considérez une option d'achat binaire (cash-or-nothing) de style européen. Comment couvreriez-vous cette position ?",
    "Un client vous donne un ordre d'achat que vous exécutez. Après, il/elle prétend que c'était un ordre de vente, que faites-vous ?",
    "Vous avez trois boîtes, une contenant deux pièces d'or, une contenant deux pièces d'argent, et une contenant une pièce d'or et une pièce d'argent. Les boîtes sont étiquetées incorrectement. Vous pouvez retirer une seule pièce d'une seule boîte. Comment pouvez-vous étiqueter correctement toutes les boîtes ?",
  ],
};

/**
 * Récupère une question aléatoire pour une catégorie et un type d'entretien spécifiques
 */
export function getQuestionsForCategory(
  interviewType: string,
  category: string,
  difficulty: string = "medium"
) {
  // Sélectionner le bon ensemble de questions
  const questions =
    interviewType === "corporate" ? corporateQuestions : marketQuestions;

  // Trouver la catégorie correspondante ou utiliser behavioral par défaut
  const categoryQuestions =
    questions[category as keyof typeof questions] || questions.behavioral;

  // Sélectionner une question aléatoire
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  return categoryQuestions[randomIndex];
}

/**
 * Obtient toutes les catégories disponibles pour un type d'entretien
 */
export function getAvailableCategories(interviewType: string) {
  return interviewType === "corporate"
    ? Object.keys(corporateQuestions)
    : Object.keys(marketQuestions);
}
