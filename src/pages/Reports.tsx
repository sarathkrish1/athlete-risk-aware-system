
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from 'lucide-react';

const Reports = () => {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">April 15, 2025</span>
        </div>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="performance">Performance Reports</TabsTrigger>
          <TabsTrigger value="health">Health Reports</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Reports</CardTitle>
              <CardDescription>
                Comprehensive athlete performance analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The performance reports feature is coming soon. This will provide detailed analytics on individual and team performance metrics over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Health Reports</CardTitle>
              <CardDescription>
                Health and wellness tracking reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The health reports feature is coming soon. This will allow you to generate detailed reports on athlete health metrics, recovery status, and injury trends.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trend Analysis</CardTitle>
              <CardDescription>
                Long-term data analysis and pattern recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The trend analysis feature is coming soon. This will provide insights into performance patterns, risk factors, and predictive analytics for injury prevention.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
