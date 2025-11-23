import { Plus, ShoppingBag } from 'lucide-react';
import type { Product, ProductCardProps } from '../../types';
import { useState } from 'react';
import { useAlert } from '../../contexts/AlertContext';

/**
 * Card de producto individual
 */
export function ProductCard({ product, onAddClick }: ProductCardProps) {
	const [selectedSize, setSelectedSize] = useState<string>('');
	const [showSectionCart, setShowSectionCart] = useState<boolean>(false);
	const { success, info } = useAlert();

	const handleAddToCart = (product: Product) => {
		if (!selectedSize) {
			console.log('Por favor selecciona una talla');
			info(`Por favor selecciona una talla`);
			return;
		}

		success('¡Agregado al carrito!', `${product.name} - Talla ${selectedSize}`);
	};

	return (
		<section className="group relative bg-white" onMouseLeave={() => setShowSectionCart(false)}>
			<div className="relative aspect-2/3 overflow-hidden bg-gray-100 mb-4">
				<img
					src={product.image}
					alt={product.alt}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>

				{/* Icono + para agregar */}
				<button
					// onClick={() => onAddClick(product)}
					onClick={() => setShowSectionCart(true)}
					className="absolute top-4 right-4 bg-amber-950 text-white rounded-full p-1 transition-all duration-300 z-10 cursor-pointer"
					aria-label={`Agregar ${product.name} al carrito`}
				>
					<Plus className="w-5 h-5" />
				</button>
			</div>

			{/* Size selector card (visible en hover en desktop) */}
			{showSectionCart &&
				<div className="absolute bottom-16 left-4 right-4 bg-white shadow-lg p-4 transition-opacity duration-300 z-20">
					<p className="text-xs text-center mb-2 font-thin">Selecciona tu talla</p>
					<p className="text-xs text-center mb-3 font-medium">{product.name}</p>
					<div className="flex justify-center gap-2 mb-3 flex-wrap">
						{product.sizes.map((size) => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`w-8 h-8 border hover:bg-amber-900 hover:text-white transition-colors text-sm font-medium cursor-pointer ${selectedSize === size ? 'bg-amber-900 text-white' : 'bg-white text-black'}`}
							>
								{size}
							</button>
						))}
					</div>
					<button
						onClick={() => handleAddToCart(product)}
						className="w-full flex items-center justify-center gap-2 text-sm hover:text-amber-900 hover:font-bold transition-all cursor-pointer"
					>
						<ShoppingBag className="w-4 h-4" />
						Añadir
					</button>
				</div>}

			{/* Button */}
			<button
				onClick={() => onAddClick(product)}
				className="w-full bg-amber-900 text-white py-3 text-sm font-medium tracking-wider hover:bg-amber-800 transition-colors cursor-pointer"
			>
				COMPRAR
			</button>
		</section>
	);
}