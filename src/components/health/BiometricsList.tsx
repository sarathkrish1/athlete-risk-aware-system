
import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplets, Moon, Activity } from 'lucide-react';

const athletes = [
  { id: 1, name: "Michael Johnson", position: "Forward" },
  { id: 2, name: "Sarah Williams", position: "Midfielder" },
  { id: 3, name: "David Lee", position: "Defender" },
  { id: 4, name: "Emma Garcia", position: "Forward" },
  { id: 5, name: "James Wilson", position: "Goalkeeper" },
];

const biometricData = {
  1: [
    { type: "Heart Rate", value: "68 bpm", status: "normal", icon: Heart },
    { type: "Hydration", value: "92%", status: "optimal", icon: Droplets },
    { type: "Sleep Quality", value: "7.8 hours", status: "good", icon: Moon },
    { type: "Recovery", value: "93%", status: "optimal", icon: Activity },
  ],
  2: [
    { type: "Heart Rate", value: "72 bpm", status: "normal", icon: Heart },
    { type: "Hydration", value: "87%", status: "good", icon: Droplets },
    { type: "Sleep Quality", value: "6.5 hours", status: "warning", icon: Moon },
    { type: "Recovery", value: "81%", status: "good", icon: Activity },
  ],
  3: [
    { type: "Heart Rate", value: "64 bpm", status: "optimal", icon: Heart },
    { type: "Hydration", value: "90%", status: "optimal", icon: Droplets },
    { type: "Sleep Quality", value: "7.2 hours", status: "good", icon: Moon },
    { type: "Recovery", value: "88%", status: "good", icon: Activity },
  ],
  4: [
    { type: "Heart Rate", value: "76 bpm", status: "warning", icon: Heart },
    { type: "Hydration", value: "78%", status: "warning", icon: Droplets },
    { type: "Sleep Quality", value: "5.9 hours", status: "warning", icon: Moon },
    { type: "Recovery", value: "72%", status: "warning", icon: Activity },
  ],
  5: [
    { type: "Heart Rate", value: "66 bpm", status: "normal", icon: Heart },
    { type: "Hydration", value: "93%", status: "optimal", icon: Droplets },
    { type: "Sleep Quality", value: "8.1 hours", status: "optimal", icon: Moon },
    { type: "Recovery", value: "95%", status: "optimal", icon: Activity },
  ]
};

const getStatusColor = (status: string) => {
  switch(status) {
    case 'optimal':
      return 'bg-green-100 text-green-800';
    case 'good':
      return 'bg-blue-100 text-blue-800';
    case 'normal':
      return 'bg-gray-100 text-gray-800';
    case 'warning':
      return 'bg-amber-100 text-amber-800';
    case 'critical':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const BiometricsList = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<string>("1");

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Select value={selectedAthlete} onValueChange={setSelectedAthlete}>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Select athlete" />
          </SelectTrigger>
          <SelectContent>
            {athletes.map((athlete) => (
              <SelectItem key={athlete.id} value={athlete.id.toString()}>
                {athlete.name} ({athlete.position})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {biometricData[parseInt(selectedAthlete)].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    {metric.type}
                  </div>
                </TableCell>
                <TableCell>{metric.value}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(metric.status)}>
                    {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
