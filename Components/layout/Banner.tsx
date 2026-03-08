"use client";

import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 overflow-hidden rounded-xl">
        {/* LEFT SIDE */}
        <div className="relative bg-[#063c71] text-white p-8 flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/ball1.jpg"
              alt="Background texture"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#063c71]/80" />

          {/* Content */}
          <div className="relative z-10 max-w-md">
            <span className="uppercase tracking-widest text-sm text-blue-200 font-semibold">
              New Collection
            </span>

            <h1 className="text-2xl md:text-5xl font-bold mt-4 leading-tight">
              Built for the <br />
              <span className="text-blue-300">Relentless</span> Underdog
            </h1>

            <p className="mt-6 text-gray-200">
              Wears and gears built to push limits. Designed for those who
              refuse to quit.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/shop"
                className="bg-white text-[#063c71] px-6 py-3 text-sm rounded-md font-semibold"
              >
                Shop Now
              </Link>

              <Link
                href="/categories"
                className="border border-white px-6 py-3 text-sm rounded-md hover:bg-white hover:text-[#063c71]"
              >
                Explore Gear
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-125 hidden sm:block">
          <Image
            src="/images/footballwomen1.jpg"
            alt="Saint Athlete"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
