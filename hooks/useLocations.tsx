"use client";

import { TractianRepo } from "@/repositories/tractian-repo";
import { useQuery } from "@tanstack/react-query";

export function useLocations(companyId: string) {
  const { getLocations } = new TractianRepo();

  const { data, isError, refetch } = useQuery({
    queryKey: ["locations", companyId.toString()],
    queryFn: () => getLocations(companyId),
    refetchOnWindowFocus: false,
  });

  return {
    locations: data,
    isError,
    refetch,
  };
}
