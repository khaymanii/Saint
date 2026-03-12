import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}: any) {
  const subtotal = item.price * item.quantity;

  return (
    <div className="border-b py-6">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-7 items-center">
        {/* Product */}
        <div className="col-span-2 flex items-center gap-4">
          <div className="w-20 h-20 relative bg-gray-100 rounded">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded"
            />
          </div>

          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">Color : {item.color}</p>
            <p className="text-sm text-gray-500">Size : {item.size}</p>
          </div>
        </div>

        <p>${item.price}.00</p>

        {/* Quantity */}
        <div className="flex items-center border rounded w-fit">
          <button onClick={() => decreaseQty(item.id)} className="px-3">
            -
          </button>

          <span className="px-4">{item.quantity}</span>

          <button onClick={() => increaseQty(item.id)} className="px-3">
            +
          </button>
        </div>

        <p>{item.shipping === 0 ? "FREE" : `$${item.shipping}.00`}</p>

        <p>${subtotal}.00</p>

        <button onClick={() => removeItem(item.id)} className="text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4">
        <div className="w-24 h-24 relative bg-gray-100 rounded">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded"
          />
        </div>

        <div className="flex-1">
          <p className="font-medium">{item.name}</p>

          <p className="text-sm text-gray-500">
            Color: {item.color} • Size: {item.size}
          </p>

          <p className="text-sm mt-1">${item.price}.00</p>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center border rounded">
              <button onClick={() => decreaseQty(item.id)} className="px-3">
                -
              </button>

              <span className="px-4">{item.quantity}</span>

              <button onClick={() => increaseQty(item.id)} className="px-3">
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <p className="text-sm mt-2">
            Subtotal: <span className="font-medium">${subtotal}.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}
