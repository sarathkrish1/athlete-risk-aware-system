
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  BarChart3, 
  Calendar, 
  Settings, 
  HeartPulse,
  FileText 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';

const navItems = [
  { 
    title: "Dashboard", 
    icon: Activity, 
    href: "/" 
  },
  { 
    title: "Athletes", 
    icon: Users, 
    href: "/athletes" 
  },
  { 
    title: "Analytics", 
    icon: BarChart3, 
    href: "/analytics" 
  },
  { 
    title: "Training", 
    icon: Calendar, 
    href: "/training" 
  },
  { 
    title: "Health", 
    icon: HeartPulse, 
    href: "/health" 
  },
  { 
    title: "Reports", 
    icon: FileText, 
    href: "/reports" 
  },
  { 
    title: "Settings", 
    icon: Settings, 
    href: "/settings" 
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold">Athlete Risk Awareness</span>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link to={item.href} className="w-full">
                    <SidebarMenuButton className={cn(
                      location.pathname === item.href && "bg-sidebar-accent"
                    )}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
