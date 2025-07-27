"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Vendor" | "Shopkeeper" | "Delivery";
  status: "Active" | "Suspended";
};

const dummyUsers: User[] = [
  {
    id: 1,
    name: "Roshan Rajak",
    email: "roshan@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Anil Kumar",
    email: "anil@vendor.com",
    role: "Vendor",
    status: "Suspended",
  },
  {
    id: 3,
    name: "Ravi Singh",
    email: "ravi@shopkeeper.com",
    role: "Shopkeeper",
    status: "Active",
  },
];

export default function UserPage() {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleToggleStatus = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Suspended" : "Active",
            }
          : user
      )
    );
    toast.success("User status updated.");
    setOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.error("User deleted.");
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">User Management</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <Card
            key={user.id}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => {
              setSelectedUser(user);
              setOpen(true);
            }}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{user.name}</span>
                <Badge
                  variant={
                    user.status === "Active" ? "default" : "destructive"
                  }
                >
                  {user.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>{user.email}</p>
              <p className="capitalize">{user.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedUser && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedUser.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">
                {selectedUser.email}
              </p>
            </DialogHeader>

            <div className="py-2 space-y-2">
              <p className="capitalize">Role: {selectedUser.role}</p>
              <p>
                Status:{" "}
                <Badge
                  variant={
                    selectedUser.status === "Active"
                      ? "default"
                      : "destructive"
                  }
                >
                  {selectedUser.status}
                </Badge>
              </p>
            </div>

            <DialogFooter className="gap-2">
              <Button
                variant="secondary"
                onClick={() => handleToggleStatus(selectedUser.id)}
              >
                {selectedUser.status === "Active" ? "Suspend" : "Activate"}
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDeleteUser(selectedUser.id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
