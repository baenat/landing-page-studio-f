import { Facebook, Instagram, Twitter } from "lucide-react";

export function SocialMedia() {

	return (
		<section className="flex gap-3 justify-center items-center mx-auto mt-5 mb-20">
			<Twitter className="cursor-pointer" />
			<Instagram className="cursor-pointer" />
			<Facebook className="cursor-pointer" />
		</section>
	)
}