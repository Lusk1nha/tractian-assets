import { Suspense } from "react";
import { ServerAsset } from "../_components/server-asset";

interface PageParams {
  companyId: string;
  assetId: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

export default async function Page(props: Readonly<PageProps>) {
  const { params } = props;
  const { companyId, assetId } = await params;

  return (
    <section className="w-full h-full flex flex-col gap-y-2">
      <Suspense fallback={<div>Loading...</div>}>
        <ServerAsset companyId={companyId} assetId={assetId} />
      </Suspense>
    </section>
  );
}
