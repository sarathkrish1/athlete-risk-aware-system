
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', avgHeartRate: 72, avgSleep: 7.2, avgHydration: 85 },
  { date: 'Feb', avgHeartRate: 74, avgSleep: 7.0, avgHydration: 82 },
  { date: 'Mar', avgHeartRate: 71, avgSleep: 7.3, avgHydration: 86 },
  { date: 'Apr', avgHeartRate: 73, avgSleep: 7.1, avgHydration: 84 },
  { date: 'May', avgHeartRate: 72, avgSleep: 7.4, avgHydration: 87 },
  { date: 'Jun', avgHeartRate: 70, avgSleep: 7.5, avgHydration: 88 },
];

export const HealthMetricsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Health Trends</CardTitle>
        <CardDescription>
          Average health metrics across all athletes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="avgHeartRate"
                name="Avg Heart Rate (bpm)"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="avgSleep"
                name="Avg Sleep (hours)"
                stroke="#82ca9d"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="avgHydration"
                name="Avg Hydration (%)"
                stroke="#ffc658"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
