import ResultsPage from "@/components/results";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<></>}>
      <ResultsPage />
    </Suspense>
  );
}
