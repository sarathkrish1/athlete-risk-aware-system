
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Ruler, Scale, HeartPulse } from 'lucide-react';
import { Athlete } from '@/types/athlete';

interface AthleteMetricsProps {
  athlete: Pick<Athlete, 'age' | 'height' | 'weight' | 'bmi'>;
}

const AthleteMetrics: React.FC<AthleteMetricsProps> = ({ athlete }) => {
  return (
    <div className="grid gap-6 md:grid-cols-4 mb-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Age</span>
          </div>
          <p className="text-2xl font-semibold">{athlete.age}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Ruler className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Height</span>
          </div>
          <p className="text-2xl font-semibold">{athlete.height}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Weight</span>
          </div>
          <p className="text-2xl font-semibold">{athlete.weight}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <HeartPulse className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">BMI</span>
          </div>
          <p className="text-2xl font-semibold">{athlete.bmi}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AthleteMetrics;
