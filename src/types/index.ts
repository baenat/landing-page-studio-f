export interface Slide {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	imageMobile: string;
	alt: string;
	cta?: {
		text: string;
		link: string;
	};
}

export interface Category {
	id: number;
	name: string;
	slug: string;
	isActive?: boolean;
}

export interface SliderProps {
	slides: Slide[];
	autoPlay?: boolean;
	interval?: number;
}

export interface SliderControlsProps {
	onPrevious: () => void;
	onNext: () => void;
}

export interface SliderIndicatorsProps {
	total: number;
	current: number;
	onGoTo: (index: number) => void;
}

export interface NavigationProps {
	categories: Category[];
}

/* Productos  */

export interface Product {
	id: string;
	name: string;
	image: string;
	alt: string;
	sizes: string[];
	category: string;
	price?: number;
}

export interface CartItem {
	product: Product;
	size: string;
	quantity?: number;
}

export interface ProductModalProps {
	product: Product | null;
	onClose: () => void;
	onAddToCart: (product: Product, size: string) => void;
}

export interface ProductCardProps {
	product: Product;
	onAddClick: (product: Product) => void;
}

export interface ProductListProps {
	products: Product[];
	onAddClick: (product: Product) => void;
}