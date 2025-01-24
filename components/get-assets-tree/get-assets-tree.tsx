import { Locations } from "@/types/locations";
import { RenderAssetsTree } from "./render-assets-tree";
import { Assets } from "@/types/assets";

interface IGetAssetsTreeProps {
  companyId: string;
  search?: string;

  assets: Assets[];
  locations: Locations[];
}

export function GetAssetsTree(props: Readonly<IGetAssetsTreeProps>) {
  const { companyId, search, assets, locations } = props;

  return (
    <RenderAssetsTree
      companyId={companyId}
      assets={assets}
      locations={locations}
      search={search}
    />
  );
}
