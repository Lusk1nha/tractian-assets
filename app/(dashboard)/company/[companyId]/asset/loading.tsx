import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <section className="w-full h-full flex flex-col gap-y-2">
      <div className="min-h-8 flex justify-end items-center gap-x-2" />

      <div className="w-full h-full flex flex-col items-center justify-center border border-border rounded-md">
        <LoadingSpinner variant="secondary" className="w-14 h-14" />
        <p className="text-xs md:text-sm font-normal text-secondary text-center">
          Carregando informações do ativo.
        </p>
      </div>
    </section>
  );
}
