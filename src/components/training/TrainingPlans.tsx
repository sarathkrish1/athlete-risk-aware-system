
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, Folder, Play, Clock, BarChart } from 'lucide-react';

// Mock training plans data
const mockTrainingPlans = [
  {
    id: 1,
    title: "Pre-Season Strength Program",
    description: "Build strength and power for the upcoming season",
    category: "Strength",
    duration: "6 weeks",
    sessions: 18,
    progress: 33,
    materials: ["strength_guide.pdf", "workout_tracker.xlsx"],
  },
  {
    id: 2,
    title: "Speed & Agility Development",
    description: "Improve acceleration, top speed and change of direction",
    category: "Speed",
    duration: "4 weeks",
    sessions: 12,
    progress: 75,
    materials: ["speed_drills.pdf", "agility_video.mp4"],
  },
  {
    id: 3,
    title: "In-Season Maintenance",
    description: "Maintain fitness while focusing on recovery during competition",
    category: "Maintenance",
    duration: "Season-long",
    sessions: 32,
    progress: 50,
    materials: ["recovery_protocols.pdf"],
  },
  {
    id: 4,
    title: "Return to Play Protocol",
    description: "Safely return athletes to full participation after injury",
    category: "Rehabilitation",
    duration: "Variable",
    sessions: 24,
    progress: 10,
    materials: ["injury_assessment.pdf", "progression_checklist.pdf", "exercise_library.mp4"],
  },
];

const TrainingPlans = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter plans based on search and selected tab
  const filteredPlans = mockTrainingPlans.filter(plan => {
    const matchesSearch = plan.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || plan.category.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Training Plans</CardTitle>
            <CardDescription>Create and manage standardized training programs</CardDescription>
          </div>
          <Button>
            Create New Plan
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search plans..." 
              className="pl-8" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Plans</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="speed">Speed</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="rehabilitation">Rehabilitation</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {filteredPlans.length > 0 ? (
              filteredPlans.map(plan => (
                <div key={plan.id} className="border rounded-lg p-4 hover:bg-accent/10 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{plan.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {plan.duration}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <BarChart className="h-3 w-3" />
                          {plan.sessions} sessions
                        </Badge>
                        <Badge>{plan.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          Start
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{plan.progress}%</span>
                    </div>
                    <Progress value={plan.progress} className="h-2" />
                  </div>
                  
                  {plan.materials.length > 0 && (
                    <div className="mt-4 pt-3 border-t">
                      <div className="text-sm font-medium mb-2">Training Materials</div>
                      <div className="flex flex-wrap gap-2">
                        {plan.materials.map((material, idx) => (
                          <div key={idx} className="flex items-center text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                            <Folder className="h-3 w-3 mr-1" />
                            {material}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <p>No training plans found matching your criteria.</p>
                <Button variant="outline" className="mt-2">Create New Plan</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TrainingPlans;
