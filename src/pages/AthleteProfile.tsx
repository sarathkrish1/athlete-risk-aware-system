
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AthleteHeader from '@/components/athlete/AthleteHeader';
import AthleteMetrics from '@/components/athlete/AthleteMetrics';
import AthleteOverview from '@/components/athlete/AthleteOverview';
import { Athlete } from '@/types/athlete';

const athleteData: Athlete = {
  id: '1',
  name: 'John Smith',
  position: 'Forward',
  avatar: '/placeholder.svg',
  age: 24,
  height: '185cm',
  weight: '82kg',
  bmi: 24.2,
  riskScore: 78,
  flagged: true,
  metrics: {
    strength: 85,
    speed: 92,
    endurance: 76,
    agility: 88,
    recovery: 65
  },
  trainingLoad: [
    { date: 'Feb 1', load: 45 },
    { date: 'Feb 2', load: 55 },
    { date: 'Feb 3', load: 68 },
    { date: 'Feb 4', load: 75 },
    { date: 'Feb 5', load: 90, threshold: 85 },
    { date: 'Feb 6', load: 65 },
    { date: 'Feb 7', load: 40 },
  ],
  risks: [
    {
      title: 'ACL Tear',
      riskLevel: 78,
      bodyPart: 'Knee',
      description: 'High risk due to previous injury history and current movement patterns.'
    },
    {
      title: 'Muscle Strain',
      riskLevel: 45,
      bodyPart: 'Hamstring',
      description: 'Moderate risk based on fatigue levels and recent training load.'
    },
    {
      title: 'Ankle Sprain',
      riskLevel: 25,
      bodyPart: 'Ankle',
      description: 'Lower risk with current protocols, continue preventative exercises.'
    }
  ]
};

const AthleteProfile = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you'd fetch the athlete by ID
  const athlete = athleteData;
  
  return (
    <div className="container py-6">
      <AthleteHeader athlete={athlete} />
      <AthleteMetrics athlete={athlete} />
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:w-auto md:inline-grid">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <AthleteOverview athlete={athlete} />
        </TabsContent>
        
        <TabsContent value="history">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Historical data will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AthleteProfile;
