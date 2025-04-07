
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Mock data
const injuryTrendData = [
  { month: 'Jan', count: 5 },
  { month: 'Feb', count: 7 },
  { month: 'Mar', count: 3 },
  { month: 'Apr', count: 4 },
  { month: 'May', count: 8 },
  { month: 'Jun', count: 6 },
  { month: 'Jul', count: 5 },
  { month: 'Aug', count: 2 },
];

const injuryTypeData = [
  { name: 'Muscle Strain', value: 35 },
  { name: 'Sprain', value: 25 },
  { name: 'Fracture', value: 10 },
  { name: 'Tendonitis', value: 15 },
  { name: 'Concussion', value: 5 },
  { name: 'Other', value: 10 },
];

const bodyPartData = [
  { part: 'Ankle', count: 18 },
  { part: 'Knee', count: 23 },
  { part: 'Shoulder', count: 15 },
  { part: 'Hamstring', count: 24 },
  { part: 'Lower Back', count: 19 },
  { part: 'Wrist', count: 8 },
  { part: 'Neck', count: 6 },
];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Analytics = () => {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Injury Trends Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={injuryTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    name="Injury Count" 
                    stroke="#3b82f6" 
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Injury Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={injuryTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {injuryTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Injuries by Body Part</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bodyPartData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="part" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="Injuries" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
