
"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface StatusItem {
  id: number;
  item: string;
  requester: string;
  status: "Requested" | "In Transit" | "Delivered";
  progress: number;
}

const mockStatusData: StatusItem[] = [
  {
    id: 1,
    item: "Cement Bags",
    requester: "Vendor A",
    status: "Requested",
    progress: 10,
  },
  {
    id: 2,
    item: "Steel Rods",
    requester: "Vendor B",
    status: "In Transit",
    progress: 60,
  },
  {
    id: 3,
    item: "Bricks",
    requester: "Vendor A",
    status: "Delivered",
    progress: 100,
  },
];

const statusColor: Record<StatusItem["status"], string> = {
  Requested: "bg-yellow-200 text-yellow-800",
  "In Transit": "bg-blue-200 text-blue-800",
  Delivered: "bg-green-200 text-green-800",
};

export default function StatusPage() {
  const [statusList] = useState<StatusItem[]>(mockStatusData);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Order Status</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statusList.map((status) => (
          <Card key={status.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg">
                <span>{status.item}</span>
                <Badge className={`${statusColor[status.status]} w-fit`}>
                  {status.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">
                <strong>Vendor:</strong> {status.requester}
              </p>
              <Progress value={status.progress} className="h-2" />
              <p className="text-xs text-right mt-1">{status.progress}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
