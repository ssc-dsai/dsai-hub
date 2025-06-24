import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, Clock, Activity, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      title: 'Active Tools',
      value: '24',
      change: '+3 this month',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Total Users',
      value: '4,732',
      change: '+12% this quarter',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Security Compliance',
      value: '100%',
      change: 'All tools certified',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      change: '-15% improved',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Enterprise Overview</h2>
          <p className="text-muted-foreground">Real-time insights from your AI tools ecosystem</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            All Systems Operational
          </Badge>
          <Badge variant="outline" className="bg-blue-500/20 text-blue-600 border-blue-500/30">
            Last Updated: {new Date().toLocaleTimeString()}
          </Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-foreground mb-1">{stat.title}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
