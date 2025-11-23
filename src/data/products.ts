import type { Product } from "../types";

export const products: Product[] = [
	{
		id: 'prod-1',
		name: 'Leggings pitillo con pretina ancha',
		image: '/products/products-210.png',
		alt: 'Beige sweater with brown pleated skirt',
		sizes: ['34', '36', '37', '38', '40', '41', '42', '43', '44'],
		category: 'Pants',
		price: 89.99
	},
	{
		id: 'prod-2',
		name: 'Vestido largo de otoño',
		image: '/products/products-211.png',
		alt: 'Orange turtleneck with brown maxi skirt',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		category: 'Dresses',
		price: 129.99
	},
	{
		id: 'prod-3',
		name: 'Conjunto elegante urbano',
		image: '/products/products-212.png',
		alt: 'Black coat with striped dress',
		sizes: ['S', 'M', 'L', 'XL'],
		category: 'Coats',
		price: 159.99
	},
	{
		id: 'prod-4',
		name: 'Look casual chic',
		image: '/products/products-213.png',
		alt: 'Burgundy top with beige pants',
		sizes: ['XS', 'S', 'M', 'L'],
		category: 'Casual',
		price: 79.99
	}
];