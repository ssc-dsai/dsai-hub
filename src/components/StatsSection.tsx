
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, TrendingUp, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Tools', value: '8+', icon: Zap, color: 'text-blue-400' },
    { label: 'Team Members', value: '150+', icon: Users, color: 'text-green-400' },
    { label: 'Tasks Completed', value: '10K+', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Time Saved', value: '500hrs', icon: Clock, color: 'text-orange-400' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6">
            <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsSection;
