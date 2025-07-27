
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

interface Order {
  id: number;
  item: string;
  quantity: number;
  price: number;
  status: "Pending" | "Confirmed" | "Shipped" | "Delivered";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: 101,
    item: "Aluminium Rod",
    quantity: 5,
    price: 300,
    status: "Pending",
    date: "2025-07-25",
  },
  {
    id: 102,
    item: "Plastic Pipes",
    quantity: 10,
    price: 500,
    status: "Confirmed",
    date: "2025-07-24",
  },
  {
    id: 103,
    item: "Iron Sheets",
    quantity: 2,
    price: 200,
    status: "Delivered",
    date: "2025-07-22",
  },
  {
    id: 104,
    item: "Glass Panels",
    quantity: 1,
    price: 150,
    status: "Shipped",
    date: "2025-07-23",
  },
];

export default function ShopkeeperOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [search, setSearch] = useState("");

  const cancelOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const filteredOrders = orders.filter((order) =>
    order.item.toLowerCase().includes(search.toLowerCase())
  );

  const statusColors: Record<Order["status"], string> = {
    Pending: "bg-yellow-200 text-yellow-800",
    Confirmed: "bg-blue-200 text-blue-800",
    Shipped: "bg-purple-200 text-purple-800",
    Delivered: "bg-green-200 text-green-800",
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <Input
          placeholder="Search orders by item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <CardTitle className="text-lg">{order.item}</CardTitle>
                <Badge className={`${statusColors[order.status]} w-fit`}>
                  {order.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Quantity: {order.quantity}</p>
                <p>Total: ₹{order.price}</p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
                {order.status === "Pending" && (
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => cancelOrder(order.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Cancel Order
                  </Button>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">No orders found.</p>
        )}
      </div>
    </div>
  );
}
