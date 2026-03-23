"use client";

import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export function Footer() {
  const iconBox =
    "w-8 h-8 flex items-center justify-center rounded-full border border-white/30 hover:border-white transition duration-300 hover:bg-white/10";

  return (
    <footer className="bg-[#063c71] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <Link href="/">
            <h1 className="text-2xl font-bold">SAINT</h1>
          </Link>

          <p className="font-medium text-sm text-white/80 mt-1">
            Sportswear and Gears for the Relentless.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex gap-6 text-sm text-white/80">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition"
          >
            Terms of Service
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/saint-sportx"
            target="_blank"
            className={iconBox}
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>

          <Link
            href="https://x.com/@saint_sportx"
            target="_blank"
            className={iconBox}
          >
            <FaXTwitter className="h-4 w-4" />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className={iconBox}
          >
            <FaInstagram className="h-4 w-4" />
          </Link>

          <Link
            href="https://www.tiktok.com"
            target="_blank"
            className={iconBox}
          >
            <FaTiktok className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-6 mt-6">
        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} Saint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
