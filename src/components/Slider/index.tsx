import { useState } from 'react';
import { useAutoPlay } from '../../hooks/useAutoPlay';
import { useSlider } from '../../hooks/useSlider';
import type { SliderProps } from '../../types';
import { SliderIndicators } from './SliderIndicators';
import { SlideItem } from './SliderItem';

export function Slider({ slides, autoPlay = true, interval = 5000 }: SliderProps) {
	const { currentIndex, next, previous, goTo } = useSlider(slides.length);
	const [autoPlayEnabled, setAutoPlayEnabled] = useState(autoPlay);

	const { pause } = useAutoPlay({
		enabled: autoPlayEnabled,
		interval,
		onNext: next
	});

	const handleMouseEnter = () => {
		pause();
		setAutoPlayEnabled(false);
	};

	const handleMouseLeave = () => {
		setAutoPlayEnabled(true);
	};

	return (
		<section
			className="relative h-screen overflow-hidden"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Slides */}
			{slides.map((slide, index) => (
				<SlideItem
					key={slide.id}
					slide={slide}
					isActive={index === currentIndex}
				/>
			))}

			{/* Controles */}
			{/* <SliderControls onPrevious={previous} onNext={next} /> */}

			{/* Indicadores */}
			<SliderIndicators total={slides.length} current={currentIndex} onGoTo={goTo} />
		</section>
	);
}