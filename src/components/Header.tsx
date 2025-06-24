
import React from 'react';
import { Bot, Sparkles, User, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="mb-16">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">AITOOLS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Favourites
            </button>
            <button className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
              Discover
            </button>
            <button className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 flex items-center">
              Submit
              <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M6 8l-4-4h8z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Astronomically great AI tools from all over the web
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          ReviaTools Collects & Organizes All The Best AI Tools So You too Can Become Superhuman!*
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for AI Tools..."
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
          <div className="flex items-center">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Tools Added Today</span>
          </div>
          <div className="flex items-center">
            <Bot className="h-4 w-4 mr-2" />
            <span>News Added Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
