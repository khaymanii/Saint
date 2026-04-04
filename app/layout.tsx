// @ts-ignore: side-effect import lacks type declarations
import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthInit } from "@/Components/providers/AuthInit";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "SAINT",
  description: "Sportswear and Gears for the Relentless",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`} suppressHydrationWarning>
      <body
        className="antialiased flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <AuthInit>{children}</AuthInit>
      </body>
    </html>
  );
}
