"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export function CartBadge() {
  const totalItems = useCartStore((s) => s.getTotalItems());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || totalItems === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {totalItems}
    </span>
  );
}
