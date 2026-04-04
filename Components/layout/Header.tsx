"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/Components/ui/Button";
import { CartBadge } from "@/Components/cart/CartBadge";
import { useAuthStore } from "@/store/useAuthStore";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { getProtectedRoute } from "@/lib/getProtectedRoute";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const profileHref = getProtectedRoute(user, "/profile");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const linkClasses = (href: string) =>
    `transition ${
      pathname === href ? "text-[#063c71] font-semibold" : "text-black"
    } hover:text-[#063c71]`;

  const mobileLinkClasses = (href: string) =>
    `px-4 py-3 rounded-lg transition ${
      pathname === href
        ? "bg-[#063c71] text-white font-semibold shadow-md"
        : "text-black hover:bg-gray-100"
    }`;

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen((prev) => !prev);
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          <Link href="/">
            <h1 className="text-2xl font-bold text-[#063c71]">SAINT</h1>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Link href={profileHref} className={linkClasses("/profile")}>
            {user && user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full object-cover border-2 border-[#063c71]"
              />
            ) : (
              <Button variant="ghost" size="icon">
                <User className="h-10 w-10" />
              </Button>
            )}
          </Link>

          <Link href="/cart" className={linkClasses("/cart")}>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-10 w-10" />
              <CartBadge />
            </Button>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-3 font-body text-base z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
