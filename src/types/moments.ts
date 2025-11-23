export interface Moment {
	id: string;
	title: string;
	description: string;
	image: string;
	date: string;
	alt: string;
	isAvailable: boolean;
}

export interface MomentCardProps {
	moment: Moment;
}

export interface MomentsListProps {
	moments: Moment[];
}