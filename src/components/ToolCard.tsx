import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Building2, Users, Shield } from 'lucide-react';

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  features: string[];
  gradient: string;
  image: string;
  department: string;
  classification: string;
  owner: string;
  userCount: number;
}

const ToolCard = ({ 
  id, 
  title, 
  description, 
  status, 
  image, 
  department, 
  classification, 
  owner, 
  userCount,
  gradient
}: ToolCardProps) => {
  const navigate = useNavigate();
  
  const statusColors = {
    'Live': 'bg-green-500/20 text-green-600 border-green-500/30 dark:text-green-400',
    'Beta': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30 dark:text-yellow-400',
    'Coming Soon': 'bg-blue-500/20 text-blue-600 border-blue-500/30 dark:text-blue-400'
  };

  const classificationColors = {
    'Internal Use': 'bg-green-500/20 text-green-600 border-green-500/30',
    'Confidential': 'bg-amber-500/20 text-amber-600 border-amber-500/30',
    'Restricted': 'bg-orange-500/20 text-orange-600 border-orange-500/30',
    'Highly Restricted': 'bg-red-500/20 text-red-600 border-red-500/30'
  };

  const handleCardClick = () => {
    navigate(`/tool/${id}`);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden bg-card/80 backdrop-blur-sm cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className={`absolute inset-0 ${gradient} opacity-60`}></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <Badge variant="outline" className={`${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className={`${classificationColors[classification as keyof typeof classificationColors]} text-xs font-medium`}>
            <Shield className="h-3 w-3 mr-1" />
            {classification}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Building2 className="h-3 w-3 mr-1" />
            <span className="truncate">{department}</span>
          </div>
          {userCount > 0 && (
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{userCount.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center">
            <span className="font-medium mr-1">Owner:</span>
            <span className="truncate">{owner}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
