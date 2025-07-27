"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { rahul,raushan ,pulkit, guddu, ashish} from "../../../public/team";

const team = [
  {
    name: "Rahul",
    role: "Full Stack Developer",
    image: rahul,
    bio: "Handles the entire architecture and connects frontend with backend seamlessly.",
  },
  {
    name: "Roshan",
    role: "Frontend Developer",
    image: raushan,
    bio: "Crafts beautiful and functional interfaces using React, Tailwind, and ShadCN.",
  },
  {
    name: "Guddu",
    role: "UI Designer",
    image: guddu,
    bio: "Designs clean and modern interfaces ensuring user-centric experiences.",
  },
  {
    name: "Pulkit",
    role: "Backend Developer",
    image: pulkit,
    bio: "Builds secure and scalable APIs and manages server-side logic.",
  },
  {
    name: "Ashish",
    role: "API Tester",
    image: ashish,
    bio: "Ensures all endpoints are secure, bug-free, and tested for edge cases.",
  },
];

export default function AboutPage() {
  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">About Quick Sarthi</h1>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle>What is Quick Sarthi?</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm space-y-4">
          <p>
            <strong>Quick Sarthi</strong> is a smart Raw Material Sourcing & Delivery System that bridges vendors, shopkeepers, delivery agents, and admins. It streamlines procurement, improves communication, and automates key logistics processes.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <ul className="list-disc list-inside space-y-2">
            <li>Vendor material listings & stock management</li>
            <li>Shopkeeper order placement & real-time tracking</li>
            <li>Dispute handling with admin-level resolutions</li>
            <li>Delivery assignment & confirmation for agents</li>
            <li>Secure login for all user roles</li>
          </ul>
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Meet the Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {team.map((member) => (
              <div key={member.name} className="text-center space-y-2">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-sm font-medium">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>Next.js (App Router)</li>
            <li>Tailwind CSS & ShadCN UI</li>
            <li>REST API integration</li>
            <li>Toast notifications via Sonner</li>
            <li>PostgreSQL / Firebase (optional backends)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
