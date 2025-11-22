import type { SliderIndicatorsProps } from "../../types";

export function SliderIndicators({ total, current, onGoTo }: SliderIndicatorsProps) {
	return (
		<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
			{Array.from({ length: total }).map((_, index) => (
				<button
					key={index}
					onClick={() => onGoTo(index)}
					className={`h-1.5 rounded-full transition-all duration-300 w-10 cursor-pointer ${index === current ? 'bg-[#B67839]' : 'bg-white/50 hover:bg-white/80'
						}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	);
}