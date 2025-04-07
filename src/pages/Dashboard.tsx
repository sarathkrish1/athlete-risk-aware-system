
import React from 'react';
import { Activity, Users, AlertTriangle, Dumbbell, Clipboard } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import RiskCard from '@/components/RiskCard';
import AthleteCard from '@/components/AthleteCard';
import TrainingLoadChart from '@/components/TrainingLoadChart';

// Mock data
const trainingLoadData = [
  { date: 'Mon', load: 45 },
  { date: 'Tue', load: 55 },
  { date: 'Wed', load: 68 },
  { date: 'Thu', load: 75 },
  { date: 'Fri', load: 90, threshold: 85 },
  { date: 'Sat', load: 65 },
  { date: 'Sun', load: 40 },
];

const highRiskAthletes = [
  { id: '1', name: 'John Smith', position: 'Forward', riskScore: 78, flagged: true },
  { id: '2', name: 'Sarah Johnson', position: 'Midfielder', riskScore: 67, flagged: true },
];

const Dashboard = () => {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatsCard 
          title="Active Athletes" 
          value="24" 
          description="2 new this week" 
          icon={Users}
        />
        <StatsCard 
          title="Average Team Load" 
          value="67%" 
          description="5% higher than last week" 
          icon={Activity}
          trend="up"
          trendValue="+5%"
        />
        <StatsCard 
          title="High Risk Athletes" 
          value="4" 
          description="Needs attention" 
          icon={AlertTriangle}
          trend="up"
          trendValue="+2"
        />
        <StatsCard 
          title="Training Sessions" 
          value="12" 
          description="This week" 
          icon={Dumbbell}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <div className="space-y-6 md:col-span-2">
          <TrainingLoadChart 
            title="Team Training Load" 
            description="Daily training intensity over the past week" 
            data={trainingLoadData} 
          />
          <div className="grid gap-6 md:grid-cols-2">
            <RiskCard 
              title="Ankle Sprain Risk" 
              riskLevel={75} 
              bodyPart="Lower extremity"
              description="High risk due to previous injury and current training load" 
            />
            <RiskCard 
              title="Muscle Fatigue" 
              riskLevel={45} 
              bodyPart="Full body"
              description="Moderate fatigue levels detected in recent training sessions" 
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">High Risk Athletes</h2>
            <Clipboard className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {highRiskAthletes.map(athlete => (
              <AthleteCard key={athlete.id} {...athlete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
