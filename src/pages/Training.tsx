
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from 'lucide-react';
import TrainingSchedule from '@/components/training/TrainingSchedule';
import TrainingPlans from '@/components/training/TrainingPlans';
import TrainingHistory from '@/components/training/TrainingHistory';

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
          <TrainingSchedule />
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <TrainingPlans />
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <TrainingHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Training;
