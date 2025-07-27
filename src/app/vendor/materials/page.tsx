'use client';

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";

// ✅ Type definitions
type Material = {
  id: number;
  name: string;
  price: number;
  quantity: string;
  stock: number;
};

type FormState = {
  name: string;
  price: string;
  quantity: string;
  stock: string;
};

export default function MaterialPage() {
  const [materials, setMaterials] = useState<Material[]>([
    { id: 1, name: "Cement", price: 500, quantity: "50kg", stock: 100 },
    { id: 2, name: "Bricks", price: 5, quantity: "1 piece", stock: 1000 },
    { id: 3, name: "Steel Rod", price: 300, quantity: "1 unit", stock: 200 },
  ]);

  const [form, setForm] = useState<FormState>({ name: "", price: "", quantity: "", stock: "" });
  const [editId, setEditId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (!form.name || !form.price || !form.quantity || !form.stock) return;

    const newData: Material = {
      id: editId !== null ? editId : materials.length + 1,
      name: form.name,
      price: parseFloat(form.price),
      quantity: form.quantity,
      stock: parseInt(form.stock, 10),
    };

    if (editId !== null) {
      setMaterials((prev) =>
        prev.map((m) => (m.id === editId ? newData : m))
      );
    } else {
      setMaterials([...materials, newData]);
    }

    // Reset form
    setForm({ name: "", price: "", quantity: "", stock: "" });
    setEditId(null);
    setOpen(false);
  };

  const handleEdit = (material: Material) => {
    setForm({
      name: material.name,
      price: material.price.toString(),
      quantity: material.quantity,
      stock: material.stock.toString(),
    });
    setEditId(material.id);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    setMaterials(materials.filter((m) => m.id !== id));
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Materials</h1>
          <p className="text-muted-foreground">Manage your listed raw materials.</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex gap-2">
              <PlusCircle size={18} />
              Add Material
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editId !== null ? "Edit" : "Add"} Material</DialogTitle>
              <DialogDescription>
                {editId !== null
                  ? "Update material details below."
                  : "Fill in the form to add a new material."}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label>Name</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label>Price (₹)</Label>
                <Input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label>Quantity (e.g. 1kg)</Label>
                <Input
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label>Stock</Label>
                <Input
                  type="number"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
            </div>

            <Button onClick={handleSave} className="w-full">
              {editId !== null ? "Update" : "Save"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materials.map((mat, index) => (
              <TableRow key={mat.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{mat.name}</TableCell>
                <TableCell>₹{mat.price}</TableCell>
                <TableCell>{mat.quantity}</TableCell>
                <TableCell>{mat.stock}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(mat)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(mat.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
