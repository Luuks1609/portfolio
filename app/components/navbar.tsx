import { Link } from "@nextui-org/react";
import { Github, Mail } from "lucide-react";
import { RiGithubFill } from "@remixicon/react";

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
          <Link
            key={item.href}
            href={item.href}
            className="py-1"
            color="foreground"
          >
            {item.title}
          </Link>
        ))}
      </ul>
      <div className="flex gap-x-2">
        <a
          href="https://github.com/Luuks1609"
          target="_blank"
          className="flex gap-x-3 animated-background bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 px-4 py-1 rounded"
        >
          <RiGithubFill className="text-neutral-300" size={22} />
        </a>
        <a
          href="mailto:luuks1609@gmail.com"
          className="flex gap-x-3 animated-background bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 px-4 py-1 rounded"
        >
          <Mail className="text-neutral-300" size={22} />
        </a>
      </div>
    </div>
  );
}
