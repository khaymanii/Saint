"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "@/store/useAuthStore";
import { useSearchParams, useRouter } from "next/navigation";

export function Login() {
  const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/profile";

  const handleLogin = async () => {
    const user = await loginWithGoogle();

    if (user) {
      router.replace(redirect);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 -mt-20">
      <div className="w-full max-w-sm bg-white p-10 rounded-md border shadow-sm">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#063c71]">SAINT</h1>
          <p className="text-xs text-gray-500 mt-2">
            Sportswear and Gears for the Relentless
          </p>
        </div>

        <button
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 text-sm font-medium bg-[#063c71] text-white transition cursor-pointer"
          onClick={handleLogin}
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-xs text-gray-400 text-center mt-8">
          By continuing you agree to Saint's{" "}
          <Link className="underline text-[#063c71]" href="/terms-of-service">
            Terms Of Service{" "}
          </Link>
          and{" "}
          <Link className="underline text-[#063c71]" href="/privacy-policy">
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  );
}
