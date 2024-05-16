import { Avatar } from "@nextui-org/react";

export default function Greeting() {
	return (
		<div className="block md:flex md:flex-row-reverse md:justify-between gap-x-10 py-4">
			<div className="mb-8 md:mb-0">
				<Avatar src="/me2.webp" className="w-52 h-52 text-large basis-1/3" />
			</div>
			<div className="basis-2/3">
				<h1 className="mb-8 text-2xl font-medium tracking-tighter">
					hey, I&apos;m lucas 👋
				</h1>
				<p className="">
					I&apos;d like to describe myself as a passionate and entrepreneurial (frontend)
					developer. My work ethic is hardworking and goal-oriented. I strive to keep
					developing my skills and to take on new challenges.
				</p>
			</div>
		</div>
	);
}
