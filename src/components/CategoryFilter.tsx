import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Filter by Category</h3>
          <p className="text-sm text-muted-foreground">Browse tools by business function</p>
        </div>
        <Badge variant="outline" className="text-xs">
          {categories.length - 1} Categories Available
        </Badge>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 transition-all duration-200 text-sm font-medium ${
              activeCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border-transparent hover:from-blue-700 hover:to-cyan-700'
                : 'bg-card/50 border-border hover:bg-card/70 hover:scale-[1.02] hover:border-blue-500/50 hover:text-blue-600'
            }`}
          >
            {category}
            {category === 'All' && (
              <Badge variant="secondary" className="ml-2 text-xs bg-blue-500/20 text-blue-600">
                {categories.length - 1}
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
