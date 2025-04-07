
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  TooltipProps
} from 'recharts';
import { cn } from '@/lib/utils';

interface TrainingData {
  date: string;
  load: number;
  threshold?: number;
}

interface TrainingLoadChartProps {
  data: TrainingData[];
  title: string;
  description?: string;
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const load = payload[0].value;
    let riskLevel = 'Low Risk';
    let riskColor = 'text-risk-low';
    
    if (load && load > 85) {
      riskLevel = 'High Risk';
      riskColor = 'text-risk-high';
    } else if (load && load > 65) {
      riskLevel = 'Moderate Risk';
      riskColor = 'text-risk-moderate';
    }

    return (
      <div className="bg-background p-3 shadow-md rounded-md border">
        <p className="text-muted-foreground text-xs">{label}</p>
        <p className="font-medium">{`Load: ${load}`}</p>
        <p className={cn("text-sm font-medium", riskColor)}>{riskLevel}</p>
      </div>
    );
  }

  return null;
};

const TrainingLoadChart = ({ 
  data, 
  title, 
  description, 
  className 
}: TrainingLoadChartProps) => {
  // Find the threshold for the reference line
  const threshold = data.find(item => item.threshold)?.threshold || 80;

  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={threshold} stroke="#dc2626" strokeDasharray="3 3" />
              <Bar 
                dataKey="load" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingLoadChart;
