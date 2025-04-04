"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function AvailableTeamModal() {
  const [open, setOpen] = useState(false);

  const teams = [
    { name: "🚔 Team Alpha", distance: "2 mins away" },
    { name: "🚨 Team Bravo", distance: "5 mins away" },
    { name: "🛡️ Team Charlie", distance: "7 mins away" },
    { name: "🚓 Team Delta", distance: "10 mins away" },
    { name: "🚒 Team Echo", distance: "12 mins away" },
    { name: "🛡️ Team Foxtrot", distance: "15 mins away" },
    { name: "🚔 Team Golf", distance: "18 mins away" },
    { name: "🚨 Team Hotel", distance: "20 mins away" },
  ];

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        📌 Teams
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[700px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Available Teams</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-[700px] ">
            {teams.map((team, index) => (
              <Card key={index} className="bg-card border-border text-card-foreground shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">{team.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 text-muted-foreground">
                  {team.distance}
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Inform
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
