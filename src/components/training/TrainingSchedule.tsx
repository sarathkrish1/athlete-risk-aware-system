
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, FilterIcon, Play } from 'lucide-react';
import { DayContent } from 'react-day-picker';

// Mock data for training sessions
const mockTrainingSessions = [
  { id: 1, title: "Sprint Training", date: new Date(2025, 3, 16), type: "Speed", completed: true, athleteIds: [1, 2, 3] },
  { id: 2, title: "Strength Development", date: new Date(2025, 3, 17), type: "Strength", completed: false, athleteIds: [1, 4, 5] },
  { id: 3, title: "Recovery Session", date: new Date(2025, 3, 18), type: "Recovery", completed: false, athleteIds: [2, 3, 6] },
  { id: 4, title: "Tactical Training", date: new Date(2025, 3, 19), type: "Tactical", completed: false, athleteIds: [1, 2, 3, 4, 5] },
  { id: 5, title: "Team Building", date: new Date(2025, 3, 20), type: "Team", completed: false, athleteIds: [1, 2, 3, 4, 5, 6] },
];

const TrainingSchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filter, setFilter] = useState("all");
  
  // Get sessions for the selected date
  const sessionsForDate = date 
    ? mockTrainingSessions.filter(session => 
        session.date.toDateString() === date.toDateString() &&
        (filter === "all" || session.type === filter))
    : [];

  // Helper function to get badge color
  const getBadgeColor = (type: string) => {
    switch(type) {
      case "Speed": return "bg-blue-500";
      case "Strength": return "bg-red-500";
      case "Recovery": return "bg-green-500";
      case "Tactical": return "bg-purple-500";
      case "Team": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  // Function to render dates with sessions
  const renderDay = (date: Date) => {
    const hasSession = mockTrainingSessions.some(
      session => session.date.toDateString() === date.toDateString()
    );
    
    return hasSession ? (
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
      </div>
    ) : null;
  };

  // Custom day content component
  const CustomDayContent = (props: React.ComponentProps<typeof DayContent>) => {
    // The date is available in props.date instead of props.day
    const date = props.date;
    
    return (
      <div>
        {date.getDate()}
        {renderDay(date)}
      </div>
    );
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle>Training Schedule</CardTitle>
          <div className="flex items-center gap-2">
            <FilterIcon className="h-4 w-4 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Speed">Speed</SelectItem>
                <SelectItem value="Strength">Strength</SelectItem>
                <SelectItem value="Recovery">Recovery</SelectItem>
                <SelectItem value="Tactical">Tactical</SelectItem>
                <SelectItem value="Team">Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Calendar 
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md p-3"
              components={{
                DayContent: CustomDayContent
              }}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h3>
            
            {sessionsForDate.length > 0 ? (
              <div className="space-y-3">
                {sessionsForDate.map(session => (
                  <div key={session.id} className="border rounded-md p-3 hover:bg-accent transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <Badge className={`${getBadgeColor(session.type)} mt-1`}>{session.type}</Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{session.athleteIds.length} Athletes</span>
                        <span>{session.completed ? 'Completed' : 'Scheduled'}</span>
                      </div>
                      <Progress value={session.completed ? 100 : 0} className="h-2 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border rounded-md p-6 text-center text-muted-foreground">
                <p>No training sessions scheduled for this date.</p>
                <Button variant="outline" className="mt-2">Add Session</Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingSchedule;
