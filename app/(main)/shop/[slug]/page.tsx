"use client";

import { PRODUCTS } from "@/data/shop";
import { use, useState } from "react";
import Image from "next/image";
import { ShopCard } from "@/Components/layout/ShopCard";
import { slugify } from "@/lib/slugify";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { BackButton } from "@/Components/layout/BackButton";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => slugify(p.name) === resolvedParams.slug);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <div>Product not found</div>;

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-4">
        <BackButton />
      </div>
      <p className="text-gray-400 text-xs mb-8">Shop • {product.name}</p>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* IMAGES */}
        <div className="flex flex-col gap-4">
          {/* MAIN IMAGE */}
          <div className="relative w-full h-80 sm:h-96 overflow-hidden">
            <Image
              src={selectedImage!}
              alt={product.name}
              fill
              priority
              className="object-contain p-6 rounded-md"
            />
          </div>

          {/* THUMBNAILS (SCROLL ON MOBILE) */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {product.images.map((img) => (
              <div
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`min-w-17.5 h-20 relative rounded-lg cursor-pointer border 
          ${selectedImage === img ? "border-[#063c71]" : "border-transparent"}`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col">
          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            ⭐ {product.rating}
            <span className="text-green-600 font-medium">In Stock</span>
          </div>

          {/* PRICE */}
          <p className="text-2xl font-bold text-[#063c71] mb-4">
            #{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* SIZE */}
          <div className="mb-6">
            <p className="mb-2 font-medium text-sm">
              Size
              <span className="text-xs text-gray-400 ml-1">(Select size)</span>
            </p>

            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-sm border rounded-md transition
            ${
              selectedSize === size
                ? "bg-[#063c71] text-white border-[#063c71]"
                : "hover:border-[#063c71]"
            }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {/* QUANTITY */}
            <div className="flex items-center justify-between border rounded-full px-3 py-1 w-full sm:w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg px-2 text-gray-600 hover:text-black"
              >
                -
              </button>

              <span className="px-4 text-sm font-medium">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg px-2 text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>

            {/* ADD TO CART */}
            <button
              className={`w-full sm:w-auto bg-[#063c71] text-white px-6 py-3 rounded-md text-sm font-medium transition
        ${
          !selectedSize ? "opacity-50 cursor-not-allowed" : "hover:bg-[#042a50]"
        }`}
              onClick={() => {
                if (!selectedSize) {
                  toast.error("Please select size");
                  return;
                }

                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images[0],
                  selectedSize,
                  quantity,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-xl font-semibold mb-6 text-[#063c71]">
          Similar Gears
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {related.map((item) => (
            <ShopCard image={[item.images[0]]} key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
