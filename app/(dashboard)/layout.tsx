import { Navbar } from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-appBackground w-full h-screen relative flex flex-col pb-12 lg:pb-0">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full h-full p-2">{children}</main>
    </div>
  );
}
