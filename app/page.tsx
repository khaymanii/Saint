import { Hero } from "@/Components/layout/Hero";
import { Category } from "@/Components/layout/Category";
import { FeaturedProduct } from "@/Components/layout/FeaturedProduct";
import { NewArrivals } from "@/Components/layout/NewArrivals";
import { Banner } from "@/Components/layout/Banner";
import { Newsletter } from "@/Components/layout/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Banner />
      <FeaturedProduct />
      <NewArrivals />
      <Newsletter />
    </div>
  );
}
