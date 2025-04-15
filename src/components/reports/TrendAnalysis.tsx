
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { Download, Search, TrendingUp, Filter, Calendar, Save } from 'lucide-react';

// Mock correlation data (injury risk vs training load)
const correlationData = [
  { trainingLoad: 65, injuryRisk: 12, z: 10 },
  { trainingLoad: 70, injuryRisk: 15, z: 12 },
  { trainingLoad: 80, injuryRisk: 20, z: 15 },
  { trainingLoad: 85, injuryRisk: 25, z: 18 },
  { trainingLoad: 90, injuryRisk: 35, z: 20 },
  { trainingLoad: 95, injuryRisk: 45, z: 22 },
  { trainingLoad: 100, injuryRisk: 55, z: 24 },
  { trainingLoad: 110, injuryRisk: 80, z: 28 },
];

// Mock performance data over time
const performanceTrendData = [
  { month: 'Jan', performance: 72, trainingLoad: 75, injuryRisk: 20 },
  { month: 'Feb', performance: 75, trainingLoad: 78, injuryRisk: 22 },
  { month: 'Mar', performance: 80, trainingLoad: 82, injuryRisk: 25 },
  { month: 'Apr', performance: 85, trainingLoad: 85, injuryRisk: 30 },
  { month: 'May', performance: 90, trainingLoad: 88, injuryRisk: 35 },
  { month: 'Jun', performance: 87, trainingLoad: 92, injuryRisk: 45 },
  { month: 'Jul', performance: 83, trainingLoad: 95, injuryRisk: 55 },
  { month: 'Aug', performance: 80, trainingLoad: 90, injuryRisk: 50 },
  { month: 'Sep', performance: 85, trainingLoad: 85, injuryRisk: 40 },
  { month: 'Oct', performance: 90, trainingLoad: 88, injuryRisk: 35 },
  { month: 'Nov', performance: 92, trainingLoad: 90, injuryRisk: 38 },
  { month: 'Dec', performance: 88, trainingLoad: 85, injuryRisk: 32 },
];

// Mock seasonal pattern data
const seasonalPatternData = [
  { season: 'Pre-Season', injuries: 15, trainingLoad: 90, performance: 82 },
  { season: 'Early Season', injuries: 25, trainingLoad: 95, performance: 85 },
  { season: 'Mid Season', injuries: 45, trainingLoad: 100, performance: 88 },
  { season: 'Late Season', injuries: 35, trainingLoad: 95, performance: 83 },
  { season: 'Post Season', injuries: 20, trainingLoad: 85, performance: 80 },
];

const TrendAnalysis = () => {
  const [timeframe, setTimeframe] = useState("year");
  const [analysisType, setAnalysisType] = useState("correlation");
  
  const handleExport = (format: string) => {
    console.log(`Exporting trend analysis as ${format}`);
    // In a real app, this would trigger a download of the report in the specified format
  };
  
  const handleSaveAnalysis = () => {
    console.log(`Saving the current analysis configuration`);
    // In a real app, this would save the current analysis settings
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <CardTitle>Trend Analysis</CardTitle>
            <CardDescription>Identify patterns and correlations in athlete data</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="sixMonths">Last 6 Months</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="twoYears">Last 2 Years</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => handleExport("pdf")}>
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
            <Button variant="outline" onClick={handleSaveAnalysis}>
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={analysisType} onValueChange={setAnalysisType} className="space-y-4">
          <TabsList>
            <TabsTrigger value="correlation">Correlation Analysis</TabsTrigger>
            <TabsTrigger value="longTerm">Long-Term Trends</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal Patterns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="correlation" className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Training Load vs. Injury Risk</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter Variables
                  </Button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="trainingLoad" 
                      type="number" 
                      name="Training Load" 
                      label={{ value: 'Training Load (AU)', position: 'bottom' }}
                    />
                    <YAxis 
                      dataKey="injuryRisk" 
                      type="number" 
                      name="Injury Risk" 
                      label={{ value: 'Injury Risk (%)', angle: -90, position: 'left' }}
                    />
                    <ZAxis dataKey="z" range={[60, 400]} name="score" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Training Load vs. Injury Risk" data={correlationData} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t pt-4">
                <h4 className="font-medium text-foreground">Analysis Insights:</h4>
                <p>Strong positive correlation (r=0.92) between training load and injury risk.</p>
                <p>Risk increases significantly when training load exceeds 90 arbitrary units.</p>
                <p>Recommended action: Monitor athletes with consistently high training loads (&gt;85 AU) for signs of fatigue.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="longTerm" className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Performance & Risk Trends Over Time</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Custom Range
                  </Button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="performance" name="Performance Score" stroke="#22c55e" activeDot={{ r: 8 }} />
                    <Line yAxisId="left" type="monotone" dataKey="trainingLoad" name="Training Load" stroke="#3b82f6" />
                    <Line yAxisId="right" type="monotone" dataKey="injuryRisk" name="Injury Risk" stroke="#ef4444" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t pt-4">
                <h4 className="font-medium text-foreground">Long-Term Pattern Analysis:</h4>
                <p>Performance typically peaks mid-season (May-June) and again in late fall (October-November).</p>
                <p>Injury risk closely follows training load with approximately 1-month lag.</p>
                <p>Performance dips follow periods of elevated injury risk by approximately 2 months.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="seasonal" className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Seasonal Pattern Analysis</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Compare Seasons
                  </Button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seasonalPatternData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="season" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="injuries" name="Injuries" fill="#ef4444" />
                    <Bar dataKey="trainingLoad" name="Training Load" fill="#3b82f6" />
                    <Bar dataKey="performance" name="Performance" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t pt-4">
                <h4 className="font-medium text-foreground">Seasonal Insights:</h4>
                <p>Mid-season shows highest injury rates, correlating with peak training loads.</p>
                <p>Performance peaks during Early to Mid season despite increasing injury rates.</p>
                <p>Recommended action: Implement more recovery protocols during Mid-Season to mitigate injury risk while maintaining performance.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-4 border-t">
          <h3 className="font-medium mb-3">Saved Analyses</h3>
          <div className="border rounded-lg divide-y">
            <div className="p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Training Load Impact Analysis</h4>
                <p className="text-sm text-muted-foreground">Created on March 15, 2025</p>
              </div>
              <Button variant="outline" size="sm">Load</Button>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Seasonal Performance Patterns</h4>
                <p className="text-sm text-muted-foreground">Created on April 2, 2025</p>
              </div>
              <Button variant="outline" size="sm">Load</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendAnalysis;
