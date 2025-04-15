
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse } from 'lucide-react';

const Health = () => {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Health Monitoring</h1>
        <div className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">April 15, 2025</span>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Health Overview</TabsTrigger>
          <TabsTrigger value="biometrics">Biometrics</TabsTrigger>
          <TabsTrigger value="injuries">Injury Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Athlete Health Dashboard</CardTitle>
              <CardDescription>
                Overall health status of all athletes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The health overview feature is coming soon. This dashboard will display aggregated health metrics across your athlete pool.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biometrics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biometric Tracking</CardTitle>
              <CardDescription>
                Monitor vital health indicators over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The biometrics feature is coming soon. This will allow you to track heart rate, blood pressure, sleep quality, and other key health metrics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="injuries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Injury Management</CardTitle>
              <CardDescription>
                Track and manage athlete injuries and recovery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The injury management feature is coming soon. This will allow you to log injuries, track recovery progress, and plan safe return-to-play protocols.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Health;
