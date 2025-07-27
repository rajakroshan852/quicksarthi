
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type DeliveryStatus = "Pending" | "Picked Up" | "On The Way" | "Delivered";

interface Delivery {
  id: number;
  orderId: string;
  customer: string;
  address: string;
  item: string;
  status: DeliveryStatus;
}

const initialDeliveries: Delivery[] = [
  {
    id: 1,
    orderId: "ORD123",
    customer: "Roshan Rajak",
    address: "Sector 5, Ranchi",
    item: "Iron Rods",
    status: "Pending",
  },
  {
    id: 2,
    orderId: "ORD124",
    customer: "Sana Shaikh",
    address: "Main Road, Patna",
    item: "Plastic Sheets",
    status: "Picked Up",
  },
  {
    id: 3,
    orderId: "ORD125",
    customer: "Rahul Kumar",
    address: "Station Rd, Bokaro",
    item: "Copper Wires",
    status: "On The Way",
  },
];

const getNextStatus = (status: DeliveryStatus): DeliveryStatus | null => {
  switch (status) {
    case "Pending":
      return "Picked Up";
    case "Picked Up":
      return "On The Way";
    case "On The Way":
      return "Delivered";
    default:
      return null;
  }
};

export default function AgentPage() {
  const [deliveries, setDeliveries] = useState<Delivery[]>(initialDeliveries);

  const updateStatus = (id: number) => {
    setDeliveries((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: getNextStatus(d.status) ?? d.status }
          : d
      )
    );
    toast.success("Status updated successfully");
  };

  const statusColors: Record<DeliveryStatus, string> = {
    Pending: "bg-yellow-200 text-yellow-800",
    "Picked Up": "bg-blue-200 text-blue-800",
    "On The Way": "bg-purple-200 text-purple-800",
    Delivered: "bg-green-200 text-green-800",
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Delivery Requests</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deliveries.map((delivery) => (
          <Card key={delivery.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                {delivery.item} ({delivery.orderId})
              </CardTitle>
              <Badge className={`${statusColors[delivery.status]} w-fit`}>
                {delivery.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <strong>Customer:</strong> {delivery.customer}
              </p>
              <p className="text-sm">
                <strong>Address:</strong> {delivery.address}
              </p>
              {delivery.status !== "Delivered" && (
                <Button
                  onClick={() => updateStatus(delivery.id)}
                  className="w-full mt-2"
                >
                  {getNextStatus(delivery.status)
                    ? `Mark as ${getNextStatus(delivery.status)}`
                    : "Completed"}
                </Button>
              )}
              {delivery.status === "Delivered" && (
                <p className="text-green-600 font-semibold text-center">✅ Delivered</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
