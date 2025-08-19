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
    <html lang="en" className="dark bg-brand">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
