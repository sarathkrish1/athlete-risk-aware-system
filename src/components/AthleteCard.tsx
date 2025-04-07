
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface AthleteCardProps {
  id: string;
  name: string;
  position: string;
  avatar?: string;
  riskScore: number;
  flagged?: boolean;
}

const AthleteCard = ({ id, name, position, avatar, riskScore, flagged }: AthleteCardProps) => {
  let riskColor = 'bg-risk-low';
  let riskText = 'text-risk-low';
  
  if (riskScore > 65) {
    riskColor = 'bg-risk-high';
    riskText = 'text-risk-high';
  } else if (riskScore > 30) {
    riskColor = 'bg-risk-moderate';
    riskText = 'text-risk-moderate';
  }
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}{name.split(' ')[1]?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{name}</h3>
              {flagged && (
                <div className="text-risk-high">
                  <AlertTriangle className="h-4 w-4" />
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Risk Score</span>
            <span className={`font-medium ${riskText}`}>{riskScore}%</span>
          </div>
          <Progress value={riskScore} className="h-2" indicatorClassName={riskColor} />
        </div>
      </CardContent>
      
      <CardFooter className="bg-muted/50 px-6 py-3">
        <Link to={`/athletes/${id}`} className="w-full">
          <Button variant="ghost" className="w-full justify-between">
            View Profile
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AthleteCard;
