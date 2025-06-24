
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

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
}

const ToolCard = ({ id, title, description, status, image }: ToolCardProps) => {
  const navigate = useNavigate();
  
  const statusColors = {
    'Live': 'bg-green-500/20 text-green-500 border-green-500/30 dark:text-green-400',
    'Beta': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30 dark:text-yellow-400',
    'Coming Soon': 'bg-blue-500/20 text-blue-600 border-blue-500/30 dark:text-blue-400'
  };

  const handleCardClick = () => {
    navigate(`/tool/${id}`);
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 hover:border-violet-200 dark:hover:border-violet-800 overflow-hidden bg-card/80 backdrop-blur-sm cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {title}
          </CardTitle>
          <Badge variant="outline" className={`${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
