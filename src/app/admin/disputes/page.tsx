
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

type Dispute = {
  id: number;
  title: string;
  user: string;
  status: "Pending" | "Resolved" | "Rejected";
  description: string;
};

const dummyDisputes: Dispute[] = [
  {
    id: 1,
    title: "Damaged Raw Material",
    user: "Vendor - M.K. Steel",
    status: "Pending",
    description: "The materials delivered on 24th were damaged. Need refund or replacement.",
  },
  {
    id: 2,
    title: "Late Delivery",
    user: "Shopkeeper - ABC Traders",
    status: "Resolved",
    description: "Order was delayed by 5 days. Request compensation.",
  },
];

export default function DisputePage() {
  const [disputes, setDisputes] = useState<Dispute[]>(dummyDisputes);
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null);
  const [open, setOpen] = useState(false);

  const handleAction = (id: number, action: "Resolved" | "Rejected") => {
    setDisputes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: action } : d))
    );
    toast.success(`Dispute ${action}`);
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dispute Management</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {disputes.map((dispute) => (
          <Card key={dispute.id} className="cursor-pointer hover:shadow-lg transition" onClick={() => {
            setSelectedDispute(dispute);
            setOpen(true);
          }}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{dispute.title}</span>
                <Badge
                  variant={
                    dispute.status === "Pending"
                      ? "default"
                      : dispute.status === "Resolved"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {dispute.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="font-medium">{dispute.user}</p>
              <p className="truncate mt-1">{dispute.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detail Dialog */}
      {selectedDispute && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedDispute.title}</DialogTitle>
              <p className="text-sm text-muted-foreground">{selectedDispute.user}</p>
            </DialogHeader>

            <div className="py-2">
              <p className="text-sm">{selectedDispute.description}</p>
              <p className="mt-4">
                <Badge
                  variant={
                    selectedDispute.status === "Pending"
                      ? "default"
                      : selectedDispute.status === "Resolved"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {selectedDispute.status}
                </Badge>
              </p>
            </div>

            {selectedDispute.status === "Pending" && (
              <DialogFooter className="gap-2">
                <Button
                  variant="destructive"
                  onClick={() => handleAction(selectedDispute.id, "Rejected")}
                >
                  Reject
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleAction(selectedDispute.id, "Resolved")}
                >
                  Resolve
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
