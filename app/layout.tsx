import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lucas van der Sloot",
	description:
		"Ik bouw dingen voor het web. Ik ben een gepassioneerde en ondernemende Software Engineering student op HBO-niveau met een MBO-ICT achtergrond.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark bg-[#111010]">
			<body
				className={`${inter.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mx-auto`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
