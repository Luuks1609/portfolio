import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/navbar";

interface Work {
  title: string;
  company: string;
  date: string;
  description: string;
  url: string;
}

const work: Work[] = [
  {
    title: "Intern Frontend Developer",
    company: "ROX Digital Agency",
    date: "nov. 2023 - feb. 2024",
    description:
      "During my time at ROX Digital Agency, I had the opportunity to work on a Real Estate SaaS, Collaborating with a talented team, I contributed to building an innovative digital solution using mainly ReactJS and TailwindCSS.",
    url: "https://rox.nl/",
  },

  {
    title: "Intern Frontend Developer",
    company: "AppStudio",
    date: "feb. 2022 - jul. 2022",
    description:
      "At AppStudio, I collaborated with a backend colleague to develop an ecommerce shop for a company selling exclusive wines. Using NextJS, I crafted engaging user interfaces and optimized website performance to create a seamless shopping experience for customers.",
    url: "https://appstudio.nl/nl-NL/",
  },
  {
    title: "Intern Web Designer/Developer",
    company: "Rubix Marketing",
    date: "jan. 2019 - sep. 2019",
    description:
      "During my internship at Rubix Marketing, I honed my skills in web design and development. Collaborating closely with clients, I transformed ideas into visually stunning and functional WordPress websites, contributing to their online success.",
    url: "https://rubixcreative.nl/",
  },
  {
    title: "Intern",
    company: "Proud Innovations B.V",
    date: "jan. 2017 - jul. 2017",
    description:
      "My internship at Proud Innovations B.V. was an exciting journey into the world of software development. Working with Laravel, I contributed to the creation of a dynamic time tracking system, learning valuable coding principles and best practices along the way.",
    url: "https://proudinnovations.nl/",
  },
];

export default function Work() {
  return (
    <main className="w-full">
      <MaxWidthWrapper>
        <Navbar />
        <div className="">
          <h2 className="font-medium text-2xl mb-8 tracking-tighter">
            my work
          </h2>
          <p className="">
            In addition to my freelance work, which I have been doing in since
            2018, I have had the privilege of contributing to the following
            companies during my internships.
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
        {work.map((job, index) => (
          <div key={index}>
            <a
              href={job.url}
              target="_blank"
              className="font-medium text-xl tracking-tighter border-b-2"
            >
              {job.company}
            </a>
            <p className="text-neutral-400 text-sm mb-3 pt-1">
              {job.title}
              {job.date && ", " + job.date}
            </p>
            <p className="">{job.description}</p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          </div>
        ))}
      </MaxWidthWrapper>
    </main>
  );
}
