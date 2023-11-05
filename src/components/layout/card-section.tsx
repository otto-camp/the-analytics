import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Activity, Eye, Timer, User } from "lucide-react";

export default function CardSection({ users }: { users: number }) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Visitors</CardTitle>
          <User />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{users}</div>
          <p className="text-xs text-muted-foreground">changes text...</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Views</CardTitle>
          <Eye />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NaN</div>
          <p className="text-xs text-muted-foreground">changes text...</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Average Time</CardTitle>
          <Timer />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NaN</div>
          <p className="text-xs text-muted-foreground">changes text...</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Bounce Rate</CardTitle>
          <Activity />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NaN</div>
          <p className="text-xs text-muted-foreground">changes text...</p>
        </CardContent>
      </Card>
    </section>
  );
}
