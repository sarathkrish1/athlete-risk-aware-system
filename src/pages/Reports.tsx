
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from 'lucide-react';
import PerformanceReports from '@/components/reports/PerformanceReports';
import HealthReports from '@/components/reports/HealthReports';
import TrendAnalysis from '@/components/reports/TrendAnalysis';

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
          <PerformanceReports />
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <HealthReports />
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <TrendAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
