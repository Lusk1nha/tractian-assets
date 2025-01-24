import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <div className="bg-appBackground w-full h-screen flex flex-col items-center justify-center">
      <LoadingSpinner variant="secondary" className="w-14 h-14" />
      <p className="text-base font-medium text-secondary">Carregando...</p>
    </div>
  );
}
