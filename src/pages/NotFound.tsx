import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, AlertTriangle, Mail, Shield } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950 flex items-center justify-center p-6">
      <Card className="max-w-md w-full bg-card/50 backdrop-blur-sm border border-border">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Access Restricted</h1>
            <p className="text-muted-foreground">
              The requested resource is not available or you don't have permission to access it.
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <Badge className="bg-red-500/20 text-red-600 border-red-500/30">
              <Shield className="h-3 w-3 mr-1" />
              Error 404 - Resource Not Found
            </Badge>
            <div className="text-sm text-muted-foreground">
              <p>This could be due to:</p>
              <ul className="mt-2 space-y-1 text-left">
                <li>• Tool has been decommissioned</li>
                <li>• Insufficient access permissions</li>
                <li>• Network connectivity issues</li>
                <li>• Invalid URL or bookmark</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Return to Tools Hub
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.location.href = 'mailto:dsai-support@company.com?subject=Access%20Issue%20-%20404%20Error'}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact IT Support
            </Button>
          </div>

          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Enterprise Network Connected</span>
            </div>
            <p>DSAI Hub - Internal Portal v2.1.3</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
