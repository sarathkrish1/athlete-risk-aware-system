
import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  AlertTriangle,
  HeartPulse, 
  Calendar, 
  User, 
  Clock,
  Scale,
  Ruler
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import RiskCard from '@/components/RiskCard';
import TrainingLoadChart from '@/components/TrainingLoadChart';

const athleteData = {
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
  const athlete = athleteData; // In a real app, you'd fetch the athlete by ID
  
  // Determine risk level color
  let riskColor = 'text-risk-low';
  if (athlete.riskScore > 65) {
    riskColor = 'text-risk-high';
  } else if (athlete.riskScore > 30) {
    riskColor = 'text-risk-moderate';
  }

  return (
    <div className="container py-6">
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
            <AvatarFallback>{athlete.name.charAt(0)}{athlete.name.split(' ')[1].charAt(0)}</AvatarFallback>
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
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:w-auto md:inline-grid">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Overall Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-2 mb-4">
                  <div className={`text-5xl font-bold ${riskColor}`}>
                    {athlete.riskScore}%
                  </div>
                  <Badge className={`${riskColor} bg-opacity-10`}>
                    High Risk Level
                  </Badge>
                </div>
                <Progress 
                  value={athlete.riskScore} 
                  className={`h-2 mb-6 ${athlete.riskScore > 65 ? 'bg-risk-high' : athlete.riskScore > 30 ? 'bg-risk-moderate' : 'bg-risk-low'}`}
                />
                
                <h4 className="font-medium mb-3">Key Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(athlete.metrics).map(([key, value]) => (
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
