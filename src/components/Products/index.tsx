import { useState } from 'react';
import { useAlert } from '../../contexts/AlertContext';
import type { CartItem, Product } from '../../types';
import { DesktopGrid } from './DesktopGrid';
import { MobileCarousel } from './MobileCarousel';
import { ProductModal } from './ProductModal';
import { SectionTitle } from '../Title';

interface ProductsSectionProps {
	products: Product[];
}

/**
 * Sección principal de productos "New Arrivals"
 */
export function ProductsSection({ products }: ProductsSectionProps) {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [cart, setCart] = useState<CartItem[]>([]);
	const { success } = useAlert();

	const handleAddClick = (product: Product) => {
		setSelectedProduct(product);
	};

	const handleAddToCart = (product: Product, size: string) => {
		setCart(prev => [...prev, { product, size, quantity: 1 }]);
		console.log('Agregado al carrito:', { product: product.name, size });
		success('¡Agregado al carrito!', `${product.name} - Talla ${size}`);
	};

	const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Title */}
				<SectionTitle title='NEW ARRIVALS' />

				{/* Mobile View - Carrusel */}
				<div className="md:hidden">
					<MobileCarousel products={products} onAddClick={handleAddClick} />
				</div>

				{/* Desktop View - Grid */}
				<div className="hidden md:block">
					<DesktopGrid products={products} onAddClick={handleAddClick} />
				</div>
			</div>

			{/* Product Modal */}
			<ProductModal
				product={selectedProduct}
				onClose={() => setSelectedProduct(null)}
				onAddToCart={handleAddToCart}
			/>
		</section>
	);
}