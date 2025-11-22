import type { Slide } from "../../types";

export function SlideItem({ slide, isActive }: { slide: Slide; isActive: boolean }) {
	return (
		<div
			className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
				}`}
		>
			{/* Imagen */}
			<img
				src={slide.image}
				alt={slide.alt}
				className="w-full h-full object-cover"
			/>

			{/* Overlay */}
			<div
				className="absolute inset-0 bg-black"
				style={{ opacity: 0 }}
			/>

			{/* Contenido */}
			{/* {isActive && (
				<div className="absolute inset-0 flex items-center justify-center text-center z-10">
					<div className="text-white px-4 max-w-4xl">
						<h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 tracking-[0.2em] animate-fade-in drop-shadow-2xl">
							{slide.title}
						</h2>
						<p className="text-lg md:text-xl lg:text-2xl tracking-[0.3em] mb-8 animate-fade-in-delay drop-shadow-lg italic font-light">
							{slide.subtitle}
						</p>
						{slide.cta && (
							<a
								href={slide.cta.link}
								className="inline-block bg-white text-black px-10 py-4 text-sm tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 animate-fade-in-delay font-semibold"
							>
								{slide.cta.text}
							</a>
						)}
					</div>
				</div>
			)} */}
		</div>
	);
}