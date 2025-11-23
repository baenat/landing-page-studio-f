import { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import type { ProductModalProps } from '../../types';
import { useAlert } from '../../contexts/AlertContext';

/**
 * Modal para selección de talla y agregar al carrito
 */
export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
	const [selectedSize, setSelectedSize] = useState<string>('');
	const { info } = useAlert();

	if (!product) return null;

	const handleAddToCart = () => {
		if (!selectedSize) {
			console.log('Por favor selecciona una talla');
			info(`Por favor selecciona una talla`);
			return;
		}
		onAddToCart(product, selectedSize);
		setSelectedSize('');
		onClose();
	};

	return (
		<div
			className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-lg max-w-lg w-full p-8 relative animate-fade-in"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
					aria-label="Cerrar"
				>
					<X className="w-6 h-6" />
				</button>

				{/* Product Image and Info */}
				<div className="flex gap-6 mb-8">
					<img
						src={product.image}
						alt={product.alt}
						className="w-32 h-48 object-cover rounded"
					/>
					<div className="flex flex-col justify-center">
						<p className="text-xs text-gray-500 mb-2 tracking-wider uppercase">
							{product.category}
						</p>
						<h3 className="text-xl font-medium text-gray-900 mb-2">
							{product.name}
						</h3>
						{product.price && (
							<p className="text-2xl font-semibold text-gray-900">
								${product.price}
							</p>
						)}
					</div>
				</div>

				{/* Size Selection */}
				<div className="mb-8">
					<label className="block text-sm font-medium text-gray-700 mb-4 tracking-wide">
						Selecciona tu talla
					</label>
					<div className="grid grid-cols-5 gap-3">
						{product.sizes.map((size) => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`py-3 px-2 border transition-all duration-300 text-sm font-medium cursor-pointer ${selectedSize === size
									? 'bg-amber-900 text-white border-amber-900'
									: 'bg-white text-black border-gray-300 hover:border-amber-900'
									}`}
							>
								{size}
							</button>
						))}
					</div>
				</div>

				{/* Add to Cart Button */}
				<button
					onClick={handleAddToCart}
					className="w-full bg-amber-900 text-white py-4 font-medium hover:bg-amber-800 transition-colors tracking-wide flex items-center justify-center gap-2 cursor-pointer"
				>
					<ShoppingBag className="w-5 h-5" />
					AÑADIR
				</button>
			</div>
		</div>
	);
}