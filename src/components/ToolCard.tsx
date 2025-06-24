import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Star } from 'lucide-react';

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
  featured?: boolean;
}

const ToolCard = ({ 
  id, 
  title, 
  description, 
  status, 
  image,
  gradient,
  featured = false
}: ToolCardProps) => {
  const navigate = useNavigate();
  
  const statusColors = {
    'Live': 'bg-green-500/20 text-green-600 border-green-500/30',
    'Beta': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
    'Coming Soon': 'bg-blue-500/20 text-blue-600 border-blue-500/30'
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
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </CardTitle>
            {featured && (
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            )}
          </div>
          <Badge variant="outline" className={`${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardHeader>
    </Card>
  );
};

export default ToolCard;
