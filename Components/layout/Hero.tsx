"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/heroSlides";

const INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden z-0">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${s.image}')` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/70 z-20" />

      {/* Content */}
      <div
        key={current}
        className={`relative z-30 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 lg:px-24
          ${
            animating
              ? direction === "next"
                ? "animate-slide-out-left"
                : "animate-slide-out-right"
              : "animate-slide-in"
          }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-3 drop-shadow-xl leading-none tracking-tight">
          {slide.headline}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-[#063c71] font-bold uppercase tracking-widest mb-4 drop-shadow">
          {slide.sub}
        </p>

        <p className="text-sm sm:text-base text-white/80 mb-10 max-w-md drop-shadow">
          {slide.accent}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/shop"
            className="px-8 py-3 bg-[#063c71] hover:bg-[#063c71] text-white font-bold uppercase tracking-widest text-sm rounded-md transition-all duration-200 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-black/30 hover:bg-black/60 text-white transition rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-black/30 hover:bg-black/60 text-white transition rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-[#063c71]"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.75 bg-white/10 z-40">
        <div
          key={current}
          className="h-full bg-[#063c71] animate-progress-bar"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px);
          }
        }
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px);
          }
        }
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease forwards;
        }
        .animate-slide-out-left {
          animation: slideOutLeft 0.6s ease forwards;
        }
        .animate-slide-out-right {
          animation: slideOutRight 0.6s ease forwards;
        }
        .animate-progress-bar {
          animation: progressBar linear forwards;
        }
      `}</style>
    </section>
  );
}
