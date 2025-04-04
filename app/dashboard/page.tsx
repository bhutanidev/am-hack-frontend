"use client"
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CameraGrid, ViewDropdown } from "@/components/camera-grid";
import { useState } from "react";
import { AlertPanel } from "@/components/alert-panel";
import useAlertStore from "@/store/store";
import { log } from "console";

export default function CameraDashboard() {
  const [view, setView] = useState(4);
//   const store = useAlertStore()
//   console.log(store);
  
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
              <Separator
                orientation="vertical"
                className="h-6"
              />
            </div>
            {/* Dropdown Button for Camera Views */}
            <ViewDropdown setView = {setView}/>
          </header>

          <div className="flex flex-1 gap-4 p-4">
            {/* Camera Grid */}
            <div className="flex-1 bg-muted/50 rounded-xl p-4">
                <CameraGrid view={view} />
            </div>
            
            {/* Alerts Panel */}
            <div className="w-1/4 bg-muted/50 rounded-xl p-4">
                <AlertPanel/>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
