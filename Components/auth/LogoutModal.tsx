"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/Components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  triggerClassName?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function LogoutModal({
  children,
  isOpen,
  setIsOpen,
  triggerClassName,
}: Props) {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    setIsOpen(false);
    router.push("/");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={triggerClassName}>{children}</div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md py-10">
        <DialogHeader>
          <DialogTitle>Log out</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out of your account?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-2 sm:justify-end pt-6">
          <DialogClose asChild>
            <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100">
              Cancel
            </button>
          </DialogClose>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:opacity-90 cursor-pointer"
          >
            Log out
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
