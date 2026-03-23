"use client";

import { FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#063c71] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/">
            <h1 className="text-2xl font-bold">SAINT</h1>
          </Link>

          <p className="font-medium">
            Sportswear and Gears for the Relentless.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="hover:underline hover:text-gray-300 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:underline hover:text-gray-300 transition"
          >
            Terms of Service
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <Link
            href="https://www.linkedin.com/company/saint-sportx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 hover:text-blue-500 transition" />
          </Link>
          <Link
            href="https://x.com/@saint_sportx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-5 w-5 hover:text-blue-400 transition" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5 hover:text-pink-500 transition" />
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="h-5 w-5 hover:text-black transition" />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-6 mt-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Saint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
