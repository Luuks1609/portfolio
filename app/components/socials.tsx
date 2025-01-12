import { Link } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";

export default function Socials() {
  return (
    <div className="my-16 block md:flex w-full gap-5 space-y-3 md:space-y-0">
      <Link
        className="flex gap-x-1 items-center"
        color="foreground"
        href="https://www.linkedin.com/in/lucas-van-der-sloot/"
        target="_blank"
      >
        <ArrowUpRight className="text-neutral-300" size={20} />
        <p>connect with me</p>
      </Link>
      <Link
        className="flex gap-x-1 items-center"
        color="foreground"
        href="mailto:luuks1609@gmail.com"
        target="_blank"
      >
        <ArrowUpRight className="text-neutral-300" size={20} />
        <p>send me an email</p>
      </Link>
      <Link
        className="flex gap-x-1 items-center"
        color="foreground"
        href="https://github.com/Luuks1609"
        target="_blank"
      >
        <ArrowUpRight className="text-neutral-300" size={20} />
        <p>check out my code</p>
      </Link>
    </div>
  );
}
