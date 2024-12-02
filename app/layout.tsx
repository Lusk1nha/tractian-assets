import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tractian - Frontend Challenge",
  description:
    "This is a frontend challenge for Tractian to create a assets management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
