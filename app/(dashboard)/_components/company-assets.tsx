import tractianService from "@/shared/http/tractian-instance";
import { SearchAssets } from "./search-assets";


interface ICompanyAssetsProps {
  companyId: string;
}

async function getAssets(companyId: string) {
  "use cache";
  const assets = await tractianService.getAssets(companyId);
  return assets;
}

async function getLocations(companyId: string) {
  "use cache";
  const locations = await tractianService.getLocations(companyId);
  return locations;
}

export async function CompanyAssets(props: Readonly<ICompanyAssetsProps>) {
  const { companyId } = props;

  const [assets, locations] = await Promise.all([
    getAssets(companyId),
    getLocations(companyId),
  ]);


  return (
    <SearchAssets
      companyId={companyId}
      assets={assets}
      locations={locations}
      defaultSearch=""
    />
  );
}
