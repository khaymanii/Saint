import Image from "next/image";

interface Props {
  name: string;
  color: string;
  price: number;
  image: string;
}

export default function WishlistItem({ name, color, price, image }: Props) {
  return (
    <div className="border-b py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-red-500">✕</button>

        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded object-cover"
        />

        <div>
          <h4 className="font-medium text-sm sm:text-base">{name}</h4>

          <p className="text-xs sm:text-sm text-gray-500">Color : {color}</p>

          <p className="text-xs sm:text-sm text-gray-500">Quantity : 1</p>
        </div>
      </div>

      {/* Price + Button */}
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="font-medium text-sm sm:text-base">${price}.00</span>

        <button className="bg-[#063c71] text-white px-4 py-2 text-sm rounded w-auto sm:w-auto hover:opacity-90 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}
