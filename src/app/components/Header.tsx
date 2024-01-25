"use client";
import Link from "next/link";
import Logo from "./Logo";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all-events",
  },
];

//clsx- первый параметр стили которые есть всегда,Второй- обьект с conditions

export default function Header() {
  const activePath = usePathname();
  return (
    <header className="flex justify-between px-3 sm:px-9 items-center border-b border-white/10 h-14">
      <Logo />
      <nav className=" h-full">
        <ul className="flex gap-x-6 text-sm  h-full">
          {routes.map((route) => (
            <li
              className={`${clsx(
                "hover:text-white transition h-full relative flex items-center",
                {
                  "text-white": activePath === route.path,
                  "text-white/50": activePath !== route.path,
                }
              )}`}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePath === route.path && (
                <motion.div
                  layoutId="header-links"
                  className="h-1 w-full bg-accent absolute  bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
