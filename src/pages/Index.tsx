
import React, { useState } from 'react';
import { MessageSquare, PenTool, FileText, Image, Presentation, Video, Mic, Search } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import StatsSection from '@/components/StatsSection';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const tools = [
    {
      id: 'ai-chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI that helps with questions, brainstorming, and problem-solving across various domains.',
      icon: MessageSquare,
      category: 'Communication',
      status: 'Live' as const,
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Real-time responses'],
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      id: 'ai-canvas',
      title: 'AI Canvas',
      description: 'Visual collaboration workspace with AI-powered drawing, diagramming, and creative assistance tools.',
      icon: PenTool,
      category: 'Creative',
      status: 'Live' as const,
      features: ['Smart drawing tools', 'Auto-completion', 'Collaborative editing', 'Template library'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 'document-generator',
      title: 'Document Generator',
      description: 'Automated document creation and editing with AI-powered content generation and formatting.',
      icon: FileText,
      category: 'Productivity',
      status: 'Live' as const,
      features: ['Template generation', 'Content suggestions', 'Format optimization', 'Version control'],
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      id: 'text-to-image',
      title: 'Text to Image',
      description: 'Generate stunning images from text descriptions using advanced AI image generation models.',
      icon: Image,
      category: 'Creative',
      status: 'Live' as const,
      features: ['High-quality generation', 'Style customization', 'Batch processing', 'Multiple formats'],
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      id: 'text-to-slides',
      title: 'Text to Slides',
      description: 'Transform your text content into professional presentations with AI-designed layouts and visuals.',
      icon: Presentation,
      category: 'Productivity',
      status: 'Beta' as const,
      features: ['Auto-layout design', 'Theme selection', 'Content structuring', 'Export options'],
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      id: 'video-analyzer',
      title: 'Video Analyzer',
      description: 'AI-powered video content analysis, transcription, and insights generation for multimedia content.',
      icon: Video,
      category: 'Analysis',
      status: 'Beta' as const,
      features: ['Content transcription', 'Scene detection', 'Sentiment analysis', 'Summary generation'],
      gradient: 'bg-gradient-to-r from-emerald-500 to-green-500'
    },
    {
      id: 'voice-assistant',
      title: 'Voice Assistant',
      description: 'Speech-to-text and text-to-speech AI tool for hands-free interaction and accessibility.',
      icon: Mic,
      category: 'Communication',
      status: 'Coming Soon' as const,
      features: ['Voice commands', 'Real-time transcription', 'Multi-language', 'Custom wake words'],
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    },
    {
      id: 'smart-search',
      title: 'Smart Search',
      description: 'Intelligent search engine that understands context and provides relevant, personalized results.',
      icon: Search,
      category: 'Analysis',
      status: 'Coming Soon' as const,
      features: ['Semantic search', 'Personalization', 'Multi-source indexing', 'Advanced filters'],
      gradient: 'bg-gradient-to-r from-teal-500 to-blue-500'
    }
  ];

  const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)))];

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <Header />
        <StatsSection />
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
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No tools found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
