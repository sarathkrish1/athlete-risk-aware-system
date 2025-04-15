
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Globe, BarChart, Gauge, RefreshCw, ShieldAlert, Heart, Database } from 'lucide-react';

const SystemPreferences = () => {
  const [riskThreshold, setRiskThreshold] = useState<number[]>([65]);
  
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>System Preferences</CardTitle>
        <CardDescription>
          Configure system-wide settings, display options, and default values
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="display" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-4">
            <TabsTrigger value="display" className="flex items-center gap-1">
              <Palette className="h-4 w-4" />
              Display
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              Data
            </TabsTrigger>
            <TabsTrigger value="thresholds" className="flex items-center gap-1">
              <Gauge className="h-4 w-4" />
              Thresholds
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-1">
              <ShieldAlert className="h-4 w-4" />
              Advanced
            </TabsTrigger>
          </TabsList>
        
          <TabsContent value="display" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Theme Settings</h3>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Color Theme</Label>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred interface theme
                  </p>
                </div>
                <RadioGroup defaultValue="system" className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system">System</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Use a more compact layout for dense information display
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Chart Style</Label>
                  <p className="text-sm text-muted-foreground">
                    Default visualization style for charts and graphs
                  </p>
                </div>
                <Select defaultValue="modern">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="vibrant">Vibrant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Localization</h3>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-1.5 text-base font-medium">
                    <Globe className="h-4 w-4" />
                    Language
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Set your preferred language for the interface
                  </p>
                </div>
                <Select defaultValue="en-US">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="en-GB">English (UK)</SelectItem>
                    <SelectItem value="fr-FR">French</SelectItem>
                    <SelectItem value="es-ES">Spanish</SelectItem>
                    <SelectItem value="de-DE">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Date Format</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose how dates are displayed
                  </p>
                </div>
                <Select defaultValue="MM/DD/YYYY">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                    <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                    <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Units System</Label>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred measurement system
                  </p>
                </div>
                <RadioGroup defaultValue="metric" className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="metric" id="units-metric" />
                    <Label htmlFor="units-metric">Metric</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="imperial" id="units-imperial" />
                    <Label htmlFor="units-imperial">Imperial</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Data Display</h3>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-1.5 text-base font-medium">
                    <BarChart className="h-4 w-4" />
                    Default Chart Period
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Default time range for charts and trends
                  </p>
                </div>
                <Select defaultValue="30days">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 Days</SelectItem>
                    <SelectItem value="30days">Last 30 Days</SelectItem>
                    <SelectItem value="90days">Last 90 Days</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Data Precision</Label>
                  <p className="text-sm text-muted-foreground">
                    Number of decimal places to display
                  </p>
                </div>
                <Select defaultValue="2">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Data Management</h3>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Auto-Refresh Data</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically refresh data displays
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch defaultChecked id="auto-refresh" />
                  <Select defaultValue="5min">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1min">Every minute</SelectItem>
                      <SelectItem value="5min">Every 5 minutes</SelectItem>
                      <SelectItem value="15min">Every 15 minutes</SelectItem>
                      <SelectItem value="30min">Every 30 minutes</SelectItem>
                      <SelectItem value="1hr">Every hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-1.5 text-base font-medium">
                    <RefreshCw className="h-4 w-4" />
                    Data Retention Period
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    How long to keep historical data
                  </p>
                </div>
                <Select defaultValue="3years">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1year">1 Year</SelectItem>
                    <SelectItem value="3years">3 Years</SelectItem>
                    <SelectItem value="5years">5 Years</SelectItem>
                    <SelectItem value="forever">Forever</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="thresholds" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Risk Assessment Thresholds</h3>
                <Button variant="outline" size="sm">Reset to Defaults</Button>
              </div>
              
              <div className="rounded-lg border p-4 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="flex items-center gap-1.5 text-base font-medium">
                      <Heart className="h-4 w-4 text-red-500" />
                      High Risk Threshold
                    </Label>
                    <span className="font-medium">{riskThreshold[0]}%</span>
                  </div>
                  <Slider 
                    defaultValue={[65]} 
                    max={100} 
                    step={1} 
                    value={riskThreshold}
                    onValueChange={setRiskThreshold}
                  />
                  <p className="text-sm text-muted-foreground">
                    Athlete risk scores above this threshold will trigger high risk alerts
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Medium Risk Range</Label>
                    <div className="flex items-center gap-2 mt-2">
                      <Input type="number" min="0" max="100" defaultValue="40" className="w-20" />
                      <span>to</span>
                      <Input type="number" min="0" max="100" defaultValue="65" className="w-20" readOnly />
                    </div>
                  </div>
                  <div>
                    <Label>Low Risk Range</Label>
                    <div className="flex items-center gap-2 mt-2">
                      <Input type="number" min="0" max="100" defaultValue="0" className="w-20" readOnly />
                      <span>to</span>
                      <Input type="number" min="0" max="100" defaultValue="40" className="w-20" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-medium">Training Load Thresholds</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-Calculate</SelectItem>
                      <SelectItem value="manual">Manual Entry</SelectItem>
                      <SelectItem value="team">Team Average</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Acute Load Window (days)</Label>
                    <Select defaultValue="7">
                      <SelectTrigger>
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="10">10 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Chronic Load Window (days)</Label>
                    <Select defaultValue="28">
                      <SelectTrigger>
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="21">21 days</SelectItem>
                        <SelectItem value="28">28 days</SelectItem>
                        <SelectItem value="35">35 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Training Load Ratio Warning Threshold</Label>
                  <div className="flex items-center gap-2">
                    <Input type="number" min="0.5" max="2.5" step="0.1" defaultValue="1.5" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A/C ratio above this value will trigger training load warnings
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Advanced Settings</h3>
              <p className="text-sm text-muted-foreground">
                These settings affect system performance and should only be modified by administrators
              </p>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Debug Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable detailed logging for troubleshooting
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">API Access</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow external applications to access data via API
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Data Export Format</Label>
                  <p className="text-sm text-muted-foreground">
                    Default format for exporting data
                  </p>
                </div>
                <Select defaultValue="csv">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="xlsx">Excel</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after inactivity
                  </p>
                </div>
                <Select defaultValue="30min">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15min">15 minutes</SelectItem>
                    <SelectItem value="30min">30 minutes</SelectItem>
                    <SelectItem value="1hour">1 hour</SelectItem>
                    <SelectItem value="4hours">4 hours</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">System Information</h3>
              
              <div className="rounded-lg border p-4 space-y-2 bg-muted/50">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Version</span>
                  <span className="text-sm">2.5.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Last Updated</span>
                  <span className="text-sm">April 10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Database Status</span>
                  <span className="text-sm text-green-500">Connected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Storage Usage</span>
                  <span className="text-sm">24.5 GB / 50 GB</span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">System Diagnostics</Button>
                <Button variant="outline">Check for Updates</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator />
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="outline">Restore Defaults</Button>
          <Button>Save Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemPreferences;
