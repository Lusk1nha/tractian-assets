"use client";

import { TractianRepo } from "@/repositories/tractian-repo";
import { useQuery } from "@tanstack/react-query";

export function useCompanies() {
  const { getAllCompanies } = new TractianRepo();

  const { data, isError, refetch } = useQuery({
    queryKey: ["companies"],
    queryFn: getAllCompanies,
  });

  return {
    companies: data,
    isError,
    refetch,
  };
}
