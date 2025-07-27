
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

type LogType = "info" | "warning" | "error";

type SystemLog = {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  type: LogType;
};

const dummyLogs: SystemLog[] = [
  {
    id: 1,
    timestamp: "2025-07-27 10:45:23",
    user: "Admin - Roshan",
    action: "Approved dispute ID #123",
    type: "info",
  },
  {
    id: 2,
    timestamp: "2025-07-27 11:02:10",
    user: "Vendor - SteelCo",
    action: "Created a new raw material listing",
    type: "info",
  },
  {
    id: 3,
    timestamp: "2025-07-27 12:15:05",
    user: "Admin - Roshan",
    action: "Suspended user ID #87",
    type: "warning",
  },
  {
    id: 4,
    timestamp: "2025-07-27 13:00:00",
    user: "System",
    action: "Database connection failed",
    type: "error",
  },
];

export default function SystemLogsPage() {
  const [logs] = useState<SystemLog[]>(dummyLogs);
  const [filter, setFilter] = useState<"all" | LogType>("all");

  const filteredLogs =
    filter === "all" ? logs : logs.filter((log) => log.type === filter);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">System Logs</h1>

      <Tabs defaultValue="all" onValueChange={(val) => setFilter(val as any)}>
        <TabsList className="gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="warning">Warning</TabsTrigger>
          <TabsTrigger value="error">Error</TabsTrigger>
        </TabsList>

        <TabsContent value={filter}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Log Entries</CardTitle>
            </CardHeader>
            <CardContent className="p-0 max-h-[500px] overflow-hidden">
              <ScrollArea className="h-[500px] px-4 py-2">
                <ul className="space-y-4">
                  {filteredLogs.map((log) => (
                    <li key={log.id} className="border-b pb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {log.timestamp}
                        </span>
                        <Badge
                          variant={
                            log.type === "info"
                              ? "secondary"
                              : log.type === "warning"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {log.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm mt-1 text-muted-foreground">
                        {log.user}
                      </div>
                      <div className="text-sm mt-1">{log.action}</div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
