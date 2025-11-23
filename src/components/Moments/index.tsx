import type { Moment } from '../../types/moments';
import { SectionTitle } from '../Title';
import { DesktopGrid } from './DesktopGrid';
import { MobileCarousel } from './MobileCarousel';

interface MomentsSectionProps {
	moments: Moment[];
}

/**
 * Sección principal de Moments
 * Galería de momentos con grid responsive
 */
export function MomentsSection({ moments }: MomentsSectionProps) {
	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Title */}
				<SectionTitle title='Moments' />

				{/* Mobile View - Carousel */}
				<div className="md:hidden">
					<MobileCarousel moments={moments} />
				</div>

				{/* Desktop View - Grid */}
				<div className="hidden md:block">
					<DesktopGrid moments={moments} />
				</div>
			</div>
		</section>
	);
}