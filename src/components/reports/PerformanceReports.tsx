
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { Calendar, Download, Mail, BarChart as BarChartIcon, FileText, PieChart as PieChartIcon } from 'lucide-react';

// Mock performance data
const performanceData = [
  { month: 'Jan', speed: 72, strength: 65, endurance: 58 },
  { month: 'Feb', speed: 75, strength: 68, endurance: 62 },
  { month: 'Mar', speed: 78, strength: 72, endurance: 65 },
  { month: 'Apr', speed: 82, strength: 75, endurance: 68 },
  { month: 'May', speed: 85, strength: 78, endurance: 72 },
  { month: 'Jun', speed: 88, strength: 80, endurance: 75 },
];

const goalAttainmentData = [
  { name: 'Achieved', value: 68 },
  { name: 'In Progress', value: 22 },
  { name: 'Not Started', value: 10 },
];

const COLORS = ['#22c55e', '#3b82f6', '#ef4444'];

const PerformanceReports = () => {
  const [athlete, setAthlete] = useState("all");
  const [timeframe, setTimeframe] = useState("sixMonths");
  const [reportType, setReportType] = useState("performance");
  
  const handleExport = (format: string) => {
    console.log(`Exporting report as ${format}`);
    // In a real app, this would trigger a download of the report in the specified format
  };
  
  const handleShareReport = () => {
    console.log("Sharing report via email");
    // In a real app, this would open an email dialog or send the report via API
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <CardTitle>Performance Reports</CardTitle>
            <CardDescription>Analyze athlete performance metrics over time</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={athlete} onValueChange={setAthlete}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select athlete" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Athletes</SelectItem>
                <SelectItem value="John Smith">John Smith</SelectItem>
                <SelectItem value="Jane Doe">Jane Doe</SelectItem>
                <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="sixMonths">Last 6 Months</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={reportType} onValueChange={setReportType} className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="performance" className="flex items-center gap-1">
                <BarChartIcon className="h-4 w-4" />
                Performance Metrics
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-1">
                <PieChartIcon className="h-4 w-4" />
                Goal Attainment
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleExport("pdf")}>
                <Download className="h-4 w-4 mr-1" />
                PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport("csv")}>
                <FileText className="h-4 w-4 mr-1" />
                CSV
              </Button>
              <Button variant="outline" size="sm" onClick={handleShareReport}>
                <Mail className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
          
          <TabsContent value="performance" className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Performance Metrics Over Time</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="speed" stroke="#3b82f6" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="strength" stroke="#ef4444" />
                    <Line type="monotone" dataKey="endurance" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>This chart shows performance trends across three key metrics: speed, strength, and endurance. The data represents scores on a scale of 0-100.</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Monthly Performance Comparison</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="speed" name="Speed" fill="#3b82f6" />
                    <Bar dataKey="strength" name="Strength" fill="#ef4444" />
                    <Bar dataKey="endurance" name="Endurance" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="goals" className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Goal Attainment Overview</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={goalAttainmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {goalAttainmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-medium mb-4">Goal Status Summary</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <span>Achieved Goals</span>
                        </div>
                        <span className="font-medium">68%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        12 of 20 performance goals have been fully achieved
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                          <span>In Progress</span>
                        </div>
                        <span className="font-medium">22%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        5 of 20 performance goals are in progress
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <span>Not Started</span>
                        </div>
                        <span className="font-medium">10%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        3 of 20 performance goals have not been started
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-4 border-t">
          <h3 className="font-medium mb-3">Scheduled Reports</h3>
          <div className="border rounded-lg divide-y">
            <div className="p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Weekly Performance Summary</h4>
                <p className="text-sm text-muted-foreground">Sent every Monday at 9:00 AM</p>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Monthly Progress Report</h4>
                <p className="text-sm text-muted-foreground">Sent on the 1st of each month</p>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceReports;
