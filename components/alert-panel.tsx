"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAlertStore from "@/store/store";

export function AlertPanel() {
  const { alerts } = useAlertStore();

  return (
    <div className="w-full p-4 rounded-xl text-white">
      <h2 className="text-lg font-bold mb-2">Alerts</h2>
      <div className="space-y-2">
        {alerts.length === 0 && "No Alerts"}
        {alerts.map((alert) => (
          <Card key={alert.id} className="bg-red-500 text-white border-red-600 w-full">
            <CardHeader className="">
              <CardTitle>{alert.camera}</CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-sm">{alert.message}</p>
              <p className="text-xs opacity-80">Coordinates: ({alert.xcord}, {alert.ycord})</p>
              <p className="text-xs opacity-80">Time: {new Date(alert.timestamp).toLocaleTimeString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
