
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const stats = [
  {
    label: "Total Users",
    value: 135,
    details: [
      { role: "Vendors", count: 35 },
      { role: "Shopkeepers", count: 80 },
      { role: "Agents", count: 20 },
    ],
  },
  {
    label: "Open Disputes",
    value: 4,
    action: "View Disputes",
  },
  {
    label: "System Health",
    value: "Good",
    status: "green",
  },
];

export default function AdminDashboard() {
  const handleDisputeClick = () => {
    toast.info("Navigating to Disputes Page...");
  };

  return (
    <main className="p-4 sm:p-6 md:p-8 space-y-6">
      <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Users Card */}
        <Card>
          <CardHeader>
            <CardTitle>{stats[0].label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats[0].value}</p>
            <div className="mt-2 space-y-1 text-sm">
              {stats[0].details?.map((detail) => (
                <div key={detail.role} className="flex justify-between">
                  <span>{detail.role}</span>
                  <Badge variant="outline">{detail.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disputes Card */}
        <Card>
          <CardHeader>
            <CardTitle>{stats[1].label}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-3xl font-bold">{stats[1].value}</p>
            <Button onClick={handleDisputeClick}>
              {stats[1].action}
            </Button>
          </CardContent>
        </Card>

        {/* System Health Card */}
        <Card>
          <CardHeader>
            <CardTitle>{stats[2].label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats[2].value}</p>
            <Badge className="bg-green-200 text-green-800 mt-2">
              Healthy
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder for user management */}
      <section className="mt-10 space-y-2">
        <h2 className="text-xl font-semibold">User Management</h2>
        <p className="text-sm text-muted-foreground">
          Future section for managing user roles, suspensions, and activity logs.
        </p>
      </section>
    </main>
  );
}
