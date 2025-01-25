import tractianService from "@/shared/http/tractian-instance";
import { RenderAsset } from "./render-asset";
import { Assets } from "@/types/assets";

import { faker } from "@faker-js/faker";

interface IServerAssetProps {
  companyId: string;
  assetId: string;
}

async function getAssetsById(
  companyId: string,
  assetId: string
): Promise<Assets> {
  "use cache";
  const assets = await tractianService.getAssets(companyId);

  const asset = assets.find((asset) => asset.id === assetId);

  if (!asset) {
    throw new Error("Asset not found");
  }

  return asset;
}

export async function ServerAsset(props: Readonly<IServerAssetProps>) {
  const { companyId, assetId } = props;

  const asset = await getAssetsById(companyId, assetId);

  const image = faker.image.urlPicsumPhotos({
    width: 336,
    height: 226
  });

  return <RenderAsset asset={asset} image={image} />;
}
