import Navbar from "../components/navbar";
import { Card, CardHeader, Image } from "@nextui-org/react";

const slides = [
	{
		img: "/projects-notext/koningsvogel.svg",
		alt: "Koningsvogel",
	},
	{
		img: "/projects-notext/dronesecurity.svg",
		alt: "DroneSecurity",
		url: "https://dronesecurity.nl",
	},
	{
		img: "/projects-notext/isospect.svg",
		alt: "Isospect",
		url: "https://isospect.nl",
	},
	{
		img: "/projects-notext/isospect-portal.svg",
		alt: "Isospect Portal",
	},
	{
		img: "/projects-notext/maisonlepuy.svg",
		alt: "MaisonlePuy",
		url: "https://maisonlepuy.nl",
	},
	{
		img: "/projects-notext/qrspot-web.svg",
		alt: "QRSpot",
	},
	{
		img: "/projects-notext/qrspot.svg",
		alt: "QRSpot App",
	},
	{
		img: "/projects-notext/loveforpets.svg",
		alt: "Love For Pets",
		url: "https://loveforpets.nl",
	},
	{
		img: "/projects-notext/antivlam.svg",
		alt: "Antivlam Urenregistratie",
	},
];

export default function Work() {
	return (
		<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
			<Navbar />
			<div className="">
				<h2 className="font-medium text-2xl mb-8 tracking-tighter">my projects </h2>
				<p className="">
					Alongside my studies, I pursued freelance projects driven by my passion for
					development. Here are some projects I&apos;ve had the pleasure to work on.
				</p>
				<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
			</div>
			<div className="gap-2 grid grid-cols-12 grid-rows-5 gap-y-10 sm:gap-y-2">
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/65 ">NextJS & Sanity website</p>
						<h4 className="text-black font-medium text-2xl">Koningsvogel.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Koningsvogel"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src={slides[0].img}
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/65 ">Wordpress & Divi website</p>
						<h4 className="text-black font-medium text-2xl">Dronesecurity.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="DroneSecurity"
						className="z-0 w-full h-full object-cover"
						src={slides[1].img}
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/65 ">NextJS & Supabase webapp</p>
						<h4 className="text-black font-medium text-2xl">Isospect Portal</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Isospect Portal"
						className="z-0 w-full h-full object-cover"
						src={slides[3].img}
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/65 ">NextJS & TailwindCSS website</p>
						<h4 className="text-black font-medium text-2xl">Isospect.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Isospect"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src={slides[2].img}
					/>
				</Card>

				<Card className="col-span-12 sm:col-span-5 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/65 ">WordPress & Divi shop</p>
						<h4 className="text-black font-medium text-2xl">Loveforpets.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Love For Pets"
						className="z-0 w-full h-full object-cover"
						src={slides[7].img}
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-7 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/65 ">WordPress booking website</p>
						<h4 className="text-black font-medium text-2xl">Maisonlepuy.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="MaisonlePuy"
						className="z-0 w-full h-full object-cover"
						src={slides[4].img}
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/65 ">ReactJS & Firebase webapp</p>
						<h4 className="text-black font-medium text-2xl">QRSpot.nl</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="QRSpot"
						className="z-0 w-full h-full object-cover"
						src={slides[5].img}
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/65 ">React Native & Firebase</p>
						<h4 className="text-black font-medium text-2xl">QRSpot iOS</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Antivlam Urenregistratie"
						className="z-0 w-full h-full object-cover"
						src={slides[6].img}
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/65 ">Svelte & Firebase</p>
						<h4 className="text-black font-medium text-2xl">Antivlam Employees</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Antivlam Urenregistratie"
						className="z-0 w-full h-full object-cover"
						src={slides[8].img}
					/>
				</Card>
			</div>
		</main>
	);
}
