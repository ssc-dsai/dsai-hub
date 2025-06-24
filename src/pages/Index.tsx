import React, { useState } from 'react';
import { Search, MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search as SearchIcon, BarChart3, Shield, Database, Cpu, Brain, Users, Lock } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    {
      id: 'enterprise-chatbot',
      title: 'Enterprise AI Assistant',
      description: 'Secure conversational AI for internal knowledge management and employee support with enterprise SSO integration',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Enterprise SSO', 'Data governance', 'Audit logging', 'Custom knowledge base'],
      gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      image: '/placeholder.svg',
      department: 'IT Services',
      classification: 'Internal Use',
      owner: 'Digital Workplace Team',
      lastUpdated: '2 days ago',
      userCount: 1247
    },
    {
      id: 'document-intelligence',
      title: 'Document Intelligence Suite',
      description: 'AI-powered document processing, extraction, and analysis for enterprise document workflows',
      icon: FileText,
      category: 'Document Processing',
      status: 'Live' as const,
      features: ['OCR processing', 'Data extraction', 'Classification', 'Workflow integration'],
      gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      image: '/placeholder.svg',
      department: 'Operations',
      classification: 'Confidential',
      owner: 'Process Automation Team',
      lastUpdated: '1 week ago',
      userCount: 892
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Engine',
      description: 'Machine learning platform for business forecasting, risk assessment, and strategic planning',
      icon: BarChart3,
      category: 'Analytics',
      status: 'Live' as const,
      features: ['Time series forecasting', 'Risk modeling', 'Custom dashboards', 'API integration'],
      gradient: 'bg-gradient-to-r from-violet-600 to-purple-600',
      image: '/placeholder.svg',
      department: 'Business Intelligence',
      classification: 'Restricted',
      owner: 'Data Science Team',
      lastUpdated: '3 days ago',
      userCount: 445
    },
    {
      id: 'compliance-monitor',
      title: 'AI Compliance Monitor',
      description: 'Automated compliance checking and regulatory analysis for enterprise policies and procedures',
      icon: Shield,
      category: 'Compliance',
      status: 'Live' as const,
      features: ['Policy scanning', 'Risk assessment', 'Compliance reporting', 'Alert system'],
      gradient: 'bg-gradient-to-r from-red-600 to-orange-600',
      image: '/placeholder.svg',
      department: 'Legal & Compliance',
      classification: 'Confidential',
      owner: 'Governance Team',
      lastUpdated: '5 days ago',
      userCount: 234
    },
    {
      id: 'data-fabric',
      title: 'Enterprise Data Fabric',
      description: 'Intelligent data discovery, cataloging, and governance platform for enterprise data assets',
      icon: Database,
      category: 'Data Management',
      status: 'Beta' as const,
      features: ['Data cataloging', 'Lineage tracking', 'Quality monitoring', 'Access control'],
      gradient: 'bg-gradient-to-r from-indigo-600 to-blue-600',
      image: '/placeholder.svg',
      department: 'Data Engineering',
      classification: 'Internal Use',
      owner: 'Data Platform Team',
      lastUpdated: '1 day ago',
      userCount: 156
    },
    {
      id: 'code-assistant',
      title: 'Enterprise Code Assistant',
      description: 'AI-powered development assistant with enterprise security and code quality enforcement',
      icon: Cpu,
      category: 'Development',
      status: 'Beta' as const,
      features: ['Code generation', 'Security scanning', 'Best practices', 'Documentation'],
      gradient: 'bg-gradient-to-r from-green-600 to-emerald-600',
      image: '/placeholder.svg',
      department: 'Engineering',
      classification: 'Internal Use',
      owner: 'Platform Engineering',
      lastUpdated: '4 days ago',
      userCount: 678
    },
    {
      id: 'meeting-intelligence',
      title: 'Meeting Intelligence Platform',
      description: 'AI-powered meeting transcription, summarization, and action item extraction for enterprise meetings',
      icon: Mic,
      category: 'Communication',
      status: 'Coming Soon' as const,
      features: ['Real-time transcription', 'Action items', 'Meeting summaries', 'Calendar integration'],
      gradient: 'bg-gradient-to-r from-amber-600 to-yellow-600',
      image: '/placeholder.svg',
      department: 'Collaboration Tools',
      classification: 'Internal Use',
      owner: 'Unified Communications',
      lastUpdated: 'In Development',
      userCount: 0
    },
    {
      id: 'security-analyzer',
      title: 'AI Security Analyzer',
      description: 'Advanced threat detection and security incident analysis using machine learning algorithms',
      icon: Lock,
      category: 'Security',
      status: 'Coming Soon' as const,
      features: ['Threat detection', 'Incident analysis', 'Behavioral monitoring', 'Risk scoring'],
      gradient: 'bg-gradient-to-r from-slate-600 to-gray-600',
      image: '/placeholder.svg',
      department: 'Cybersecurity',
      classification: 'Highly Restricted',
      owner: 'Security Operations Center',
      lastUpdated: 'In Development',
      userCount: 0
    },
    {
      id: 'hr-assistant',
      title: 'HR Intelligence Platform',
      description: 'AI-powered human resources assistant for employee services, policy guidance, and workforce analytics',
      icon: Users,
      category: 'Human Resources',
      status: 'Beta' as const,
      features: ['Policy guidance', 'Employee self-service', 'Workforce analytics', 'Performance insights'],
      gradient: 'bg-gradient-to-r from-pink-600 to-rose-600',
      image: '/placeholder.svg',
      department: 'Human Resources',
      classification: 'Confidential',
      owner: 'HR Digital Services',
      lastUpdated: '6 days ago',
      userCount: 324
    },
    {
      id: 'visual-generator',
      title: 'Enterprise Visual Generator',
      description: 'Brand-compliant AI image and presentation generation for internal communications and materials',
      icon: Presentation,
      category: 'Creative',
      status: 'Live' as const,
      features: ['Brand compliance', 'Template generation', 'Multi-format export', 'Asset management'],
      gradient: 'bg-gradient-to-r from-cyan-600 to-blue-600',
      image: '/placeholder.svg',
      department: 'Corporate Communications',
      classification: 'Internal Use',
      owner: 'Brand & Marketing',
      lastUpdated: '1 week ago',
      userCount: 567
    }
  ];

  const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)))];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.owner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950">
      <div className="container mx-auto px-6 py-8">
        <Header />
        
        <StatsSection />
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools, departments, or owners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-card/50 border border-border rounded-xl placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:bg-card/70 transition-all duration-200 text-base"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>Enterprise Search</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={index}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category={tool.category}
              status={tool.status}
              features={tool.features}
              gradient={tool.gradient}
              image={tool.image}
              department={tool.department}
              classification={tool.classification}
              owner={tool.owner}
              userCount={tool.userCount}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No tools found</h3>
            <p className="text-muted-foreground">Try a different search term, category, or department filter</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
