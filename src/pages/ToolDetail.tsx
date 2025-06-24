
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, Clock, CheckCircle, Mail, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search } from 'lucide-react';

const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tools = {
    'ai-chat-assistant': {
      title: 'AI Chat Assistant',
      description: 'An intelligent conversational AI system that helps with questions, brainstorming, and problem-solving across various domains. This tool leverages advanced natural language processing to understand context and provide meaningful responses.',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Real-time responses'],
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500',
      users: '150+',
      lastUpdated: '2 days ago',
      classification: 'Protected A',
      teamMembers: [
        { name: 'Sarah Chen', role: 'Lead Developer', initials: 'SC', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c6c4db?w=100&h=100&fit=crop&crop=face' },
        { name: 'Mike Johnson', role: 'ML Engineer', initials: 'MJ', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
        { name: 'Emily Rodriguez', role: 'UX Designer', initials: 'ER', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' }
      ],
      contactEmail: 'chat-team@company.com',
      screenshots: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
    },
    'ai-canvas': {
      title: 'AI Canvas',
      description: 'A comprehensive visual collaboration workspace enhanced with AI-powered drawing, diagramming, and creative assistance tools. Perfect for brainstorming sessions, wireframing, and creative projects.',
      icon: PenTool,
      category: 'Creative',
      status: 'Live' as const,
      features: ['Smart drawing tools', 'Auto-completion', 'Collaborative editing', 'Template library'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      users: '80+',
      lastUpdated: '1 week ago',
      classification: 'Protected A',
      teamMembers: [
        { name: 'David Kim', role: 'Frontend Lead', initials: 'DK', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        { name: 'Lisa Wang', role: 'AI Specialist', initials: 'LW', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
        { name: 'Tom Brown', role: 'Product Manager', initials: 'TB', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
      ],
      contactEmail: 'canvas-team@company.com',
      screenshots: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
    },
    // ... other tools would be here with similar structure
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50 dark:to-violet-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-violet-600 to-purple-600">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50 dark:to-violet-950">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-accent mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Button>
        </div>

        {/* Tool Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 rounded-2xl bg-card/50">
                <Icon className="h-12 w-12" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{tool.title}</h1>
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/30 dark:text-green-400">
                    {tool.status}
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground mb-4">{tool.description}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{tool.users} users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Updated {tool.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-80">
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Launch Tool
                </Button>
                <div className="text-xs text-muted-foreground text-center">
                  Internal tool - no external access required
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {tool.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={screenshot} 
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-full object-cover opacity-50"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-card border-border hover:bg-accent" />
                  <CarouselNext className="bg-card border-border hover:bg-accent" />
                </Carousel>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>About This Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  This tool represents the cutting edge of AI technology, designed to enhance productivity 
                  and creativity within our organization. Our development team has carefully crafted 
                  this solution to provide seamless integration with existing workflows while maintaining 
                  the highest standards of performance and reliability.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Team Members */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tool.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-violet-600 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-muted-foreground text-sm">{member.role}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Team */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Contact Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-card/50 border-border hover:bg-accent">
                  <Mail className="h-4 w-4 mr-2" />
                  {tool.contactEmail}
                </Button>
              </CardContent>
            </Card>

            {/* Tool Information */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Tool Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Category</div>
                  <Badge variant="secondary" className="bg-muted text-foreground border-border">
                    {tool.category}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="font-medium">{tool.status}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Classification</div>
                  <Badge variant="outline" className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30 dark:text-yellow-400">
                    {tool.classification}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Last Updated</div>
                  <div className="font-medium">{tool.lastUpdated}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
