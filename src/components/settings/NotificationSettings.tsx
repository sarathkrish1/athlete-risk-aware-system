
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, MessageSquare, AlertTriangle, Info, Volume2 } from 'lucide-react';

const NotificationSettings = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how you receive notifications and alerts from the system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Channels</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select how you want to receive different types of notifications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="email-notifications" defaultChecked />
              <Label htmlFor="email-notifications" className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                Email Notifications
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="push-notifications" defaultChecked />
              <Label htmlFor="push-notifications" className="flex items-center gap-1.5">
                <Bell className="h-4 w-4" />
                Push Notifications
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="sms-notifications" />
              <Label htmlFor="sms-notifications" className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4" />
                SMS Notifications
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="in-app-notifications" defaultChecked />
              <Label htmlFor="in-app-notifications" className="flex items-center gap-1.5">
                <Volume2 className="h-4 w-4" />
                In-App Notifications
              </Label>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Types</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure which events trigger notifications
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <Label className="text-base font-medium">Risk Alerts</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive alerts when an athlete's risk level changes significantly
                </p>
              </div>
              <div className="ml-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="high">High Risk Only</SelectItem>
                    <SelectItem value="moderate">Moderate & Up</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-blue-500" />
                  <Label className="text-base font-medium">System Updates</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Updates about new features, maintenance, and system changes
                </p>
              </div>
              <div className="ml-4">
                <RadioGroup defaultValue="important" className="flex space-x-1">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="all" id="all-updates" />
                    <Label htmlFor="all-updates">All</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="important" id="important-updates" />
                    <Label htmlFor="important-updates">Important</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="none" id="no-updates" />
                    <Label htmlFor="no-updates">None</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="h-4 w-4 text-green-500" />
                  <Label className="text-base font-medium">Team Messages</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Messages and communications from team members
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Schedule</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure when you receive notifications
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base font-medium">Quiet Hours</Label>
                <p className="text-sm text-muted-foreground">
                  Don't send notifications during these hours
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="22">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="From" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i < 10 ? `0${i}:00` : `${i}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>to</span>
                <Select defaultValue="7">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="To" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i < 10 ? `0${i}:00` : `${i}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base font-medium">Weekend Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Allow notifications during weekends
                </p>
              </div>
              <Switch defaultChecked={false} />
            </div>
            
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base font-medium">Notification Digest</Label>
                <p className="text-sm text-muted-foreground">
                  Group low-priority notifications and send as a digest
                </p>
              </div>
              <Select defaultValue="daily">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Email Subscriptions</h3>
          <Badge variant="outline">5 Active</Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2">
            <Label>Weekly Performance Report</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <Label>Monthly Team Summary</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <Label>Risk Assessment Updates</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <Label>Training Plan Notifications</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <Label>Product News & Updates</Label>
            <Switch defaultChecked />
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
