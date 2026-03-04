"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu: visible only on mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-6 mt-8 font-body text-lg">
                  <Link href="/">Home</Link>
                  <Link href="/shop">Shop</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/contact">Contact Us</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-wide"
          >
            SAINT
          </Link>
        </div>

        {/* Center / Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-primary transition">
            Shop
          </Link>
          <Link href="/products" className="hover:text-primary transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact Us
          </Link>
        </nav>

        {/* Right Section: Search, Profile, Cart */}
        <div className="flex items-center gap-3">
          {/* Search Input: visible on large screens only */}
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search gear..." className="pl-9 w-64" />
          </div>

          {/* Profile Icon */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          {/* Shopping Cart Icon */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
