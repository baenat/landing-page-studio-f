import type { ProductListProps } from '../../types';
import { ProductCard } from './ProductCard';

/**
 * Vista desktop con grid de productos
 */
export function DesktopGrid({ products, onAddClick }: ProductListProps) {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onAddClick={onAddClick}
				/>
			))}
		</div>
	);
}