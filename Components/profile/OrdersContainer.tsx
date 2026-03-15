import OrdersList from "./OrdersList";
import MyOrders from "./MyOrders";

export default function OrdersContainer() {
  return (
    <div>
      <MyOrders />
      <OrdersList />
    </div>
  );
}
