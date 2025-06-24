import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search } from 'lucide-react';

const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tools = {
    'ai-chat-assistant': {
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI that helps with questions, brainstorming, and problem-solving across various domains.',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Real-time responses'],
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500',
      pricing: 'Free with premium options',
      rating: 4.8,
      users: '10K+',
      lastUpdated: '2 days ago'
    },
    'ai-canvas': {
      title: 'AI Canvas',
      description: 'Visual collaboration workspace with AI-powered drawing, diagramming, and creative assistance tools.',
      icon: PenTool,
      category: 'Creative',
      status: 'Live' as const,
      features: ['Smart drawing tools', 'Auto-completion', 'Collaborative editing', 'Template library'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      pricing: 'Free trial available',
      rating: 4.6,
      users: '5K+',
      lastUpdated: '1 week ago'
    },
    // ... other tools would be here
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tool Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-purple-600">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <div className={`p-4 rounded-2xl bg-white/10`}>
                <Icon className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white">{tool.title}</h1>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    {tool.status}
                  </Badge>
                </div>
                <p className="text-xl text-gray-300 mb-4">{tool.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-white">{tool.rating}</span>
                  </div>
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
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Pricing:</strong> {tool.pricing}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Launch Tool
                </Button>
                <div className="text-xs text-gray-400 text-center">
                  By using this tool, you agree to our terms of service
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
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

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">About This Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  This tool represents the cutting edge of AI technology, designed to enhance productivity 
                  and creativity in the {tool.category.toLowerCase()} space. Our team has carefully curated 
                  and integrated this solution to provide the best possible experience for our internal workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Tool Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Category</div>
                  <Badge variant="secondary" className="bg-white/10 text-gray-300 border-white/20">
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
