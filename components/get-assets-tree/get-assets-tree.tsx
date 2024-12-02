"use client";

import { TractianRepo } from "@/repositories/tractian-repo";
import { RenderAssetsTree } from "./render-assets-tree";
import { Assets } from "@/types/assets";
import { Locations } from "@/types/locations";
import { useQuery } from "@tanstack/react-query";

interface IGetAssetsTreeProps {
  companyId: string;
  search?: string;
}

type CompanyNodesResponse = {
  assets: Assets[];
  locations: Locations[];
};

export function GetAssetsTree(props: Readonly<IGetAssetsTreeProps>) {
  const { companyId, search } = props;

  const { data, isFetching } = useQuery<CompanyNodesResponse>({
    queryKey: ["company", companyId.toString()],
    queryFn: () => getCompanyNodes(companyId),
    refetchOnWindowFocus: false,
  });

  async function getCompanyNodes(
    companyId: string
  ): Promise<CompanyNodesResponse> {
    const { getAssets, getLocations } = new TractianRepo();

    const [fetchedAssets, fetchedLocations] = await Promise.all([
      getAssets(companyId),
      getLocations(companyId),
    ]);

    console.log(fetchedAssets, fetchedLocations);
    return {
      assets: fetchedAssets,
      locations: fetchedLocations,
    };
  }

  if (isFetching) return <p>Loading...</p>;

  const { assets, locations } = data as CompanyNodesResponse;

  return (
    <RenderAssetsTree
      companyId={companyId}
      assets={assets}
      locations={locations}
      search={search}
    />
  );
}
