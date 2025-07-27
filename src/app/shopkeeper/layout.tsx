
import Link from "next/link";
import { ReactNode } from "react";
import { Menu, Package, ShoppingCart, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: "Dashboard", href: "/shopkeeper", icon: Package },
  { name: "Browser", href: "/shopkeeper/browser", icon: ShoppingCart },
  { name: "Orders", href: "/shopkeeper/orders", icon: Truck },
  { name: "Profile", href: "/shopkeeper/profile", icon: User },
];

export default function VendorLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-muted hidden md:flex flex-col p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">QuickSarthi</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-4 border-t">
          <Button variant="ghost" className="w-full text-red-500">Logout</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="md:hidden p-4 flex justify-between items-center border-b shadow-sm">
          <h1 className="text-lg font-bold">QuickSarthi</h1>
          <Menu className="w-6 h-6" />
        </header>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1">{children}</div>
      </main>
    </div>
  );
}
