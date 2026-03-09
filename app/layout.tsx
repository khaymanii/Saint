"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/layout/Header";
import { Footer } from "@/Components/layout/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const metadata: Metadata = {
  title: "Saint - Relentless",
  description: "Sportswear and Gears for the Relentless",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login";

  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="antialiased flex flex-col min-h-screen">
        {!hideLayout && <Header />}
        <main className="grow">{children}</main>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
