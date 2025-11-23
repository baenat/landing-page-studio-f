import { useState, useCallback } from 'react';

/**
 * Hook para manejar el carrusel de imágenes
 */
export function useCarousel(totalItems: number) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % totalItems);
	}, [totalItems]);

	const previous = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
	}, [totalItems]);

	const goTo = useCallback((index: number) => {
		if (index >= 0 && index < totalItems) {
			setCurrentIndex(index);
		}
	}, [totalItems]);

	return { currentIndex, next, previous, goTo };
}