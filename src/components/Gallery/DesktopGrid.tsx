import type { GalleryItemProps, GalleryListProps } from "../../types/gallery";
import { GalleryItem } from "./GalleryItem";

/**
 * Vista desktop con grid de 4 columnas
 */
export function DesktopGrid({ gallery }: GalleryListProps) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5">
			{gallery.map((galleryImage) => (
				<GalleryItem key={galleryImage.id} galleryItem={galleryImage} />
			))}
		</div>
	);
}