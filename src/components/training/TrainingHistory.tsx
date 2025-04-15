
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, BarChart, Calendar, User, FileText } from 'lucide-react';
import { format } from 'date-fns';

// Mock training history data
const mockTrainingHistory = [
  { 
    id: 1, 
    date: new Date(2025, 3, 10), 
    title: "Sprint Training",
    duration: 45,
    athlete: "John Smith",
    type: "Speed",
    completed: true,
    performance: "Good",
    notes: "Achieved new personal best in 40m sprint"
  },
  { 
    id: 2, 
    date: new Date(2025, 3, 8), 
    title: "Weight Training",
    duration: 60,
    athlete: "John Smith",
    type: "Strength",
    completed: true,
    performance: "Excellent",
    notes: "Increased weights on all exercises"
  },
  { 
    id: 3, 
    date: new Date(2025, 3, 5), 
    title: "Team Practice",
    duration: 90,
    athlete: "John Smith",
    type: "Team",
    completed: true,
    performance: "Average",
    notes: "Participated in full team scrimmage"
  },
  { 
    id: 4, 
    date: new Date(2025, 3, 3), 
    title: "Recovery Session",
    duration: 30,
    athlete: "John Smith",
    type: "Recovery",
    completed: false,
    performance: "N/A",
    notes: "Session canceled due to scheduling conflict"
  },
  { 
    id: 5, 
    date: new Date(2025, 3, 1), 
    title: "Technical Drills",
    duration: 60,
    athlete: "John Smith",
    type: "Technical",
    completed: true,
    performance: "Good",
    notes: "Focused on position-specific skill development"
  },
];

const TrainingHistory = () => {
  const [athlete, setAthlete] = useState("all");
  const [timeframe, setTimeframe] = useState("month");
  
  // Filter the training history based on selections
  const filteredHistory = mockTrainingHistory.filter(session => {
    return athlete === "all" || session.athlete === athlete;
  }).sort((a, b) => b.date.getTime() - a.date.getTime());
  
  // Calculate completion rate
  const completionRate = filteredHistory.length > 0 
    ? Math.round((filteredHistory.filter(s => s.completed).length / filteredHistory.length) * 100) 
    : 0;

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Training History</CardTitle>
            <CardDescription>Review past training sessions and performance</CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={athlete} onValueChange={setAthlete}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select athlete" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Athletes</SelectItem>
                <SelectItem value="John Smith">John Smith</SelectItem>
                <SelectItem value="Jane Doe">Jane Doe</SelectItem>
                <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Sessions</p>
                    <p className="text-2xl font-bold">{filteredHistory.length}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Completion Rate</p>
                    <p className="text-2xl font-bold">{completionRate}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Total Duration</p>
                    <p className="text-2xl font-bold">
                      {filteredHistory.reduce((sum, session) => session.completed ? sum + session.duration : sum, 0)} min
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Session</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHistory.map((session) => (
              <TableRow key={session.id}>
                <TableCell>{format(session.date, 'MMM dd, yyyy')}</TableCell>
                <TableCell className="font-medium">{session.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{session.type}</Badge>
                </TableCell>
                <TableCell>{session.duration} min</TableCell>
                <TableCell>
                  {session.completed ? (
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-500">
                      <XCircle className="h-4 w-4 mr-1" />
                      <span>Missed</span>
                    </div>
                  )}
                </TableCell>
                <TableCell>{session.performance}</TableCell>
                <TableCell className="max-w-[200px] truncate" title={session.notes}>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="truncate">{session.notes}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TrainingHistory;
