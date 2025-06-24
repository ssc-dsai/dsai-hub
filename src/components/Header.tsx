
import React from 'react';
import { Bot, User, LogIn, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mb-16">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-lg blur-sm opacity-30"></div>
            <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold">IntelliHub</span>
        </div>

        <div className="flex items-center space-x-4">
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
          <Button variant="ghost" size="sm" className="hover:bg-accent">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Internal AI Tools Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
          Discover and access our comprehensive suite of AI-powered tools designed to enhance productivity and creativity.
        </p>
      </div>
    </div>
  );
};

export default Header;
