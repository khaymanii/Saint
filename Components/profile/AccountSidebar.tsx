"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      name: "My orders",
      href: "/profile/orders",
      icon: ShoppingBag,
    },
    {
      name: "Wishlist",
      href: "/profile/wishlist",
      icon: Heart,
    },
    {
      name: "Profile",
      href: "/profile/info",
      icon: User,
    },
    {
      name: "Log out",
      href: "/logout",
      icon: LogOut,
    },
  ];

  const activeItem = navItems.find((item) => item.href === pathname);

  return (
    <aside className="w-full lg:w-64 lg:border-r lg:pr-6">
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="font-semibold text-base sm:text-lg">Hello Jhanvi</h2>

        <p className="text-xs sm:text-sm text-gray-500">
          Welcome to your account
        </p>
      </div>

      {/* Mobile Select */}
      <div className="lg:hidden mb-6">
        <Select
          defaultValue={pathname}
          onValueChange={(value) => router.push(value)}
        >
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

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex lg:flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded text-sm flex items-center transition
              
              ${
                isActive
                  ? "bg-[#063c71] text-white"
                  : "hover:bg-[#063c71]/10 text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
