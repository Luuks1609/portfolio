import { Link } from "@nextui-org/react";
import { GraduationCap, Mail } from "lucide-react";

const items = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "resume",
		href: "/resume",
	},
	{
		title: "projects",
		href: "/projects",
	},
];

export default function Navbar() {
	return (
		<div className="flex justify-between items-center pb-12">
			<ul className="flex  gap-x-4">
				{items.map((item) => (
					<Link key={item.href} href={item.href} className="py-1" color="foreground">
						{item.title}
					</Link>
				))}
			</ul>
			<a
				href="mailto:email@lucasvandersloot.nl"
				className="flex gap-x-3 animated-background bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 px-4 py-1 rounded"
			>
				<Mail className="text-neutral-300" size={22} />
			</a>
		</div>
	);
}
