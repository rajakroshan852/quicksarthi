
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, PlusCircle, MinusCircle } from "lucide-react";

interface Material {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const mockMaterials: Material[] = [
  { id: 1, name: "Steel Rods", price: 120, stock: 100 },
  { id: 2, name: "Copper Wire", price: 75, stock: 200 },
  { id: 3, name: "Plastic Sheets", price: 40, stock: 150 },
];

export default function ShopkeeperPage() {
  const [materials] = useState<Material[]>(mockMaterials);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});

  const handleAdd = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id]--;
      else delete updated[id];
      return updated;
    });
  };

  const filteredMaterials = materials.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const material = materials.find((m) => m.id === Number(id));
    return {
      ...material!,
      quantity: qty,
      subtotal: qty * material!.price,
    };
  });

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <main className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">Browse Materials</h1>
        <Input
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-1/3"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <Card key={material.id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{material.name}</h2>
              <p className="text-muted-foreground">₹{material.price} per unit</p>
              <p className="text-sm text-gray-500">Stock: {material.stock}</p>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAdd(material.id)}
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add to Cart
                </Button>
                {cart[material.id] && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleRemove(material.id)}
                  >
                    <MinusCircle className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Cart Summary
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.subtotal}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-base pt-2 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Button className="w-full mt-2">Place Order</Button>
          </div>
        )}
      </div>
    </main>
  );
}
