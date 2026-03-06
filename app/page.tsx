import { Hero } from "@/components/layout/Hero/page";
import { Category } from "@/components/layout/Category/page";
import { FeaturedProduct } from "@/components/layout/FeaturedProduct/page";
import { NewArrivals } from "@/components/layout/NewArrivals/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProduct />
      <NewArrivals />
    </div>
  );
}
