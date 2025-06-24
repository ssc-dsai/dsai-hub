
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
          className={`px-6 py-2 transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg border-transparent hover:from-violet-700 hover:to-purple-700'
              : 'bg-card/50 border-border hover:bg-card/70 hover:scale-105 hover:border-violet-500/50'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
