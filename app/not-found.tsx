import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-appBackground w-full h-screen flex flex-col items-center justify-center gap-y-4">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-8xl font-bold text-secondary">404</h1>
        <h2 className="text-xl font-bold text-textBolder">
          Página não encontrada :(
        </h2>
        <p className="text-sm text-textBolder">
          Caso você tenha digitado o endereço manualmente, verifique se ele está
          correto.
        </p>
      </div>

      <div>
        <Link
          className="bg-textBolder h-10 text-textForeground font-semibold text-sm py-1 flex items-center justify-center gap-x-2 px-4 rounded-sm transition-colors duration-200 ease-in-out"
          href={"/"}
        >
          Clique aqui para voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
