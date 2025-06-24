
import React from 'react';
import { Bot, User, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
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
          <span className="text-xl font-bold text-white">IntelliHub</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
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
        <h1 className="text-6xl font-bold text-white mb-4">
          Internal AI Tools Hub
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          Discover and access our comprehensive suite of AI-powered tools designed to enhance productivity and creativity.
        </p>
      </div>
    </div>
  );
};

export default Header;
