import { useState, useCallback } from 'react';

/**
 * Hook para manejar el carrusel de productos en móvil
 */
export function useProductCarousel(totalProducts: number) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % totalProducts);
	}, [totalProducts]);

	const previous = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
	}, [totalProducts]);

	const goTo = useCallback((index: number) => {
		if (index >= 0 && index < totalProducts) {
			setCurrentIndex(index);
		}
	}, [totalProducts]);

	return { currentIndex, next, previous, goTo };
}