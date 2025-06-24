
import React, { useState } from 'react';
import { Search, MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search as SearchIcon } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    {
      id: 'ai-chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI for questions and problem-solving',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Real-time responses'],
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500',
      image: '/placeholder.svg'
    },
    {
      id: 'ai-canvas',
      title: 'AI Canvas',
      description: 'Visual collaboration workspace with AI-powered tools',
      icon: PenTool,
      category: 'Creative',
      status: 'Live' as const,
      features: ['Smart drawing tools', 'Auto-completion', 'Collaborative editing', 'Template library'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      image: '/placeholder.svg'
    },
    {
      id: 'document-generator',
      title: 'Document Generator',
      description: 'Automated document creation with AI-powered content',
      icon: FileText,
      category: 'Productivity',
      status: 'Live' as const,
      features: ['Template generation', 'Content suggestions', 'Format optimization', 'Version control'],
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      image: '/placeholder.svg'
    },
    {
      id: 'text-to-image',
      title: 'Text to Image',
      description: 'Generate stunning images from text descriptions',
      icon: Image,
      category: 'Creative',
      status: 'Live' as const,
      features: ['High-quality generation', 'Style customization', 'Batch processing', 'Multiple formats'],
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
      image: '/placeholder.svg'
    },
    {
      id: 'text-to-slides',
      title: 'Text to Slides',
      description: 'Transform text into professional presentations',
      icon: Presentation,
      category: 'Productivity',
      status: 'Beta' as const,
      features: ['Auto-layout design', 'Theme selection', 'Content structuring', 'Export options'],
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      image: '/placeholder.svg'
    },
    {
      id: 'video-analyzer',
      title: 'Video Analyzer',
      description: 'AI-powered video content analysis and insights',
      icon: Video,
      category: 'Analysis',
      status: 'Beta' as const,
      features: ['Content transcription', 'Scene detection', 'Sentiment analysis', 'Summary generation'],
      gradient: 'bg-gradient-to-r from-emerald-500 to-green-500',
      image: '/placeholder.svg'
    },
    {
      id: 'voice-assistant',
      title: 'Voice Assistant',
      description: 'Speech-to-text and text-to-speech AI tool',
      icon: Mic,
      category: 'Communication',
      status: 'Coming Soon' as const,
      features: ['Voice commands', 'Real-time transcription', 'Multi-language', 'Custom wake words'],
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      image: '/placeholder.svg'
    },
    {
      id: 'smart-search',
      title: 'Smart Search',
      description: 'Intelligent search with contextual understanding',
      icon: SearchIcon,
      category: 'Analysis',
      status: 'Coming Soon' as const,
      features: ['Semantic search', 'Personalization', 'Multi-source indexing', 'Advanced filters'],
      gradient: 'bg-gradient-to-r from-teal-500 to-blue-500',
      image: '/placeholder.svg'
    }
  ];

  const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)))];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-50 dark:to-violet-950">
      <div className="container mx-auto px-6 py-12">
        <Header />
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-card/50 border border-border rounded-xl placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 focus:bg-card/70 transition-all duration-200"
            />
          </div>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
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
