import React from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
