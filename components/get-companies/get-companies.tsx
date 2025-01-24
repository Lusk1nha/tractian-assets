import { Suspense } from "react";
import { RenderCompanies } from "./render-companies";
import tractianService from "@/shared/http/tractian-instance";

async function getCompanies() {
  "use cache";
  const companies = await tractianService.getOrderedCompanies();
  return companies;
}

export async function GetCompanies() {
  const companies = await getCompanies();

  return (
    <Suspense fallback="loading companies...">
      <RenderCompanies companies={companies} />
    </Suspense>
  );
}
