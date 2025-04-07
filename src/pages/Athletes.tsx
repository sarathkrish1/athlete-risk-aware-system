
import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AthleteCard from '@/components/AthleteCard';

// Mock athletes data
const athletes = [
  { id: '1', name: 'John Smith', position: 'Forward', riskScore: 78, flagged: true },
  { id: '2', name: 'Sarah Johnson', position: 'Midfielder', riskScore: 67, flagged: true },
  { id: '3', name: 'Michael Chen', position: 'Defender', riskScore: 42, flagged: false },
  { id: '4', name: 'Emma Williams', position: 'Forward', riskScore: 31, flagged: false },
  { id: '5', name: 'David Kim', position: 'Goalkeeper', riskScore: 28, flagged: false },
  { id: '6', name: 'Jessica Lee', position: 'Midfielder', riskScore: 88, flagged: true },
  { id: '7', name: 'Kevin Brown', position: 'Defender', riskScore: 15, flagged: false },
  { id: '8', name: 'Ana Rodriguez', position: 'Forward', riskScore: 55, flagged: false },
];

const Athletes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [riskFilter, setRiskFilter] = useState('');

  // Apply filters
  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === '' || athlete.position === positionFilter;
    
    let matchesRisk = true;
    if (riskFilter === 'high') {
      matchesRisk = athlete.riskScore >= 65;
    } else if (riskFilter === 'medium') {
      matchesRisk = athlete.riskScore >= 30 && athlete.riskScore < 65;
    } else if (riskFilter === 'low') {
      matchesRisk = athlete.riskScore < 30;
    }
    
    return matchesSearch && matchesPosition && matchesRisk;
  });

  return (
    <div className="container py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Athletes</h1>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Add Athlete
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 mb-8">
        <div className="relative md:col-span-2 lg:col-span-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search athletes..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={positionFilter} onValueChange={setPositionFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Positions</SelectItem>
              <SelectItem value="Forward">Forward</SelectItem>
              <SelectItem value="Midfielder">Midfielder</SelectItem>
              <SelectItem value="Defender">Defender</SelectItem>
              <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Risks</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAthletes.map(athlete => (
          <AthleteCard key={athlete.id} {...athlete} />
        ))}
        
        {filteredAthletes.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No athletes found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Athletes;
