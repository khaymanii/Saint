import { Header } from "@/Components/layout/Header";
import { Footer } from "@/Components/layout/Footer";
import { Toaster } from "@/Components/ui/sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Toaster />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
