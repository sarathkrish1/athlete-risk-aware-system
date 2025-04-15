
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Download, Calendar, File, HeartPulse, BarChart as BarChartIcon, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock health metrics data
const healthMetricsData = [
  { week: 'Week 1', heartRate: 72, bodyFat: 18, weight: 80, sleepQuality: 85 },
  { week: 'Week 2', heartRate: 70, bodyFat: 17.8, weight: 79.5, sleepQuality: 82 },
  { week: 'Week 3', heartRate: 71, bodyFat: 17.5, weight: 79, sleepQuality: 88 },
  { week: 'Week 4', heartRate: 69, bodyFat: 17.2, weight: 78.8, sleepQuality: 90 },
  { week: 'Week 5', heartRate: 68, bodyFat: 17, weight: 78.5, sleepQuality: 87 },
  { week: 'Week 6', heartRate: 67, bodyFat: 16.8, weight: 78, sleepQuality: 89 },
];

// Mock injury data
const injuryDistributionData = [
  { name: 'Ankle', value: 35 },
  { name: 'Knee', value: 25 },
  { name: 'Shoulder', value: 20 },
  { name: 'Back', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6'];

// Mock injury history data
const injuryHistoryData = [
  { id: 1, athlete: 'John Smith', type: 'Sprain', bodyPart: 'Ankle', date: '2025-03-01', severity: 'Moderate', status: 'Recovered', duration: '14 days' },
  { id: 2, athlete: 'Jane Doe', type: 'Strain', bodyPart: 'Hamstring', date: '2025-02-15', severity: 'Mild', status: 'Recovered', duration: '7 days' },
  { id: 3, athlete: 'Mike Johnson', type: 'Contusion', bodyPart: 'Shoulder', date: '2025-03-20', severity: 'Mild', status: 'In Recovery', duration: '5 days' },
  { id: 4, athlete: 'Sarah Williams', type: 'Fracture', bodyPart: 'Wrist', date: '2025-01-10', severity: 'Severe', status: 'Recovered', duration: '45 days' },
  { id: 5, athlete: 'James Brown', type: 'Tendonitis', bodyPart: 'Knee', date: '2025-03-05', severity: 'Moderate', status: 'In Recovery', duration: '21 days' },
];

const HealthReports = () => {
  const [timeframe, setTimeframe] = useState("sixWeeks");
  const [reportView, setReportView] = useState("metrics");
  
  const handleExport = (format: string) => {
    console.log(`Exporting health report as ${format}`);
    // In a real app, this would trigger a download of the report in the specified format
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <CardTitle>Health Reports</CardTitle>
            <CardDescription>Track and analyze athlete health and wellness metrics</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fourWeeks">Last 4 Weeks</SelectItem>
                <SelectItem value="sixWeeks">Last 6 Weeks</SelectItem>
                <SelectItem value="threeMonths">Last 3 Months</SelectItem>
                <SelectItem value="sixMonths">Last 6 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => handleExport("pdf")}>
              <Download className="h-4 w-4 mr-1" />
              Export PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={reportView} onValueChange={setReportView} className="space-y-4">
          <TabsList>
            <TabsTrigger value="metrics" className="flex items-center gap-1">
              <HeartPulse className="h-4 w-4" />
              Health Metrics
            </TabsTrigger>
            <TabsTrigger value="injuries" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Injury Analysis
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Health Metrics Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healthMetricsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Resting Heart Rate (bpm)" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="bodyFat" stroke="#3b82f6" name="Body Fat (%)" />
                    <Line type="monotone" dataKey="sleepQuality" stroke="#22c55e" name="Sleep Quality Score" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>This chart tracks key health metrics over time, showing improvements in resting heart rate and body composition.</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Weight Tracking</h3>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={healthMetricsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" />
                    <YAxis domain={[75, 82]} />
                    <Tooltip />
                    <Bar dataKey="weight" name="Weight (kg)" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="injuries" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-4">Injury Distribution by Body Part</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={injuryDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {injuryDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-4">Injury Severity Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={[
                        { name: 'Mild', value: 45 },
                        { name: 'Moderate', value: 35 },
                        { name: 'Severe', value: 20 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" name="Percentage" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Recent Injury History</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Athlete</TableHead>
                    <TableHead>Injury Type</TableHead>
                    <TableHead>Body Part</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {injuryHistoryData.map((injury) => (
                    <TableRow key={injury.id}>
                      <TableCell className="font-medium">{injury.athlete}</TableCell>
                      <TableCell>{injury.type}</TableCell>
                      <TableCell>{injury.bodyPart}</TableCell>
                      <TableCell>{injury.date}</TableCell>
                      <TableCell>
                        <Badge variant={
                          injury.severity === 'Mild' ? 'outline' :
                          injury.severity === 'Moderate' ? 'secondary' : 'destructive'
                        }>
                          {injury.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={injury.status === 'Recovered' ? 'outline' : 'secondary'}>
                          {injury.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{injury.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-4 border-t">
          <h3 className="font-medium mb-3">Report History</h3>
          <div className="border rounded-lg divide-y">
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <File className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Monthly Health Summary - March 2025</h4>
                  <p className="text-sm text-muted-foreground">Generated on April 1, 2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <File className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Monthly Health Summary - February 2025</h4>
                  <p className="text-sm text-muted-foreground">Generated on March 1, 2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthReports;
