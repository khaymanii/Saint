import { PRODUCTS } from "@/data/shop";
import slugify from "slugify";
import { Metadata } from "next";

export async function getProductMetadata(slug: string): Promise<Metadata> {
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);

  return {
    title: product ? `Saint - ${product.name}` : "Saint - Product",
    description: product
      ? product.description
      : "Sportswear and Gears for the Relentless",
  };
}
