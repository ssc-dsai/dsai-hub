import React, { useState } from 'react';
import { Search, MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search as SearchIcon, BarChart3, Shield, Database, Cpu, Brain, Users, Lock, CheckSquare, Zap, UserCheck, Mail, Wand2, DollarSign } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    {
      id: 'canchat',
      title: 'CanChat',
      description: 'Internal conversational AI assistant for answering questions, brainstorming, and helping with daily tasks across all departments.',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Natural conversations', 'Task assistance', 'Knowledge lookup', 'Multi-department support'],
      gradient: 'bg-gradient-to-r from-green-600 to-teal-600',
      image: '/screenshots/canchat-home.png',
      department: 'All Teams',
      classification: 'Internal Use',
      owner: 'AI Team',
      lastUpdated: '2 days ago',
      userCount: 1247,
      featured: true
    },
    {
      id: 'ssc-canvas',
      title: 'SSC Canvas',
      description: 'Visual collaboration workspace for creating diagrams, wireframes, and brainstorming sessions with intelligent design assistance.',
      icon: PenTool,
      category: 'Creative',
      status: 'Beta' as const,
      features: ['Smart drawing tools', 'Template library', 'Real-time collaboration', 'Design suggestions'],
      gradient: 'bg-gradient-to-r from-purple-600 to-pink-600',
      image: '/screenshots/ssc-canvas.webp',
      department: 'Design & Product',
      classification: 'Internal Use',
      owner: 'Design Team',
      lastUpdated: '1 week ago',
      userCount: 432
    },
    {
      id: 'ssc-tasking',
      title: 'SSC Tasking',
      description: 'SSC Tasking is an AI-powered document analysis platform that transforms uploaded files into intelligent briefings, enabling teams to quickly extract insights, generate executive summaries, and collaborate on document-heavy workflows through a modern, dark-mode enabled interface.',
      icon: CheckSquare,
      category: 'Document Processing',
      status: 'Beta' as const,
      features: ['Document analysis', 'Intelligent briefings', 'Executive summaries', 'Workflow collaboration'],
      gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      image: '/screenshots/ssc-tasking.jpeg',
      department: 'All Teams',
      classification: 'Internal Use',
      owner: 'AI Team',
      lastUpdated: '3 days ago',
      userCount: 678
    },
    {
      id: 'wishmaker',
      title: 'WishMaker',
      description: 'AI image generation tool for creating visuals, mockups, and design assets for internal presentations and materials.',
      icon: Image,
      category: 'Creative',
      status: 'Beta' as const,
      features: ['Text-to-image generation', 'Style customization', 'Brand guidelines', 'Multiple formats'],
      gradient: 'bg-gradient-to-r from-orange-600 to-red-600',
      image: '/screenshots/pixie-prompt.webp',
      department: 'Marketing & Design',
      classification: 'Internal Use',
      owner: 'Creative Team',
      lastUpdated: '5 days ago',
      userCount: 234
    },
    {
      id: 'hr-resume',
      title: 'HR Resume | Skill Finder',
      description: 'AI-powered resume analysis and skill matching platform that helps HR teams quickly identify candidate qualifications, extract key skills, and match talent to job requirements.',
      icon: UserCheck,
      category: 'HR & Recruitment',
      status: 'Coming Soon' as const,
      features: ['Resume parsing', 'Skill extraction', 'Candidate matching', 'Qualification analysis'],
      gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      image: '/placeholder.svg',
      department: 'Human Resources',
      classification: 'Internal Use',
      owner: 'HR Team',
      lastUpdated: '1 day ago',
      userCount: 156
    },
    {
      id: 'exec-correspondences',
      title: 'Exec Correspondences',
      description: 'Executive communication assistant that helps draft, review, and optimize high-level correspondence, ensuring professional tone and strategic messaging alignment.',
      icon: Mail,
      category: 'Communication',
      status: 'Coming Soon' as const,
      features: ['Communication drafting', 'Tone optimization', 'Strategic messaging', 'Executive templates'],
      gradient: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      image: '/placeholder.svg',
      department: 'Executive Office',
      classification: 'Internal Use',
      owner: 'Executive Team',
      lastUpdated: '2 days ago',
      userCount: 45
    },
    {
      id: 'specgenie',
      title: 'SpecGenie',
      description: 'Turn product briefs or feature ideas into PRDs, user stories, or Figma wireframes. Streamlines the product specification process from concept to detailed documentation.',
      icon: Wand2,
      category: 'Product Management',
      status: 'Coming Soon' as const,
      features: ['PRD generation', 'User story creation', 'Wireframe templates', 'Specification automation'],
      gradient: 'bg-gradient-to-r from-pink-600 to-rose-600',
      image: '/placeholder.svg',
      department: 'Product Team',
      classification: 'Internal Use',
      owner: 'Product Team',
      lastUpdated: '3 days ago',
      userCount: 89
    },
    {
      id: 'budgetlens',
      title: 'BudgetLens',
      description: 'AI review of budget items, highlighting overlaps, underused funds, or odd spikes. Provides intelligent financial analysis and optimization recommendations.',
      icon: DollarSign,
      category: 'Finance',
      status: 'Coming Soon' as const,
      features: ['Budget analysis', 'Overlap detection', 'Spend optimization', 'Financial insights'],
      gradient: 'bg-gradient-to-r from-green-600 to-emerald-600',
      image: '/placeholder.svg',
      department: 'Finance',
      classification: 'Internal Use',
      owner: 'Finance Team',
      lastUpdated: 'In Development',
      userCount: 0
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
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-card/50 border border-border rounded-xl placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:bg-card/70 transition-all duration-200 text-base"
            />
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
              featured={tool.featured}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No tools found</h3>
            <p className="text-muted-foreground">Try a different search term or category</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
