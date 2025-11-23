export interface GalleryImage {
	id: string;
	image: string;
	alt: string;
}

export interface GalleryItemProps {
	galleryItem: GalleryImage;
}

export interface GalleryListProps {
	gallery: GalleryImage[];
}