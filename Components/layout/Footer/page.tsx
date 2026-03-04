"use client";

import { FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div>
          {" "}
          <h1 className="text-2xl font-bold sm:text-left text-center">SAINT</h1>
          <p className="font-medium">
            Sportswear and Gears for the Relentless.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 hover:text-blue-500 transition" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-6 w-6 hover:text-blue-400 transition" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-6 w-6 hover:text-pink-500 transition" />
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="h-6 w-6 hover:text-black transition" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Saint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
