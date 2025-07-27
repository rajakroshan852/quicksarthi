"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import materials_data from "./materials"; // Adjust path as needed

import type { StaticImageData } from "next/image";

type Product = {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: number;
  quantity: number;
  vendor: string;
  rating?: number;
  review?: string;
};

// Format "rawFruits" => "Raw Fruits"
const formatCategoryName = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

export default function AllProductsPage() {
  const [data] = useState(materials_data);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">All Products</h1>

      {data.map((categoryObj, index) => {
        const categoryKey = Object.keys(categoryObj)[0];
        const products = categoryObj[categoryKey as keyof typeof categoryObj] as Product[];

        return (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {formatCategoryName(categoryKey)}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-xl transition rounded-2xl"
                >
                  <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-base truncate">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Vendor: {product.vendor}
                    </p>
                  </CardHeader>

                  <CardContent className="text-sm flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-primary">
                        ₹{product.price}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {product.quantity}
                      </p>
                    </div>
                    <Badge variant="secondary">In Stock</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
