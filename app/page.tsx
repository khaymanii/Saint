import { Hero } from "@/Components/layout/Hero";
import { Category } from "@/Components/layout/Category";
import { FeaturedProduct } from "@/Components/layout/FeaturedProduct";
import { NewArrivals } from "@/Components/layout/NewArrivals";
import { Banner } from "@/Components/layout/Banner";

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
