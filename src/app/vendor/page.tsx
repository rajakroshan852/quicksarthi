import { Card, CardContent } from "@/components/ui/card";
import { PackageSearch, ShoppingCart, Boxes, CheckCircle } from "lucide-react";

export default function VendorDashboard() {
  const stats = [
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      label: "Total Materials",
      value: "125",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      label: "Orders Received",
      value: "78",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      label: "Dispatched",
      value: "65",
    },
    {
      icon: <PackageSearch className="w-6 h-6 text-primary" />,
      label: "Pending Orders",
      value: "13",
    },
  ];

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Vendor Dashboard</h1>

      {/* Stats Grid */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center justify-between py-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <h2 className="text-xl font-semibold">{stat.value}</h2>
              </div>
              {stat.icon}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Placeholder for Charts/Overview */}
      <section className="mt-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-muted-foreground text-sm">
              Charts and analytics will be displayed here.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
