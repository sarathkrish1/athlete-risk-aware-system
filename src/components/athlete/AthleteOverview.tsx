
import React from 'react';
import AthleteRiskAssessment from './AthleteRiskAssessment';
import TrainingLoadChart from '@/components/TrainingLoadChart';
import RiskCard from '@/components/RiskCard';
import { Athlete } from '@/types/athlete';

interface AthleteOverviewProps {
  athlete: Pick<Athlete, 'riskScore' | 'metrics' | 'trainingLoad' | 'risks'>;
}

const AthleteOverview: React.FC<AthleteOverviewProps> = ({ athlete }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <AthleteRiskAssessment 
          riskScore={athlete.riskScore} 
          metrics={athlete.metrics} 
        />
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <TrainingLoadChart
          title="Training Load"
          description="7-day training load pattern"
          data={athlete.trainingLoad}
        />
        
        <div className="grid gap-6 sm:grid-cols-2">
          {athlete.risks.map((risk, index) => (
            <RiskCard
              key={index}
              title={risk.title}
              riskLevel={risk.riskLevel}
              bodyPart={risk.bodyPart}
              description={risk.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AthleteOverview;
