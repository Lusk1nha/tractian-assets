import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <div className="bg-appBackground w-full h-screen flex flex-col items-center justify-center p-2">
      <section className="bg-foreground w-full h-screen flex items-center justify-center rounded-lg border border-border px-4 py-[18px] gap-x-2">
        <LoadingSpinner variant="secondary" className="w-14 h-14" />
        <p className="text-base font-medium text-secondary">Carregando...</p>
      </section>
    </div>
  );
}
