import Navbar from "../components/navbar";
import { Card, CardHeader, Image } from "@nextui-org/react";

// TODO: plaatjes maken zonder tekst (zelfde maar dan zonder text)
// TODO: de originele card header gebruiker en dan de tekst vervangen

export default function Work() {
	return (
		<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
			{/* navbar */}
			<Navbar />
			<div className="">
				<h2 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h2>
				<p className="">
					Alongside my studies, I pursued freelance projects driven by my passion for
					development. Here are some projects I&apos;ve had the pleasure to work on.
				</p>
				<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
			</div>
			<div className="gap-2 grid grid-cols-12 grid-rows-2 ">
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
						<h4 className="text-white font-medium text-large">Stream the Acme event</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="https://nextui.org/images/card-example-4.jpeg"
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
						<h4 className="text-white font-medium text-large">
							Contribute to the planet
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="https://nextui.org/images/card-example-3.jpeg"
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
						<h4 className="text-white font-medium text-large">
							Creates beauty like a beast
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="https://nextui.org/images/card-example-2.jpeg"
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">New</p>
						<h4 className="text-black font-medium text-2xl">Acme camera</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src="https://nextui.org/images/card-example-6.jpeg"
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Your day your way
						</p>
						<h4 className="text-white/90 font-medium text-xl">
							Your checklist for better sleep
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover"
						src="https://nextui.org/images/card-example-5.jpeg"
					/>
				</Card>
			</div>
		</main>
	);
}
