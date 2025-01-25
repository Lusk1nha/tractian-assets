import { useMemo } from "react";
import { RenderAssetsTree } from "./render-assets-tree";
import { getStringToSearch } from "@/lib/string";

import { NodeEntity } from "@/types/nodes";
import { Locations } from "@/types/locations";
import { Assets } from "@/types/assets";

interface IGetAssetsTreeProps {
  companyId: string;
  assets: Assets[];
  locations: Locations[];

  search?: string;
}

export function GetAssetsTree(props: Readonly<IGetAssetsTreeProps>) {
  const { companyId, search = "", assets, locations } = props;

  const nodes = useMemo<NodeEntity[]>(() => {
    if (!assets || !locations) {
      return [];
    }

    const mergedEntities = [
      ...locations.map((loc) => ({ ...loc, type: "location" as const })),
      ...assets.map((asset) => ({ ...asset, type: "asset" as const }))
    ];

    if (!search?.length) {
      return mergedEntities;
    }

    const searchWithoutAccents = getStringToSearch(search);

    const entitiesBySearch = mergedEntities.filter((node) => {
      const nameWithoutAccents = getStringToSearch(node.name);
      return nameWithoutAccents.includes(searchWithoutAccents);
    });

    return entitiesBySearch;
  }, [assets, locations, search]);

  return <RenderAssetsTree companyId={companyId} nodes={nodes} />;
}
