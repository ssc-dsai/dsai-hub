import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, Clock, CheckCircle, Mail, User, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
      teamMembers: [
        { name: 'Sarah Chen', role: 'Lead Developer', initials: 'SC' },
        { name: 'Mike Johnson', role: 'ML Engineer', initials: 'MJ' },
        { name: 'Emily Rodriguez', role: 'UX Designer', initials: 'ER' }
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
      teamMembers: [
        { name: 'David Kim', role: 'Frontend Lead', initials: 'DK' },
        { name: 'Lisa Wang', role: 'AI Specialist', initials: 'LW' },
        { name: 'Tom Brown', role: 'Product Manager', initials: 'TB' }
      ],
      contactEmail: 'canvas-team@company.com',
      screenshots: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
    },
    // ... other tools would be here with similar structure
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-violet-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tool Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-violet-600 to-purple-600">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-violet-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Button>
        </div>

        {/* Tool Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 rounded-2xl bg-gray-800/50">
                <Icon className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white">{tool.title}</h1>
                  <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                    {tool.status}
                  </Badge>
                </div>
                <p className="text-xl text-gray-300 mb-4">{tool.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
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
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Launch Tool
                </Button>
                <div className="text-xs text-gray-400 text-center">
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
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {tool.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <img 
                            src={screenshot} 
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-full object-cover opacity-50"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
                  <CarouselNext className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
                </Carousel>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">About This Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
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
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tool.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-violet-600 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-medium">{member.name}</div>
                      <div className="text-gray-400 text-sm">{member.role}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Team */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700">
                  <Mail className="h-4 w-4 mr-2" />
                  {tool.contactEmail}
                </Button>
                <Button variant="outline" className="w-full justify-start bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Team Channel
                </Button>
              </CardContent>
            </Card>

            {/* Tool Information */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Tool Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Category</div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 border-gray-600">
                    {tool.category}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Status</div>
                  <div className="text-white">{tool.status}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Last Updated</div>
                  <div className="text-white">{tool.lastUpdated}</div>
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
