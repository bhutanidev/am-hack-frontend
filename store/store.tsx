import { create } from "zustand";

export interface Alert {
    id: number;
    camera: string;
    message: string;
    timestamp: string;
    xcord: number;
    ycord: number;
}

interface AlertState {
    alerts: Alert[];
    addAlert: (alert: Alert) => void;
    removeAlert: (id: number) => void;
}

const useAlertStore = create<AlertState>()((set) => ({
    alerts: [
        {
            id: 1,
            camera: "Camera 1",
            message: "Motion detected",
            timestamp: new Date().toISOString(),
            xcord: 34,
            ycord: 78,
        },
        {
            id: 2,
            camera: "Camera 2",
            message: "Unauthorized access attempt",
            timestamp: new Date().toISOString(),
            xcord: 56,
            ycord: 23,
        }
    ],
    addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
    removeAlert: (id) => set((state) => ({ alerts: state.alerts.filter(alert => alert.id !== id) })),
}));

export default useAlertStore;
