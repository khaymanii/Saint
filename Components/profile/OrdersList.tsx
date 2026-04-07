"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { useAuthStore } from "@/store/useAuthStore";
import OrderCard from "./OrdersCard";
import EmptyOrder from "./EmptyOrder";
import OrdersSkeletonList from "../layout/OrderSkeletonList";

export default function OrdersList() {
  const [orders, setOrders] = useState<any[]>([]);
  const { user, loading: authLoading } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid),
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (authLoading || loading) {
    return <OrdersSkeletonList />;
  }

  return (
    <div className="space-y-4">
      {orders.length === 0 ? (
        <EmptyOrder />
      ) : (
        orders.map((order) => <OrderCard key={order.id} order={order} />)
      )}
    </div>
  );
}
