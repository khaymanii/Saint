"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";
import LogoutModal from "@/Components/auth/LogoutModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  const navItems = [
    { name: "My orders", href: "/profile", icon: ShoppingBag },
    { name: "Wishlist", href: "/profile/wishlist", icon: Heart },
    { name: "Profile", href: "/profile/info", icon: User },
    { name: "Log out", href: "/logout", icon: LogOut },
  ];

  const activeItem = navItems.find((item) => item.href === pathname);

  const handleMobileSelect = (value: string) => {
    if (value === "/logout") {
      setIsLogoutOpen(true);
    } else {
      router.push(value);
    }
  };

  return (
    <aside className="w-full lg:w-64 lg:border-r lg:pr-6">
      <div className="mb-6">
        <h2 className="font-semibold text-base sm:text-lg">
          Hello, {user?.displayName || "User"}
        </h2>
        <p className="text-xs mb-2">{user?.email || "jhanvi@example.com"}</p>
        <p className="text-xs sm:text-sm text-gray-500">
          Welcome to your account
        </p>
      </div>

      <div className="lg:hidden mb-6">
        <Select defaultValue={pathname} onValueChange={handleMobileSelect}>
          <SelectTrigger className="w-full border-[#063c71] focus:ring-[#063c71]">
            <SelectValue placeholder={activeItem?.name || "Account Menu"} />
          </SelectTrigger>

          <SelectContent>
            {navItems.map((item) => (
              <SelectItem
                key={item.href}
                value={item.href}
                className="focus:bg-[#063c71]/10"
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <nav className="hidden lg:flex lg:flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.name === "Log out") {
            return (
              <button
                key={item.name}
                onClick={() => setIsLogoutOpen(true)}
                className="px-3 py-2 rounded text-sm flex items-center hover:bg-[#063c71]/10 text-gray-700"
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.name}
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded text-sm flex items-center transition ${
                isActive
                  ? "bg-[#063c71] text-white rounded-md"
                  : "hover:bg-[#063c71]/10 text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <LogoutModal
        isOpen={isLogoutOpen}
        setIsOpen={setIsLogoutOpen}
        children={undefined}
      />
    </aside>
  );
}
