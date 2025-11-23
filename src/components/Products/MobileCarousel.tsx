import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../../hooks/useCarousel';
import type { ProductListProps } from '../../types';
import { ProductCard } from './ProductCard';

/**
 * Vista mobile con carrusel y controles
 */
export function MobileCarousel({ products, onAddClick }: ProductListProps) {
	const { currentIndex, next, previous } = useCarousel(products.length);
	const currentProduct = products[currentIndex];

	return (
		<div className="relative">
			{/* Product Card */}
			<div className="px-4">
				<ProductCard product={currentProduct} onAddClick={onAddClick} />
			</div>

			{/* Navigation Controls */}
			<button
				onClick={previous}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-30"
				aria-label="Producto anterior"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				onClick={next}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-30"
				aria-label="Siguiente producto"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Indicators */}
			<div className="flex justify-center gap-2 mt-6">
				{products.map((_, index) => (
					<div
						key={index}
						className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-900 w-8' : 'bg-gray-300 w-2'
							}`}
					/>
				))}
			</div>
		</div>
	);
}