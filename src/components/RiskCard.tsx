
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface RiskCardProps {
  title: string;
  riskLevel: number; // 0-100
  description?: string;
  bodyPart?: string;
  className?: string;
}

const RiskCard = ({ title, riskLevel, description, bodyPart, className }: RiskCardProps) => {
  let riskColor = 'bg-risk-low';
  let riskText = 'text-risk-low';
  let riskStatus = 'Low Risk';
  
  if (riskLevel > 65) {
    riskColor = 'bg-risk-high';
    riskText = 'text-risk-high';
    riskStatus = 'High Risk';
  } else if (riskLevel > 30) {
    riskColor = 'bg-risk-moderate';
    riskText = 'text-risk-moderate';
    riskStatus = 'Moderate Risk';
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className={cn("px-2 py-1 rounded-full text-xs font-medium", riskText)}>
            {riskStatus}
          </div>
        </div>
        {bodyPart && <p className="text-sm text-muted-foreground">{bodyPart}</p>}
      </CardHeader>
      <CardContent>
        <Progress 
          value={riskLevel} 
          className={`h-2 mt-2 ${riskColor}`} 
        />
        {description && (
          <p className="text-sm text-muted-foreground mt-4">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RiskCard;
