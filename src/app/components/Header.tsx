import Link from "next/link";
import Logo from "./Logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/event/all-events",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between px-3 sm:px-9 items-center border-b border-white/10 h-14">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm ">
          {routes.map((route) => (
            <li
              className="text-white/50 hover:text-white transition "
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
