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
              loading="eager"
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
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={() => decreaseQty(item)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>

            <span className="px-4 text-sm font-medium">{item.quantity}</span>

            <button
              onClick={() => increaseQty(item)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        <p>{item.shipping === 0 ? "FREE" : `$${item.shipping}`}</p>

        <p>${subtotal}</p>

        <button onClick={() => removeFromCart(item)} className="text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      <div className="md:hidden bg-white rounded-xl p-4 shadow-sm border">
        <div className="flex gap-4">
          <div className="w-24 h-24 relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              loading="eager"
              sizes="100px"
              className="object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="font-semibold text-sm text-gray-900 leading-tight">
                {item.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Size: {item.selectedSize}
              </p>
            </div>

            <p className="text-sm font-semibold text-[#063c71] mt-2">
              ${item.price}
            </p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() => decreaseQty(item)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>

                <span className="px-4 text-sm font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item)}
                className="flex items-center gap-1 text-red-500 text-xs font-medium"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
