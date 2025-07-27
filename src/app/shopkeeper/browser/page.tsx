
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";

interface Material {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const mockMaterials: Material[] = [
  { id: 1, name: "Iron Sheets", description: "High quality iron.", price: 100, stock: 40 },
  { id: 2, name: "Aluminium Rod", description: "Lightweight, durable rods.", price: 60, stock: 25 },
  { id: 3, name: "Plastic Pipes", description: "Long-lasting pipes.", price: 30, stock: 100 },
  { id: 4, name: "Glass Panels", description: "Clear and strong.", price: 150, stock: 15 },
];

export default function BrowserPage() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});

  const filteredMaterials = mockMaterials.filter((material) =>
    material.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id]--;
      else delete updated[id];
      return updated;
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = mockMaterials.find((m) => m.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Browse Materials</h1>
        <Input
          placeholder="Search materials..."
          className="w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Material Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <Card key={material.id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{material.name}</h2>
              <p className="text-sm text-muted-foreground">{material.description}</p>
              <p className="text-sm">Price: ₹{material.price}</p>
              <p className="text-xs text-gray-500">In Stock: {material.stock}</p>

              <div className="flex items-center gap-2 mt-2">
                <Button size="sm" onClick={() => addToCart(material.id)}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
                {cart[material.id] && (
                  <Button size="sm" variant="destructive" onClick={() => removeFromCart(material.id)}>
                    <Minus className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="border-t pt-4">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Cart Summary
        </h2>
        {Object.keys(cart).length === 0 ? (
          <p className="text-muted-foreground text-sm">No items in cart.</p>
        ) : (
          <div className="space-y-2">
            {Object.entries(cart).map(([id, qty]) => {
              const item = mockMaterials.find((m) => m.id === Number(id));
              return (
                <div key={id} className="flex justify-between text-sm">
                  <span>{item?.name} × {qty}</span>
                  <span>₹{item!.price * qty}</span>
                </div>
              );
            })}
            <div className="flex justify-between font-semibold pt-2 border-t text-base">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Button className="w-full mt-2">Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
