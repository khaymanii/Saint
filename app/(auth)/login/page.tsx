import { Suspense } from "react";
import { Login } from "@/Components/auth/LoginForm";
import { BackButton } from "@/Components/layout/BackButton";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="m-4">
        <BackButton />
      </div>
      <Login />
    </Suspense>
  );
}
