"use client";

import { PRODUCTS } from "@/data/shop";
import { use, useState } from "react";
import Image from "next/image";
import { ShopCard } from "@/Components/layout/ShopCard";
import { slugify } from "@/lib/slugify";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params); // unwrap the promise
  const product = PRODUCTS.find((p) => slugify(p.name) === resolvedParams.slug);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-gray-400 text-xs mb-8">
        Shop • Product Details • {product.name}
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images.map((img) => (
              <div
                key={img}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 bg-gray-100 cursor-pointer relative rounded-md"
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 relative bg-gray-100 h-112.5 rounded-md">
            <Image
              src={selectedImage!}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-3">{product.name}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            ⭐ {product.rating} ({product.reviews} Reviews)
            <span className="text-green-600">In Stock</span>
          </div>

          <p className="text-2xl font-semibold mb-4">${product.price}</p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="mb-2 font-medium">Colours:</p>

            <div className="flex gap-3">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">Size:</p>

            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded
                  ${selectedSize === size ? "bg-[#063c71] text-white" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex border rounded">
              <button
                className="px-4"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>

              <span className="px-6 py-2">{quantity}</span>

              <button
                className="px-4"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="bg-[#063c71] text-white px-8 py-3 rounded cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 text-[#063c71]">
          Similar Gears
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {related.map((item) => (
            <ShopCard image={[]} key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
