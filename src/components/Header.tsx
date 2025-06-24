import React from 'react';
import { Bot, User, LogOut, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mb-16">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img src="/logo.png" alt="DSAI Hub Logo" className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold">DSAI Hub</span>
        </div>

        <div className="flex items-center space-x-3">
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">J. Smith</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem disabled>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
          DSAI Hub
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Discover and access AI-powered tools to enhance your productivity and creativity.
        </p>
      </div>
    </div>
  );
};

export default Header;
