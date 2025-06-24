
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
            <Bot className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
        AI Tools Hub
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover and access our comprehensive suite of AI-powered tools designed to enhance productivity, 
        creativity, and innovation across your workflow.
      </p>
      <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
        <Sparkles className="h-4 w-4 mr-2" />
        <span>Powered by Advanced AI Technology</span>
      </div>
    </div>
  );
};

export default Header;
