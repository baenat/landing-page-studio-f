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