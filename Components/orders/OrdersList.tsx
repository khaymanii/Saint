import { ORDERS } from "@/data/order";
import OrderCard from "./OrdersCard";

export default function OrdersList() {
  return (
    <div>
      {ORDERS.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
