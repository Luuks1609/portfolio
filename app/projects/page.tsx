import Navbar from "../components/navbar";
import { Card, CardHeader, Image } from "@nextui-org/react";

// todo, descriptions kloppen niet allemaal
// afbeeldingen maken in canva ofzo voor work section
// op github zetten
// deployen naar vercel

const work = [
  {
    title: "Intern Frontend Developer",
    company: "ROX Digital Agency",
    date: "nov. 2023 - feb. 2024",
    description:
      "During my time at ROX Digital Agency, I had the opportunity to work on a Real Estate SaaS, Collaborating with a talented team, I contributed to building an innovative digital solution using mainly ReactJS and TailwindCSS.",
  },
  {
    title: "Intern Frontend Developer",
    company: "AppStudio",
    date: "feb. 2022 - jul. 2022",
    description:
      "At AppStudio, I collaborated with a backend colleague to develop an ecommerce shop for a company selling exclusive wines. Using NextJS, I crafted engaging user interfaces and optimized website performance to create a seamless shopping experience for customers.",
  },
  {
    title: "Intern Web Designer/Developer",
    company: "Rubix Marketing",
    date: "jan. 2019 - sep. 2019",
    description:
      "During my internship at Rubix Marketing, I honed my skills in web design and development. Collaborating closely with clients, I transformed ideas into visually stunning and functional WordPress websites, contributing to their online success.",
  },
  {
    title: "Intern",
    company: "Proud Innovations B.V",
    date: "jan. 2017 - jul. 2017",
    description:
      "My internship at Proud Innovations B.V. was an exciting journey into the world of software development. Working with Laravel, I contributed to the creation of a dynamic time tracking system, learning valuable coding principles and best practices along the way.",
  },
];

export default function Work() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      {/* navbar */}
      <Navbar />
      <div className="">
        <h2 className="font-medium text-2xl mb-8 tracking-tighter">
          my projects
        </h2>
        <p className="">
          Alongside my studies, I pursued freelance projects driven by my
          passion for development. Here are some projects I've had the pleasure
          to work on.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="gap-2 grid grid-cols-12 grid-rows-2 ">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
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
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
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
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
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
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
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
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
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
