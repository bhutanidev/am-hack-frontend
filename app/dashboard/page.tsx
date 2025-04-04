"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ViewDropdown } from "@/components/camera-grid";
import { AlertPanel } from "@/components/alert-panel";
import { ModeToggle } from "@/components/toggle-button";
import { CameraGrid } from "@/components/camera-grid";

export default function CameraDashboard() {
  const [view, setView] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 0.7-second loading time
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        {/* Loading Spinner */}
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <SidebarInset className="flex flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-6" />
            </div>
            <ViewDropdown setView={setView} />
            <ModeToggle />
          </header>

          <div className="flex flex-1 gap-4 p-4">
            <div className="flex-1 bg-muted/50 rounded-xl p-4">
              <CameraGrid view={view} />
            </div>
            <div className="w-1/4 bg-muted/50 rounded-xl p-4">
              <AlertPanel />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
