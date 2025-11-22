import { useState, useCallback } from 'react';

/**
 * Hook para manejar la navegación del slider
 */
export function useSlider(totalSlides: number) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
	}, [totalSlides]);

	const previous = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	}, [totalSlides]);

	const goTo = useCallback((index: number) => {
		if (index >= 0 && index < totalSlides) {
			setCurrentIndex(index);
		}
	}, [totalSlides]);

	return { currentIndex, next, previous, goTo };
}