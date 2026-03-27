"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useHydration } from "@/hooks/useHydration";

export function AuthInit({ children }: { children: React.ReactNode }) {
  const initAuth = useAuthStore((state) => state.initAuth);
  const mounted = useHydration();

  useEffect(() => {
    initAuth();
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
