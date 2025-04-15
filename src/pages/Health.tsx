
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, Activity, AlertTriangle } from 'lucide-react';
import { HealthMetricsChart } from '@/components/health/HealthMetricsChart';
import { InjuryTracker } from '@/components/health/InjuryTracker';
import { BiometricsList } from '@/components/health/BiometricsList';

const Health = () => {
  const [selectedAthlete, setSelectedAthlete] = useState("all");

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
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-green-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Healthy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-bold">24</span>
                      <Activity className="h-10 w-10 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Athletes with no current health concerns</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">At Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-bold">8</span>
                      <AlertTriangle className="h-10 w-10 text-yellow-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Athletes with elevated risk factors</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Injured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-bold">3</span>
                      <HeartPulse className="h-10 w-10 text-red-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Athletes currently recovering from injuries</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <HealthMetricsChart />
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
              <BiometricsList />
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
              <InjuryTracker />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Health;
