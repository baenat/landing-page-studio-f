import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SliderControlsProps } from '../../types';

export function SliderControls({ onPrevious, onNext }: SliderControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>
    </>
  );
}