import Navbar from "../components/navbar";
import { Card, CardHeader, Image } from "@nextui-org/react";

const slides = [
  {
    img: "/projects/koningsvogel.svg",
    alt: "Koningsvogel",
    url: "https://koningsvogel.vercel.app/",
  },
  {
    img: "/projects/unit-a.png",
    alt: "Unit-A",
    url: "https://unit-a-security.vercel.app/",
  },
  {
    img: "/projects/translatetunes.png",
    alt: "TranslateTunes",
    url: "https://translatetunes.web.app/",
  },
  {
    img: "/projects/antivlam.png",
    alt: "Antivlam",
    url: "https://antivlam.vercel.app",
  },
  {
    img: "/projects/dronesecurity.svg",
    alt: "DroneSecurity",
    url: "https://dronesecurity.nl",
  },
  {
    img: "/projects/isospect.svg",
    alt: "Isospect",
    url: "https://isospect.nl",
  },
  {
    img: "/projects/isospect-portal.svg",
    alt: "Isospect Portal",
    url: "https://portal.isospect.nl",
  },
  {
    img: "/projects/maisonlepuy.svg",
    alt: "MaisonlePuy",
    url: "https://maisonlepuy.nl",
  },
  {
    img: "/projects/qrspot.svg",
    alt: "QRSpot",
    url: "https://qrspot.nl",
  },
  {
    img: "/projects/qrspot-ios.svg",
    alt: "QRSpot App",
  },
  {
    img: "/projects/loveforpets.svg",
    alt: "Love For Pets",
    url: "https://loveforpets.nl",
  },

  {
    img: "/projects/antivlam-urenregistratie.svg",
    alt: "Antivlam Urenregistratie",
  },
];

export default function Work() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
      <div className="">
        <h2 className="font-medium text-2xl mb-8 tracking-tighter">
          my projects{" "}
        </h2>
        <p className="">
          Alongside my studies, I pursued freelance projects driven by my
          passion for development. Here are some projects I&apos;ve had the
          pleasure to work on.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="gap-2 grid grid-cols-12 grid-rows-4 gap-y-10 sm:gap-y-2">
        {slides.map((slide, index) => (
          <a
            href={slide.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`col-span-6 sm:col-span-${
              Math.floor(index / 2) % 2 === 0 ? "4" : "4"
            }`}
          >
            <Card
              key={index}
              className={`w-full h-[300px] col-span-12 sm:col-span-${
                Math.floor(index / 2) % 2 === 0 ? "4" : "4"
              } hover:-translate-y-3`}
            >
              <Image
                removeWrapper
                alt={slide.alt}
                className="z-0 w-full hover:scale-[115%] h-full scale-110  object-cover"
                src={slide.img}
              />
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
}
