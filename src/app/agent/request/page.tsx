"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type RequestStatus = "Pending" | "Approved" | "Rejected";

interface MaterialRequest {
  id: number;
  material: string;
  quantity: number;
  requester: string;
  status: RequestStatus;
}

const initialRequests: MaterialRequest[] = [
  {
    id: 1,
    material: "Steel Rods",
    quantity: 120,
    requester: "Shopkeeper A",
    status: "Pending",
  },
  {
    id: 2,
    material: "Cement Bags",
    quantity: 75,
    requester: "Shopkeeper B",
    status: "Approved",
  },
  {
    id: 3,
    material: "Bricks",
    quantity: 1000,
    requester: "Shopkeeper C",
    status: "Pending",
  },
];

const statusColors: Record<RequestStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

export default function RequestsPage() {
  const [requests, setRequests] = useState<MaterialRequest[]>(initialRequests);

  const updateStatus = (id: number, newStatus: RequestStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
    toast.success(`Request ${newStatus}`);
  };

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Material Requests</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <Card key={req.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg">{req.material}</CardTitle>
              <div className="mt-1">
                <Badge className={`${statusColors[req.status]} rounded-md`}>
                  {req.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="text-sm space-y-1">
              <p>
                <strong>Quantity:</strong> {req.quantity}
              </p>
              <p>
                <strong>Requested By:</strong> {req.requester}
              </p>
            </CardContent>

            {req.status === "Pending" && (
              <CardFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                <Button
                  onClick={() => updateStatus(req.id, "Approved")}
                  className="w-full sm:w-1/2"
                >
                  Approve
                </Button>
                <Button
                  onClick={() => updateStatus(req.id, "Rejected")}
                  variant="destructive"
                  className="w-full sm:w-1/2"
                >
                  Reject
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}
