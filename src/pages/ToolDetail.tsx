import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MessageSquare, PenTool, CheckSquare, Image, FileText, Cpu, UserCheck, Mail, Wand2, DollarSign } from 'lucide-react';

const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tools = {
    'canchat': {
      title: 'CanChat',
      description: 'Internal conversational AI assistant for answering questions, brainstorming, and helping with daily tasks across all departments. Perfect for getting quick answers and support.',
      icon: MessageSquare,
      status: 'Live' as const,
      features: ['Natural conversations', 'Task assistance', 'Knowledge lookup', 'Multi-department support', 'Quick responses', 'Context awareness'],
      userCount: 1247,
      teamMembers: [
        { name: 'Sarah Chen', role: 'Product Lead', initials: 'SC', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c6c4db?w=150&h=150&fit=crop&crop=face', email: 'sarah.chen@company.com' },
        { name: 'Mike Rodriguez', role: 'AI Engineer', initials: 'MR', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', email: 'mike.rodriguez@company.com' }
      ],
      contactEmail: 'canchat-support@company.com',
      screenshots: ['/screenshots/canchat-home.png', '/screenshots/canchat-models.png', '/screenshots/canchat.png']
    },
    'ssc-canvas': {
      title: 'SSC Canvas',
      description: 'Visual collaboration workspace for creating diagrams, wireframes, and brainstorming sessions with intelligent design assistance. Great for teams working on design projects and planning.',
      icon: PenTool,
      status: 'Beta' as const,
      features: ['Smart drawing tools', 'Template library', 'Real-time collaboration', 'Design suggestions', 'Export options', 'Version history'],
      userCount: 432,
      teamMembers: [
        { name: 'David Kim', role: 'Creative Director', initials: 'DK', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', email: 'david.kim@company.com' },
        { name: 'Lisa Wang', role: 'Frontend Developer', initials: 'LW', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', email: 'lisa.wang@company.com' }
      ],
      contactEmail: 'canvas-support@company.com',
      screenshots: ['/screenshots/ssc-canvas.webp', '/screenshots/ssc-canvas.webp', '/screenshots/ssc-canvas.webp']
    },
    'ssc-tasking': {
      title: 'SSC Tasking',
      description: 'SSC Tasking is an AI-powered document analysis platform that transforms uploaded files into intelligent briefings, enabling teams to quickly extract insights, generate executive summaries, and collaborate on document-heavy workflows through a modern, dark-mode enabled interface.',
      icon: CheckSquare,
      status: 'Beta' as const,
      features: ['Document analysis', 'Intelligent briefings', 'Executive summaries', 'Workflow collaboration', 'File transformation', 'Dark-mode interface'],
      userCount: 678,
      teamMembers: [
        { name: 'Alex Johnson', role: 'Product Manager', initials: 'AJ', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', email: 'alex.johnson@company.com' },
        { name: 'Maya Patel', role: 'UX Designer', initials: 'MP', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', email: 'maya.patel@company.com' }
      ],
      contactEmail: 'tasking-support@company.com',
      screenshots: ['/screenshots/ssc-tasking.jpeg', '/screenshots/ssc-tasking-briefing.png', '/screenshots/ssc-tasking-samples.png']
    },
    'wishmaker': {
      title: 'WishMaker',
      description: 'AI image generation tool for creating visuals, mockups, and design assets for internal presentations and materials. Currently in design phase.',
      icon: Image,
      status: 'Beta' as const,
      features: ['Text-to-image generation', 'Style customization', 'Brand guidelines', 'Multiple formats', 'Quick iterations', 'Asset library'],
      userCount: 234,
      teamMembers: [
        { name: 'Emma Zhang', role: 'Design Lead', initials: 'EZ', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face', email: 'emma.zhang@company.com' },
        { name: 'Tom Wilson', role: 'AI Researcher', initials: 'TW', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face', email: 'tom.wilson@company.com' }
      ],
      contactEmail: 'wishmaker-support@company.com',
      screenshots: ['/screenshots/pixie-prompt.webp', '/screenshots/midjourney.webp', '/screenshots/pixie-prompt.webp']
    },
    'docwise': {
      title: 'DocWise',
      description: 'Upload and chat with your documents. Get instant answers and insights from PDFs, reports, and knowledge base articles with smart search capabilities.',
      icon: FileText,
      status: 'Live' as const,
      features: ['Document upload', 'Smart search', 'Context-aware answers', 'Multiple file formats', 'Quick insights', 'Reference citations'],
      userCount: 892,
      teamMembers: [
        { name: 'James Park', role: 'Tech Lead', initials: 'JP', avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face', email: 'james.park@company.com' },
        { name: 'Sophia Lee', role: 'Data Scientist', initials: 'SL', avatar: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face', email: 'sophia.lee@company.com' }
      ],
      contactEmail: 'docwise-support@company.com',
      screenshots: ['/screenshots/docwise-interface.png', '/screenshots/docwise-upload.png', '/screenshots/docwise-results.png']
    },
    'code-buddy': {
      title: 'Code Buddy',
      description: 'AI coding assistant for code generation, debugging, documentation, and code reviews across multiple programming languages. Built for developers, by developers.',
      icon: Cpu,
      status: 'Live' as const,
      features: ['Code generation', 'Bug detection', 'Documentation help', 'Code review assistance', 'Multiple languages', 'Best practices'],
      userCount: 567,
      teamMembers: [
        { name: 'Ryan Kumar', role: 'Senior Engineer', initials: 'RK', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', email: 'ryan.kumar@company.com' },
        { name: 'Nina Chen', role: 'DevOps Engineer', initials: 'NC', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face', email: 'nina.chen@company.com' }
      ],
      contactEmail: 'codebuddy-support@company.com',
      screenshots: ['/screenshots/code-buddy-editor.png', '/screenshots/code-buddy-review.png', '/screenshots/code-buddy-debug.png']
    }
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested tool is not available.</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-cyan-600">
            Back to DSAI Hub
          </Button>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-accent mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to DSAI Hub
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
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold">{tool.title}</h1>
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/30">
                    {tool.status}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-4">{tool.description}</p>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="font-medium">{tool.userCount.toLocaleString()} people are using this</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-80">
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get Started
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Launch Tool
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Available to all team members
                </p>
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
                <CardTitle>What it can do</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
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
          </div>

          <div className="space-y-6">
            {/* Team Members */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tool.teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-blue-500/20 text-blue-600">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${tool.contactEmail}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
