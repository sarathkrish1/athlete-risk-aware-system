
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Athlete } from '@/types/athlete';

interface AthleteRiskAssessmentProps {
  riskScore: Athlete['riskScore'];
  metrics: Athlete['metrics'];
}

const AthleteRiskAssessment: React.FC<AthleteRiskAssessmentProps> = ({ 
  riskScore, 
  metrics 
}) => {
  // Determine risk level color
  let riskColor = 'text-risk-low';
  if (riskScore > 65) {
    riskColor = 'text-risk-high';
  } else if (riskScore > 30) {
    riskColor = 'text-risk-moderate';
  }

  const getRiskLevel = (score: number) => {
    if (score > 65) return 'High Risk Level';
    if (score > 30) return 'Moderate Risk Level';
    return 'Low Risk Level';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Risk Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className={`text-5xl font-bold ${riskColor}`}>
            {riskScore}%
          </div>
          <Badge className={`${riskColor} bg-opacity-10`}>
            {getRiskLevel(riskScore)}
          </Badge>
        </div>
        <Progress 
          value={riskScore} 
          className={`h-2 mb-6 ${riskScore > 65 ? 'bg-risk-high' : riskScore > 30 ? 'bg-risk-moderate' : 'bg-risk-low'}`}
        />
        
        <h4 className="font-medium mb-3">Key Metrics</h4>
        <div className="space-y-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm capitalize">{key}</span>
                <span className="text-sm font-medium">{value}%</span>
              </div>
              <Progress value={value} className="h-1" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AthleteRiskAssessment;
