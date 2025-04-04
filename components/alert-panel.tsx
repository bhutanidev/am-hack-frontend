"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAlertStore from "@/store/store";
import { AvailableTeamModal } from "./available-team-model";
import { useTheme } from "next-themes";

export function AlertPanel() {
  const { alerts } = useAlertStore();
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="w-full p-4 rounded-xl">
      <h2 className="text-lg font-bold mb-2 text-primary">Alerts</h2>
      <div className="space-y-2">
        {alerts.length === 0 && <p className="text-muted-foreground">No Alerts</p>}
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className="border w-full"
            style={{
              backgroundColor:
                theme === "dark"
                  ? "var(--color-warning-dark)"
                  : "var(--color-warning-light)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          >
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{alert.camera}</CardTitle>
              <AvailableTeamModal />
            </CardHeader>
            <CardContent>
              <p className="text-sm">{alert.message}</p>
              <p className="text-xs opacity-80 text-muted-foreground">
                Coordinates: ({alert.xcord}, {alert.ycord})
              </p>
              <p className="text-xs opacity-80 text-muted-foreground">
                Time: {new Date(alert.timestamp).toLocaleTimeString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
