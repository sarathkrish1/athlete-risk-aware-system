
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface RehabStep {
  title: string;
  description: string;
  completed?: boolean;
}

interface RehabSuggestionProps {
  injury: string;
  bodyPart: string;
  steps: RehabStep[];
  estimatedRecovery: string;
  priority: 'high' | 'medium' | 'low';
}

const RehabSuggestion = ({
  injury,
  bodyPart,
  steps,
  estimatedRecovery,
  priority
}: RehabSuggestionProps) => {
  const priorityColor = 
    priority === 'high' ? 'bg-red-100 text-red-700' :
    priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
    'bg-blue-100 text-blue-700';

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{injury}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{bodyPart}</p>
          </div>
          <Badge className={priorityColor} variant="outline">
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium mb-3">Estimated Recovery: {estimatedRecovery}</p>
        <Separator className="my-3" />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`mt-0.5 ${step.completed ? 'text-green-500' : 'text-muted-foreground'}`}>
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className={`font-medium ${step.completed ? 'text-muted-foreground line-through' : ''}`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RehabSuggestion;
