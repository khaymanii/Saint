import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      {children}
    </main>
  );
}
