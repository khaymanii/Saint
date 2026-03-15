"use client";
import { Hero } from "@/Components/layout/Hero";
import { Category } from "@/Components/layout/Category";
import { FeaturedProduct } from "@/Components/layout/FeaturedProduct";
import { NewArrivals } from "@/Components/layout/NewArrivals";
import { Banner } from "@/Components/layout/Banner";
import { Newsletter } from "@/Components/layout/Newsletter";
import { Features } from "@/Components/layout/Features";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Saint - Relentless";
  }, []);

  return (
    <div>
      <Hero />
      <Category />
      <Banner />
      <FeaturedProduct />
      <NewArrivals />
      <Newsletter />
      <Features />
    </div>
  );
}
