"use client";

import { TractianRepo } from "@/repositories/tractian-repo";
import { useQuery } from "@tanstack/react-query";

export function useAssets(companyId: string) {
  const { getAssets } = new TractianRepo();

  const { data, isError, refetch } = useQuery({
    queryKey: ["assets", companyId.toString()],
    queryFn: () => getAssets(companyId),
    refetchOnWindowFocus: false,
  });

  return {
    assets: data,
    isError,
    refetch,
  };
}
