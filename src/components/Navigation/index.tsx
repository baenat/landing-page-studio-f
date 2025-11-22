import { useState } from 'react';
import type { Category, NavigationProps } from '../../types';

export function Navigation({ categories: initialCategories }: NavigationProps) {
  const [categories, setCategories] = useState(initialCategories);

  const handleCategoryClick = (clickedCategory: Category) => {
    setCategories((prev: any) =>
      prev.map((cat: any) => ({
        ...cat,
        isActive: cat.id === clickedCategory.id
      }))
    );
  };

  return (
    <nav className="fixed flex justify-center items-center gap-8 pt-[4vh] right-0 left-0 z-50">
      {categories.map(category => (
        <a
          key={category.id}
          href={`#${category.slug}`}
          onClick={(e) => {
            e.preventDefault();
            handleCategoryClick(category);
          }}
          className={`text-sm md:text-base tracking-[0.2em] transition-all duration-300 relative group ${
            category.isActive 
              ? 'text-white font-semibold' 
              : 'text-white/90 hover:text-white hover:scale-105'
          }`}
        >
          {category.name}
          {category.isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
          )}
          {!category.isActive && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
          )}
        </a>
      ))}
    </nav>
  );
}