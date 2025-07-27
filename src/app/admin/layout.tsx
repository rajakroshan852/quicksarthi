
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOut, Users, ShieldCheck, LayoutDashboard, Server } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: "Users", href: "/admin/users", icon: <Users className="h-4 w-4" /> },
  { label: "Disputes", href: "/admin/disputes", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "System Logs", href: "/admin/system-logs", icon: <Server className="h-4 w-4" /> },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col border-r bg-muted p-4 space-y-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted-foreground/10 text-sm font-medium transition-all"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="mt-auto w-full justify-start text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Navbar (for mobile) */}
        <header className="md:hidden p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
          <h1 className="text-lg font-semibold">Admin</h1>
          <Button variant="ghost" size="sm" className="text-red-600">
            <LogOut className="h-4 w-4" />
          </Button>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
