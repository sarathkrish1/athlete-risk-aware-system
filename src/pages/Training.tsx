
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from 'lucide-react';

const Training = () => {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Training Management</h1>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">April 15, 2025</span>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="schedule">Training Schedule</TabsTrigger>
          <TabsTrigger value="plans">Training Plans</TabsTrigger>
          <TabsTrigger value="history">Training History</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Training Schedule</CardTitle>
              <CardDescription>
                Manage and view athlete training schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The training schedule feature is coming soon. This will allow you to view, create, and manage training schedules for all athletes.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Plans</CardTitle>
              <CardDescription>
                Create and manage personalized training plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The training plans feature is coming soon. This will allow you to create customized training plans based on athlete profiles and risk assessments.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training History</CardTitle>
              <CardDescription>
                View past training sessions and performance data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The training history feature is coming soon. This will allow you to track and analyze past training sessions and performance metrics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Training;
