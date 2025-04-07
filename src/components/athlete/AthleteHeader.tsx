
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Athlete } from '@/types/athlete';

interface AthleteHeaderProps {
  athlete: Pick<Athlete, 'name' | 'position' | 'avatar' | 'flagged'>;
}

const AthleteHeader: React.FC<AthleteHeaderProps> = ({ athlete }) => {
  return (
    <div className="mb-6">
      <Link to="/athletes">
        <Button variant="outline" size="sm" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Athletes
        </Button>
      </Link>
      
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src={athlete.avatar} alt={athlete.name} />
          <AvatarFallback>{athlete.name.charAt(0)}{athlete.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{athlete.name}</h1>
            {athlete.flagged && (
              <Badge variant="outline" className="bg-red-100 text-red-700 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                High Risk
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground">{athlete.position}</p>
        </div>
        
        <div>
          <Button>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default AthleteHeader;
