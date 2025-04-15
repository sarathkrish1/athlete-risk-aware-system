
import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const athletes = [
  { id: 1, name: "Michael Johnson", position: "Forward", injuryCount: 1 },
  { id: 2, name: "Sarah Williams", position: "Midfielder", injuryCount: 0 },
  { id: 3, name: "David Lee", position: "Defender", injuryCount: 0 },
  { id: 4, name: "Emma Garcia", position: "Forward", injuryCount: 2 },
  { id: 5, name: "James Wilson", position: "Goalkeeper", injuryCount: 0 },
];

const injuryData = {
  1: [
    { 
      type: "Hamstring Strain", 
      bodyPart: "Left Leg",
      severity: "Moderate",
      dateReported: "2025-03-15",
      status: "Recovering",
      recoveryProgress: 65,
      estimatedReturn: "2025-04-30"
    }
  ],
  4: [
    { 
      type: "Ankle Sprain", 
      bodyPart: "Right Ankle",
      severity: "Mild",
      dateReported: "2025-04-01",
      status: "Recovering",
      recoveryProgress: 80,
      estimatedReturn: "2025-04-22"
    },
    { 
      type: "Shoulder Contusion", 
      bodyPart: "Right Shoulder",
      severity: "Mild",
      dateReported: "2025-03-25",
      status: "Recovered",
      recoveryProgress: 100,
      estimatedReturn: "2025-04-10"
    }
  ]
};

const getSeverityColor = (severity: string) => {
  switch(severity.toLowerCase()) {
    case 'mild':
      return 'bg-yellow-100 text-yellow-800';
    case 'moderate':
      return 'bg-orange-100 text-orange-800';
    case 'severe':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch(status.toLowerCase()) {
    case 'recovering':
      return 'bg-blue-100 text-blue-800';
    case 'recovered':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const InjuryTracker = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<string>("1");
  
  // Filter to only show athletes with injuries
  const injuredAthletes = athletes.filter(a => a.injuryCount > 0);
  const selectedAthleteData = injuryData[parseInt(selectedAthlete)] || [];
  
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Select value={selectedAthlete} onValueChange={setSelectedAthlete}>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Select injured athlete" />
          </SelectTrigger>
          <SelectContent>
            {injuredAthletes.map((athlete) => (
              <SelectItem key={athlete.id} value={athlete.id.toString()}>
                {athlete.name} ({athlete.injuryCount} {athlete.injuryCount === 1 ? 'injury' : 'injuries'})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedAthleteData.length > 0 ? (
        <div className="space-y-6">
          {selectedAthleteData.map((injury, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{injury.type}</CardTitle>
                    <CardDescription>{injury.bodyPart}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getSeverityColor(injury.severity)}>
                      {injury.severity}
                    </Badge>
                    <Badge className={getStatusColor(injury.status)}>
                      {injury.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date Reported</p>
                    <p>{new Date(injury.dateReported).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Return</p>
                    <p>{new Date(injury.estimatedReturn).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Recovery Progress</p>
                    <p className="text-sm font-medium">{injury.recoveryProgress}%</p>
                  </div>
                  <Progress value={injury.recoveryProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-blue-50 p-4 rounded-md">
          <p>No injury records for the selected athlete.</p>
        </div>
      )}
    </div>
  );
};
