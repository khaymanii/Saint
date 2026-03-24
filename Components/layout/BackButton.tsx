"use client";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" text-sm text-[#063c71] hover:underline flex items-center gap-2 font-medium"
    >
      ← Go Back
    </button>
  );
}
