import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Optional helper from shadcn
import { Home, ShoppingCart, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-6">
        <h2 className="text-xl font-bold">QuickSarthi</h2>
        <nav className="flex flex-col space-y-2">
          <SidebarLink
            href="/agent"
            label="Dashboard"
            icon={<Home className="w-4 h-4" />}
          />
          <SidebarLink
            href="/agent/materials"
            label="Materials"
            icon={<ShoppingCart className="w-4 h-4" />}
          />
          <SidebarLink
            href="/agent/request"
            label="Request"
            icon={<Truck className="w-4 h-4" />}
          />
          <SidebarLink
            href="/agent/profile"
            label="Profile"
            icon={<User className="w-4 h-4" />}
          />
          <SidebarLink
            href="/agent/status"
            label="Status"
            icon={<User className="w-4 h-4" />}
          />
        </nav>
        <div className="mt-auto">
          <Button
            variant="outline"
            className="w-full text-white border-white hover:bg-white/10 bg-red-600"
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}

function SidebarLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 rounded-md hover:bg-gray-800 transition",
        "text-sm font-medium"
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Link>
  );
}
