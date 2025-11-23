import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product, CartItem } from '../../types';
import { ProductModal } from './ProductModal';
import { MobileCarousel } from './MobileCarousel';
import { DesktopGrid } from './DesktopGrid';

interface ProductsSectionProps {
	products: Product[];
}

/**
 * Sección principal de productos "New Arrivals"
 */
export function ProductsSection({ products }: ProductsSectionProps) {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [cart, setCart] = useState<CartItem[]>([]);

	const handleAddClick = (product: Product) => {
		setSelectedProduct(product);
	};

	const handleAddToCart = (product: Product, size: string) => {
		setCart(prev => [...prev, { product, size, quantity: 1 }]);
		console.log('Agregado al carrito:', { product: product.name, size });
	};

	const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

	return (
		<section className="bg-gray-50 py-16">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Title */}
				<h2 className="text-3xl md:text-4xl font-serif text-center mb-12 tracking-wide">
					NEW ARRIVALS
					<div className="w-24 h-0.5 bg-gray-900 mx-auto mt-2" />
				</h2>

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