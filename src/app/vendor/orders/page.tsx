"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, CheckCircle2, Clock3 } from "lucide-react";

interface Order {
  id: string;
  material: string;
  quantity: number;
  buyer: string;
  status: "Pending" | "Dispatched" | "Delivered";
}

const initialOrders: Order[] = [
  { id: "ORD001", material: "Steel Rods", quantity: 50, buyer: "Alpha Traders", status: "Pending" },
  { id: "ORD002", material: "Copper Wires", quantity: 100, buyer: "Beta Supplies", status: "Dispatched" },
  { id: "ORD003", material: "Plastic Sheets", quantity: 200, buyer: "Gamma Plastics", status: "Delivered" },
];

export default function VendorOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const renderStatus = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case "Dispatched":
        return <Badge variant="outline" className="text-blue-600 border-blue-600">Dispatched</Badge>;
      case "Delivered":
        return <Badge variant="outline" className="text-green-600 border-green-600">Delivered</Badge>;
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Orders</h1>

      <Card>
        <CardContent className="p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.material}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.buyer}</TableCell>
                  <TableCell>{renderStatus(order.status)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    {order.status === "Pending" && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => updateStatus(order.id, "Dispatched")}
                      >
                        <Truck className="w-4 h-4 mr-1" /> Dispatch
                      </Button>
                    )}
                    {order.status === "Dispatched" && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => updateStatus(order.id, "Delivered")}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-1" /> Deliver
                      </Button>
                    )}
                    {order.status === "Delivered" && (
                      <Button variant="ghost" size="sm" disabled>
                        <Clock3 className="w-4 h-4 mr-1" /> Completed
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
