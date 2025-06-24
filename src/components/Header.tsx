import React from 'react';
import { Bot, Settings, Bell, User, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mb-16">
      {/* Internal Navigation Bar */}
      <nav className="flex items-center justify-between mb-12 p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-sm opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-700 to-cyan-700 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold">DSAI Hub</span>
            <Badge variant="outline" className="ml-2 text-xs bg-blue-500/20 text-blue-600 border-blue-500/30">
              Internal
            </Badge>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-500/20 text-green-600 border-green-500/30 text-xs">
            Enterprise Network
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-accent"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent"
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <div className="flex items-center space-x-2 pl-3 border-l border-border">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">J. Smith</span>
            <Badge variant="outline" className="text-xs">Admin</Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
          <Badge className="bg-blue-600 hover:bg-blue-700">
            Data Science & AI Division
          </Badge>
          <Badge variant="outline" className="bg-amber-500/20 text-amber-600 border-amber-500/30">
            Restricted Access
          </Badge>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
          Enterprise AI Tools Portal
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
          Centralized hub for approved AI tools and services. Built for enterprise teams to discover, 
          access, and collaborate on AI-powered solutions with full compliance and security oversight.
        </p>
        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span>24 Active Tools</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span>Security Compliant</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            <span>Enterprise SSO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
