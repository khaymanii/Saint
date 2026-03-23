import { Suspense } from "react";
import { Login } from "@/Components/auth/LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
