"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const linkClasses = (href: string) =>
    `transition ${
      pathname === href ? "text-[#063c71] font-semibold" : "text-black"
    } hover:text-[#063c71]`;

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-wide"
          >
            SAINT
          </Link>
        </div>

        {/* Desktop Navigation */}
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

        {/* Right Section: Profile, Cart */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu — absolutely positioned so it overlays content below */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-body text-base z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={linkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
