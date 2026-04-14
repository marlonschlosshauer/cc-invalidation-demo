import Link from "next/link";

const links = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Foo",
    href: "/foo",
  },
  {
    label: "Bar",
    href: "/bar",
  },
];

export const Footer = () => (
  <footer>
    <ul className="flex flex-row gap-4">
      {links.map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
