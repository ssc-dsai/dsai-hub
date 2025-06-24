
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-12 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Code className="h-5 w-5 text-blue-600 mr-2" />
          <span className="text-gray-700 font-medium">Built with</span>
          <Heart className="h-4 w-4 text-red-500 mx-2" />
          <span className="text-gray-700 font-medium">by our AI Team</span>
        </div>
        <p className="text-gray-600 text-sm">
          Continuously innovating to bring you the best AI-powered solutions
        </p>
        <div className="mt-4 text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
