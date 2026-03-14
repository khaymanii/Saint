"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";

export default function AccountSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "My orders",
      href: "/profile/orders",
      icon: ShoppingBag,
    },
    {
      name: "Wishlist",
      href: "/profile",
      icon: Heart,
    },
    {
      name: "My info",
      href: "/profile/info",
      icon: User,
    },
    {
      name: "Log out",
      href: "/logout",
      icon: LogOut,
    },
  ];

  return (
    <aside className="w-full lg:w-64 lg:border-r lg:pr-6">
      {/* Greeting */}
      <div className="mb-4">
        <h2 className="font-semibold text-base sm:text-lg">Hello Jhanvi</h2>

        <p className="text-xs sm:text-sm text-gray-500">
          Welcome to your account
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex lg:flex-col gap-2 overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`whitespace-nowrap px-3 py-2 rounded text-sm flex items-center justify-center lg:justify-start
              
              ${
                isActive
                  ? "bg-[#063c71] text-white"
                  : "hover:bg-gray-100 text-gray-700"
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
