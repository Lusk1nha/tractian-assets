import { Navbar } from "@/components/navbar";

export default function Layout() {
  return (
    <div className="bg-appBackground w-full h-screen relative flex">
      <header className="w-full">
        <Navbar />
      </header>
      <main></main>
    </div>
  );
}
