import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";

export function ViewDropdown({ setView }:{setView:Dispatch<SetStateAction<number>> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setView(1)}>1 Camera</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setView(4)}>4 Cameras</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setView(16)}>16 Cameras</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function CameraGrid({ view }:{ view:number }) {
  const dummyCameras = Array.from({ length: view }, (_, i) => `Camera ${i + 1}`);
  
  return (
    <div className="grid gap-4 p-4 rounded-xl bg-muted/50" style={{ gridTemplateColumns: `repeat(${Math.sqrt(view)}, 1fr)` }}>
      {dummyCameras.map((camera, index) => (
        <div key={index} className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
          {camera}
        </div>
      ))}
    </div>
  );
}
