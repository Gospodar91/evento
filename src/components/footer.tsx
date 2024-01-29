import Link from "next/link";

const routes = [
  {
    path: "terms-conditions",
    name: "Teams And Conditions",
  },
  {
    path: "/privacy-policey",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className=" mt-auto h-16 border-t border-white/10  items-center  flex justify-between px-3 sm:px-9 text-white/25">
      <small className="text-xs sm:text">Sergei Andreiev</small>
      <ul className="flex  gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
