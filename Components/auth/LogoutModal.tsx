"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/Components/ui/dialog";

export default function LogoutModal() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/profile/orders");
  };

  const handleLogout = () => {
    // logout logic here later
    console.log("User logged out");

    router.push("/");
  };

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log out</DialogTitle>

          <DialogDescription>
            Are you sure you want to log out of your account?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-2 sm:justify-end">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm rounded-md bg-[#063c71] text-white hover:opacity-90"
          >
            Log out
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
