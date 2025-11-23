interface SectionTitleProps {
	title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {

	return (
		<section className="text-center mb-10" >
			<h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide inline-block uppercase">
				{title}
				<div className="w-24 h-0.5 bg-gray-900 mx-auto mt-2" />
			</h2>
		</section >
	)

}