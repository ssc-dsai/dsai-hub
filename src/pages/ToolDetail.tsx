import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, Clock, CheckCircle, Mail, User, Building2, Shield, Activity, BarChart3, MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search, Database, Cpu, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tools = {
    'enterprise-chatbot': {
      title: 'Enterprise AI Assistant',
      description: 'A secure conversational AI system designed for internal knowledge management and employee support. This enterprise-grade assistant integrates with our SSO infrastructure and maintains complete audit trails for compliance.',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Enterprise SSO', 'Data governance', 'Audit logging', 'Custom knowledge base', 'Multi-department training', 'Compliance reporting'],
      gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      department: 'IT Services',
      classification: 'Internal Use',
      owner: 'Digital Workplace Team',
      userCount: 1247,
      lastUpdated: '2 days ago',
      teamMembers: [
        { name: 'Sarah Chen', role: 'Technical Lead', initials: 'SC', avatar: '/placeholder.svg', email: 'sarah.chen@company.com' },
        { name: 'Mike Rodriguez', role: 'AI Engineer', initials: 'MR', avatar: '/placeholder.svg', email: 'mike.rodriguez@company.com' },
        { name: 'Emily Watson', role: 'Product Manager', initials: 'EW', avatar: '/placeholder.svg', email: 'emily.watson@company.com' }
      ],
      contactEmail: 'dsai-chatbot@company.com',
      screenshots: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
      supportLevel: 'Business Hours',
      uptime: '99.9%',
      avgResponseTime: '0.8s',
      securityClearance: 'Level 2',
      dataResidency: 'On-premises',
      integrations: ['Active Directory', 'SharePoint', 'Teams', 'ServiceNow']
    },
    'document-intelligence': {
      title: 'Document Intelligence Suite',
      description: 'Advanced AI-powered document processing platform that handles extraction, classification, and analysis of enterprise documents while maintaining strict data governance and audit compliance.',
      icon: FileText,
      category: 'Document Processing',
      status: 'Live' as const,
      features: ['OCR processing', 'Data extraction', 'Classification', 'Workflow integration', 'Batch processing', 'Custom templates'],
      gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      department: 'Operations',
      classification: 'Confidential',
      owner: 'Process Automation Team',
      userCount: 892,
      lastUpdated: '1 week ago',
      teamMembers: [
        { name: 'David Kim', role: 'Solutions Architect', initials: 'DK', avatar: '/placeholder.svg', email: 'david.kim@company.com' },
        { name: 'Lisa Wang', role: 'ML Engineer', initials: 'LW', avatar: '/placeholder.svg', email: 'lisa.wang@company.com' },
        { name: 'James Wilson', role: 'Business Analyst', initials: 'JW', avatar: '/placeholder.svg', email: 'james.wilson@company.com' }
      ],
      contactEmail: 'doc-intelligence@company.com',
      screenshots: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
      supportLevel: '24/7',
      uptime: '99.95%',
      avgResponseTime: '1.2s',
      securityClearance: 'Level 3',
      dataResidency: 'On-premises',
      integrations: ['ECM System', 'SAP', 'Oracle', 'Azure AD']
    }
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested tool is not available or has been restricted.</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-cyan-600">
            Back to Tools Hub
          </Button>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;
  const classificationColors = {
    'Internal Use': 'bg-green-500/20 text-green-600 border-green-500/30',
    'Confidential': 'bg-amber-500/20 text-amber-600 border-amber-500/30',
    'Restricted': 'bg-orange-500/20 text-orange-600 border-orange-500/30',
    'Highly Restricted': 'bg-red-500/20 text-red-600 border-red-500/30'
  };

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
            Back to Tools Hub
          </Button>
          <div className="flex items-center space-x-2 ml-auto">
            <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
              <Activity className="h-3 w-3 mr-1" />
              {tool.uptime} Uptime
            </Badge>
            <Badge variant="outline" className={classificationColors[tool.classification as keyof typeof classificationColors]}>
              <Shield className="h-3 w-3 mr-1" />
              {tool.classification}
            </Badge>
          </div>
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
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/30 dark:text-green-400">
                    {tool.status}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-4">{tool.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    <div>
                      <div className="font-medium">{tool.userCount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Active Users</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    <div>
                      <div className="font-medium">{tool.avgResponseTime}</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-purple-500" />
                    <div>
                      <div className="font-medium">{tool.department}</div>
                      <div className="text-xs text-muted-foreground">Department</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-orange-500" />
                    <div>
                      <div className="font-medium">{tool.securityClearance}</div>
                      <div className="text-xs text-muted-foreground">Security Level</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-80">
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Access Tool
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Launch Application
                </Button>
                <div className="text-xs text-muted-foreground text-center">
                  <div className="mb-2">Requires enterprise authentication</div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Connected to corporate network</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="text-xs space-y-1">
                    <div><strong>Support:</strong> {tool.supportLevel}</div>
                    <div><strong>Data Residency:</strong> {tool.dataResidency}</div>
                    <div><strong>Last Updated:</strong> {tool.lastUpdated}</div>
                  </div>
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
                <CardTitle>Enterprise Features</CardTitle>
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

            {/* Integrations */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>System Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tool.integrations.map((integration, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Application Screenshots</CardTitle>
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
                <CardTitle>Development Team</CardTitle>
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

            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Support Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <a href={`mailto:${tool.contactEmail}`} className="text-sm hover:text-blue-600 transition-colors">
                    {tool.contactEmail}
                  </a>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">Owner: {tool.owner}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <Badge className="w-full justify-center bg-blue-500/20 text-blue-600 border-blue-500/30">
                    Internal Tool - No External Access
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Info */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle>Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Classification</span>
                  <Badge className={classificationColors[tool.classification as keyof typeof classificationColors]}>
                    {tool.classification}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Level</span>
                  <Badge variant="outline">{tool.securityClearance}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Residency</span>
                  <Badge variant="outline">{tool.dataResidency}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uptime SLA</span>
                  <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                    {tool.uptime}
                  </Badge>
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
