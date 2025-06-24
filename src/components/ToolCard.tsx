
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  features: string[];
  gradient: string;
}

const ToolCard = ({ title, description, icon: Icon, category, status, features, gradient }: ToolCardProps) => {
  const statusColors = {
    'Live': 'bg-green-100 text-green-800 border-green-200',
    'Beta': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Coming Soon': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
      <div className={`h-2 ${gradient}`} />
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg ${gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <Badge variant="outline" className={statusColors[status]}>
            {status}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
        <Badge variant="secondary" className="w-fit text-xs">
          {category}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-800">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Launch Tool
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
