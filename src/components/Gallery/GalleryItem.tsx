import type { GalleryItemProps } from '../../types/gallery';

/**
 * Item individual de la galería
 */
export function GalleryItem({ galleryItem: gallery }: GalleryItemProps) {

	return (
		<div
			className="relative"
		>
			{/* Image Container */}
			<div className={`group aspect-4/5 overflow-hidden`}>
				<img
					src={gallery.image}
					alt={gallery.alt}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
		</div>
	);
}