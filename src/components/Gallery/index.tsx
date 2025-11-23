import type { GalleryImage } from '../../types/gallery';
import { SectionTitle } from '../Title';
import { DesktopGrid } from './DesktopGrid';
import { MobileCarousel } from './MobileCarousel';

interface GallerySectionProps {
	gallery: GalleryImage[];
}

/**
 * Sección principal de Gallery
 * Galería de imágenes con grid responsive
 */
export function GallerySection({ gallery }: GallerySectionProps) {
	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Title */}
				<SectionTitle title='Session Photos' />

				{/* Mobile View - Carousel */}
				<div className="md:hidden">
					<MobileCarousel gallery={gallery} />
				</div>

				{/* Desktop View - Grid */}
				<div className="hidden md:block">
					<DesktopGrid gallery={gallery} />
				</div>
			</div>
		</section>
	);
}