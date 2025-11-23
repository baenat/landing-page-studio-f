import type { MomentCardProps } from '../../types/moments';

/**
 * Card individual de momento
 * Muestra imagen, título, descripción y fecha
 */
export function MomentCard({ moment }: MomentCardProps) {

	return (
		<div
			className="relative"
		>
			{/* Image Container */}
			<div className={`group relative aspect-4/5 overflow-hidden mb-4 rounded-sm ${moment.isAvailable ? '' : 'grayscale'}`}>
				<img
					src={moment.image}
					alt={moment.alt}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>

				{/* Date Overlay (bottom bar) */}
				<div
					className={`absolute bottom-4 left-20 right-20 transition-all duration-300}`}
				>
					<div className={`backdrop-blur-sm px-2 py-1 text-center ${moment.isAvailable ? 'bg-amber-900 group-hover:opacity-0' : 'bg-black/50'}`}>
						<span className="text-white text-sm font-medium">
							{moment.date}
						</span>
					</div>
				</div>

				{/* Hover Overlay */}
				<div className="absolute inset-0 transition-colors duration-300 pointer-events-none" />
			</div>

			{/* Content */}
			<div className="space-y-2">
				<h3 className="text-lg font-semibold text-gray-900">
					{moment.title}
				</h3>
				<p className="text-sm text-gray-600 leading-relaxed">
					{moment.description}
				</p>
			</div>
		</div>
	);
}