import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Boxes, ClipboardList } from "lucide-react";
import { PropsWithChildren } from "react";

export default function VendorLayout({ children }: PropsWithChildren) {
  const navLinks = [
    { name: "Dashboard", href: "/vendor", icon: Home },
    { name: "Materials", href: "/vendor/materials", icon: Boxes },
    { name: "Orders", href: "/vendor/orders", icon: ClipboardList },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-muted bg-card p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-green-600">QuickSarthi</h2>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted transition text-sm font-medium"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Top Nav (Optional) */}
      <div className="md:hidden fixed top-0 left-0 w-full p-4 bg-card shadow z-10">
        <div className="text-lg font-semibold text-green-600">QuickSarthi Vendor</div>
      </div>

      {/* Page Content */}
      <main className="flex-1 p-6 md:p-10 mt-14 md:mt-0 w-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
