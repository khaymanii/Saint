import Link from "next/link";
import { BackButton } from "../layout/BackButton";

export default function Breadcrumb() {
  return (
    <div>
      <div className="mb-4 -mt-4">
        <BackButton />
      </div>
      <p className="text-xs opacity-70 mb-6">
        <Link href="/">Home</Link> • My Account
      </p>
    </div>
  );
}
