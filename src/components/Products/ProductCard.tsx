import { Plus, ShoppingBag } from 'lucide-react';
import type { ProductCardProps } from '../../types';
import { useState } from 'react';

/**
 * Card de producto individual
 */
export function ProductCard({ product, onAddClick }: ProductCardProps) {
	const [selectedSize, setSelectedSize] = useState<string>('');
	
	return (
		<div className="group relative bg-white">
			<div className="relative aspect-2/3 overflow-hidden bg-gray-100 mb-4">
				<img
					src={product.image}
					alt={product.alt}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>

				{/* Icono + para agregar */}
				<button
					onClick={() => onAddClick(product)}
					className="absolute top-4 right-4 bg-amber-950 text-white rounded-full p-1 transition-all duration-300 z-10 cursor-pointer"
					aria-label={`Agregar ${product.name} al carrito`}
				>
					<Plus className="w-5 h-5" />
				</button>
			</div>

			{/* Size selector card (visible en hover en desktop) */}
			<div className="absolute bottom-16 left-4 right-4 bg-white shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden md:block">
				<p className="text-xs text-center mb-2 font-thin">Selecciona tu talla</p>
				<p className="text-xs text-center mb-3 font-medium">{product.name}</p>
				<div className="flex justify-center gap-2 mb-3 flex-wrap">
					{product.sizes.slice(0, 6).map((size) => (
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
					onClick={() => onAddClick(product)}
					className="w-full flex items-center justify-center gap-2 text-sm hover:text-amber-900 hover:font-bold transition-all cursor-pointer"
				>
					<ShoppingBag className="w-4 h-4" />
					Añadir
				</button>
			</div>

			{/* Button */}
			<button
				onClick={() => onAddClick(product)}
				className="w-full bg-amber-900 text-white py-3 text-sm font-medium tracking-wider hover:bg-amber-800 transition-colors cursor-pointer"
			>
				COMPRAR
			</button>
		</div>
	);
}