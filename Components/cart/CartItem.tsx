import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useHydration } from "@/hooks/useHydration";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeFromCart,
}: any) {
  const subtotal = item.price * item.quantity;
  const mounted = useHydration();

  if (!mounted) return null;

  return (
    <div className="border-b py-6">
      <div className="hidden md:grid grid-cols-7 items-center">
        <div className="col-span-2 flex items-center gap-4">
          <div className="w-20 h-20 relative bg-gray-100 rounded">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover rounded-md"
            />
          </div>

          <div>
            <p className="font-medium">{item.name}</p>

            <p className="text-sm text-gray-500">Size : {item.selectedSize}</p>
          </div>
        </div>

        <p>${item.price}</p>

        <div className="flex items-center border rounded w-fit">
          <button onClick={() => decreaseQty(item)} className="px-3">
            -
          </button>

          <span className="px-4">{item.quantity}</span>

          <button onClick={() => increaseQty(item)} className="px-3">
            +
          </button>
        </div>

        <p>{item.shipping === 0 ? "FREE" : `$${item.shipping}`}</p>

        <p>${subtotal}</p>

        <button onClick={() => removeFromCart(item)} className="text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      <div className="md:hidden flex gap-4">
        <div className="w-24 h-24 relative bg-gray-100 rounded-md">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover rounded-md"
          />
        </div>

        <div className="flex-1">
          <p className="font-medium">{item.name}</p>

          <p className="text-sm text-gray-500">
            Size: {item.selectedSize}
          </p>

          <p className="text-sm mt-1">${item.price}</p>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center border rounded">
              <button onClick={() => decreaseQty(item)} className="px-3">
                -
              </button>

              <span className="px-4">{item.quantity}</span>

              <button onClick={() => increaseQty(item)} className="px-3">
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item)}
              className="text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <p className="text-sm mt-2">
            Subtotal: <span className="font-medium">${subtotal}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
