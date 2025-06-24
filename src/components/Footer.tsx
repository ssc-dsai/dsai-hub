import React from 'react';
import { Bot, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Bot className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-medium">DSAI Hub</span>
            <div className="mx-3 text-muted-foreground">•</div>
            <span className="text-sm text-muted-foreground">AI Tools for Everyone</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:support@company.com" className="hover:text-blue-600 transition-colors">
                support@company.com
              </a>
            </div>
            <div>© 2024 Company Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
