
import type { MomentsListProps } from '../../types/moments';
import { MomentCard } from './MomentCard';

/**
 * Vista desktop con grid de 4 columnas
 */
export function DesktopGrid({ moments }: MomentsListProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{moments.map((moment) => (
				<MomentCard key={moment.id} moment={moment} />
			))}
		</div>
	);
}