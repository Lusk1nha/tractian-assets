import { Suspense } from "react";
import { CompanyHeaderHome } from "../../_components/company-header-home";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { CompanyAssets } from "../../_components/company-assets";
import { AssetProvider } from "@/components/providers/asset-provider";

interface ICompanyLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    companyId: string;
  }>;
}

export default async function CompanyLayout(
  props: Readonly<ICompanyLayoutProps>
) {
  const { children, params } = props;
  const { companyId } = await params;

  return (
    <AssetProvider>
      <div className="max-w-[479px] w-full h-full flex flex-col gap-y-2">
        <CompanyHeaderHome title="Ativos" />

        <div className="w-full h-full border border-border rounded-md overflow-hidden">
          <Suspense
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
                <LoadingSpinner variant="secondary" className="w-10 h-10" />
                <span className="text-secondary">Buscando Ativos...</span>
              </div>
            }
          >
            <CompanyAssets companyId={companyId} />
          </Suspense>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-y-2">{children}</div>
    </AssetProvider>
  );
}
