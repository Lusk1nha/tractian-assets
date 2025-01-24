import { Logo } from "./logo";
import { GetCompanies } from "./get-companies/get-companies";

export function Navbar() {
  return (
    <>
      <div className="hidden lg:flex">
        <DesktopNavbar />
      </div>

      <div className="w-full flex fixed bottom-0 lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

function DesktopNavbar() {
  return (
    <nav className="w-full bg-tertiary text-white h-12 flex items-center justify-between px-4 gap-x-2">
      <Logo />
      <GetCompanies />
    </nav>
  );
}

function MobileNavbar() {
  return (
    <nav className="w-full bg-tertiary text-white h-12 py-2 flex items-center justify-between px-4 gap-x-2">
      <Logo className="w-20 h-20" />
      <GetCompanies />
    </nav>
  );
}
