import { Button } from "@/components/ui/button";
import { Rocket, Users, Truck, ShoppingCart } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground" >
      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:px-20 bg-gradient-to-r from-slate-900 to-gray-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Welcome to <span className="text-green-400">QuickSarthi</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          A powerful platform connecting vendors, shopkeepers, delivery agents, and admins to streamline raw material sourcing.
        </p>
        <Button className="text-lg px-6 py-4">Get Started</Button>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-16 bg-background">
        <h2 className="text-3xl font-bold text-center mb-4">About QuickSarthi</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          QuickSarthi is an all-in-one procurement and delivery system that empowers local businesses to manage raw material logistics efficiently.
          With role-specific dashboards, real-time tracking, and order management — it's the future of sourcing.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-16 bg-muted/10">
        <h2 className="text-3xl font-bold text-center mb-10">Who is it for?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vendor */}
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold">Vendors</h3>
            </div>
            <p className="text-muted-foreground">
              List raw materials, update stock, and manage orders efficiently. Track demand and stay connected to buyers in real-time.
            </p>
          </div>

          {/* Shopkeeper */}
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <ShoppingCart className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Shopkeepers</h3>
            </div>
            <p className="text-muted-foreground">
              Browse, compare, and order materials. Track delivery and manage your purchases in one place.
            </p>
          </div>

          {/* Delivery Agent */}
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <Truck className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold">Delivery Agents</h3>
            </div>
            <p className="text-muted-foreground">
              Accept delivery requests, update order status, and complete trips with ease. Stay on top of logistics.
            </p>
          </div>

          {/* Admin */}
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold">Admins</h3>
            </div>
            <p className="text-muted-foreground">
              Monitor system activity, resolve disputes, and manage platform roles. Keep everything running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-muted-foreground py-6 text-center border-t">
        <p>&copy; 2025 QuickSarthi. All rights reserved.</p>
      </footer>
    </main>
  );
}
