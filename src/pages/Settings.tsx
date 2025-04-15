
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">System Settings</h1>
        <div className="flex items-center gap-2">
          <SettingsIcon className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">April 15, 2025</span>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The account settings feature is coming soon. This will allow you to update your profile information, change your password, and manage access permissions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Customize your notification settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The notification preferences feature is coming soon. This will allow you to configure alerts for athlete risk levels, injury reports, and system updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>
                Configure system-wide settings and defaults
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-muted-foreground">
                  The system preferences feature is coming soon. This will allow you to customize risk threshold values, default display options, and data retention policies.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
