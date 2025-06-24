
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
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-transparent'
              : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:text-white hover:scale-105'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
