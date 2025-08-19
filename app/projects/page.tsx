import { slides } from "@/lib/projects";
import Navbar from "../components/navbar";
import { Card, Image } from "@nextui-org/react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Work() {
  return (
    <main className="">
      <MaxWidthWrapper>
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
      </MaxWidthWrapper>
    </main>
  );
}
