import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryListProps } from '../../types/gallery';
import { useCarousel } from '../../hooks/useCarousel';
import { GalleryItem } from './GalleryItem';

/**
 * Vista mobile con carrusel
 */
export function MobileCarousel({ gallery }: GalleryListProps) {
	const { currentIndex, next, previous } = useCarousel(gallery.length);
	const currentMoment = gallery[currentIndex];

	return (
		<div className="relative px-4">
			{/* Current Moment */}
			<GalleryItem galleryItem={currentMoment} />

			{/* Navigation Controls */}
			<button
				onClick={previous}
				className="absolute left-2 top-[40%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-20"
				aria-label="Momento anterior"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				onClick={next}
				className="absolute right-2 top-[40%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-20"
				aria-label="Siguiente momento"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			{/* Indicators */}
			<div className="flex justify-center gap-2 mt-6">
				{gallery.map((_, index) => (
					<div
						key={index}
						className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 w-2'
							}`}
					/>
				))}
			</div>
		</div>
	);
}