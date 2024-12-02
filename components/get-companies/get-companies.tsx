import { TractianRepo } from "@/repositories/tractian-repo";
import { Suspense } from "react";
import { RenderCompanies } from "./render-companies";

export function GetCompanies() {
  const { getAllCompanies } = new TractianRepo();
  const companies = getAllCompanies();

  return (
    <Suspense fallback="loading companies...">
      <RenderCompanies response={companies} />
    </Suspense>
  );
}
