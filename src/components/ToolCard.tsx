
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
    'Live': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Beta': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Coming Soon': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  const handleCardClick = () => {
    navigate(`/tool/${id}`);
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 cursor-pointer hover:border-violet-500/50"
      onClick={handleCardClick}
    >
      <div className="aspect-video bg-gray-700 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
            {title}
          </CardTitle>
          <Badge variant="outline" className={`${statusColors[status]} text-xs`}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
