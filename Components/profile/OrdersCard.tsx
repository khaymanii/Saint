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
      selectedColor: string;
      selectedSize: string;
      quantity: number;
      price: number;
      image: string;
    }[];
  };
}

export default function OrderCard({ order }: Props) {
  const product = order.items?.[0];

  return (
    <div className="border rounded-md p-4 mb-4">
      {/* HEADER */}
      <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
        <p className="font-medium">Order {order.orderId}</p>
        <span className="text-gray-500 capitalize">{order.status}</span>
      </div>

      {/* PRODUCT */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={product?.image || ""}
            alt={product?.name || "Product"}
            width={55}
            height={55}
            className="rounded-md object-cover w-14 h-14"
          />

          <div>
            <p className="text-sm font-medium">{product?.name}</p>

            <p className="text-xs text-gray-500">Qty: {product?.quantity}</p>

            <p className="hidden sm:block text-xs text-gray-500">
              Color: {product?.selectedColor} | Size: {product?.selectedSize}
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold">${order.total}</p>
      </div>

      {/* FOOTER */}
      <div className="hidden sm:flex justify-between text-xs text-gray-500 mt-3">
        <p>
          Order Date:{" "}
          {order.createdAt?.toDate
            ? order.createdAt.toDate().toDateString()
            : ""}
        </p>

        <p>Delivery: Processing</p>
      </div>

      {/* ADDRESS (optional but useful) */}
      <div className="text-xs text-gray-500 mt-2">
        <p>
          {order.address}, {order.city}, {order.state}
        </p>
      </div>
    </div>
  );
}
