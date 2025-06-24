
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
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg border-transparent'
              : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800/70 hover:text-white hover:scale-105 hover:border-violet-500/50'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
