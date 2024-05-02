import { Link } from "@nextui-org/react";

const items = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "work",
    href: "/work",
  },
  {
    title: "projects",
    href: "/projects",
  },
];

export default function Navbar() {
  return (
    <ul className="flex pb-12 gap-x-4">
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
  );
}
