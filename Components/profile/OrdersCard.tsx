import { formatPrice } from "@/lib/formatPrice";
import { getStatusColor } from "@/lib/getStatusColor";
import Image from "next/image";

interface Props {
  order: {
    orderId: string;
    createdAt: any;
    status: string;
    total: number;
    address: string;
    city: string;
    state: string;
    phone: string;
    email: string;
    items: {
      name: string;
      color?: string;
      selectedSize: string;
      quantity: number;
      price: number;
      image: string;
    }[];
  };
}

export default function OrderCard({ order }: Props) {
  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
        <p className="font-medium">
          OrderID <span className="font-bold">({order.orderId})</span>
        </p>
        <span className="text-yellow-500 capitalize">{order.status}</span>
      </div>

      <div className="space-y-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={55}
                height={55}
                className="rounded-md object-cover w-14 h-14"
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>

                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>

                <p className="hidden sm:block text-xs text-gray-500">
                  Size: {item.selectedSize}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold">
              {formatPrice(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 border-t pt-3 text-sm font-semibold">
        <p>Total</p>
        <p>{formatPrice(order.total)}</p>
      </div>

      <div className="hidden sm:flex justify-between text-xs text-gray-500 mt-3">
        <p>
          Order Date:{" "}
          {order.createdAt?.toDate
            ? order.createdAt.toDate().toDateString()
            : ""}
        </p>

        <span
          className={`capitalize px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)} bg-opacity-10`}
        >
          Status: {order.status}
        </span>
      </div>

      <div className="text-xs text-gray-500 mt-2">
        <p>
          {order.address}, {order.city}, {order.state}
        </p>
      </div>
    </div>
  );
}
