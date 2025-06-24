import React, { useState } from 'react';
import { Search, MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search as SearchIcon, BarChart3, Shield, Database, Cpu, Brain, Users, Lock, CheckSquare, Zap } from 'lucide-react';
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
      description: 'AI-powered task management and workflow optimization tool that helps teams organize, prioritize, and track their work.',
      icon: CheckSquare,
      category: 'Productivity',
      status: 'Beta' as const,
      features: ['Smart task organization', 'Priority suggestions', 'Workflow automation', 'Team coordination'],
      gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      image: '/screenshots/ssc-tasking.jpeg',
      department: 'All Teams',
      classification: 'Internal Use',
      owner: 'Productivity Team',
      lastUpdated: '3 days ago',
      userCount: 678
    },
    {
      id: 'pixieprompt',
      title: 'PixiePrompt',
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
      id: 'docwise',
      title: 'DocWise',
      description: 'Upload and chat with your documents. Get instant answers and insights from PDFs, reports, and knowledge base articles.',
      icon: FileText,
      category: 'Document Processing',
      status: 'Live' as const,
      features: ['Document upload', 'Smart search', 'Context-aware answers', 'Multiple file formats'],
      gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      image: '/screenshots/docwise-interface.png',
      department: 'All Teams',
      classification: 'Internal Use',
      owner: 'AI Team',
      lastUpdated: '1 day ago',
      userCount: 892
    },
    {
      id: 'code-buddy',
      title: 'Code Buddy',
      description: 'AI coding assistant for code generation, debugging, documentation, and code reviews across multiple programming languages.',
      icon: Cpu,
      category: 'Development',
      status: 'Live' as const,
      features: ['Code generation', 'Bug detection', 'Documentation help', 'Code review assistance'],
      gradient: 'bg-gradient-to-r from-green-600 to-emerald-600',
      image: '/screenshots/code-buddy-editor.png',
      department: 'Engineering',
      classification: 'Internal Use',
      owner: 'Engineering Team',
      lastUpdated: '4 days ago',
      userCount: 567
    },
    {
      id: 'meetmind',
      title: 'MeetMind',
      description: 'Automatically transcribe meetings, generate summaries, and extract action items to keep teams aligned and productive.',
      icon: Mic,
      category: 'Productivity',
      status: 'Coming Soon' as const,
      features: ['Meeting transcription', 'Smart summaries', 'Action item extraction', 'Calendar integration'],
      gradient: 'bg-gradient-to-r from-amber-600 to-yellow-600',
      image: '/screenshots/meetmind-mockup.png',
      department: 'All Teams',
      classification: 'Internal Use',
      owner: 'Productivity Team',
      lastUpdated: 'In Development',
      userCount: 0
    },
    {
      id: 'insight-engine',
      title: 'Insight Engine',
      description: 'Upload spreadsheets and datasets to get instant analysis, visualizations, and insights with natural language queries.',
      icon: BarChart3,
      category: 'Analytics',
      status: 'Coming Soon' as const,
      features: ['Data visualization', 'Natural language queries', 'Automated insights', 'Export reports'],
      gradient: 'bg-gradient-to-r from-violet-600 to-purple-600',
      image: '/screenshots/insight-engine-charts.png',
      department: 'Business & Analytics',
      classification: 'Internal Use',
      owner: 'Data Team',
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
