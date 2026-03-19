import Image from "next/image";

interface Props {
  order: {
    orderNo: string;
    orderDate: string;
    deliveryDate: string;
    status: string;
    payment: string;
    product: {
      name: string;
      color: string;
      qty: number;
      total: number;
      image: string;
    };
  };
}

export default function OrderCard({ order }: Props) {
  return (
    <div className="border rounded-md p-4 mb-4">
      {/* Top Row */}
      <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
        <p className="font-medium">Order {order.orderNo}</p>

        <span className="text-gray-500">{order.status}</span>
      </div>

      {/* Product */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={order.product.image}
            alt={order.product.name}
            width={55}
            height={55}
            className="rounded-md object-cover w-13.75 h-13.75"
          />

          <div>
            <p className="text-sm font-medium">{order.product.name}</p>

            <p className="text-xs text-gray-500">Qty: {order.product.qty}</p>

            {/* Hide extra details on mobile */}
            <p className="hidden sm:block text-xs text-gray-500">
              Color: {order.product.color}
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold">${order.product.total}</p>
      </div>

      {/* Desktop only extra details */}
      <div className="hidden sm:flex justify-between text-xs text-gray-500 mt-3">
        <p>Order Date: {order.orderDate}</p>

        <p>Delivery: {order.deliveryDate}</p>
      </div>
    </div>
  );
}
