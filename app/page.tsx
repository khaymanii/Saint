import { Hero } from "@/components/layout/Hero";
import { Category } from "@/components/layout/Category";
import { FeaturedProduct } from "@/components/layout/FeaturedProduct";
import { NewArrivals } from "@/components/layout/NewArrivals";
import { Banner } from "@/components/layout/Banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProduct />
      <NewArrivals />
      <Banner />
    </div>
  );
}
