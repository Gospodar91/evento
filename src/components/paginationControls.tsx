import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
type PaginationProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyle =
  "flex text-white rounded-full gap-x-2 items-center px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 text-sm";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link className={btnStyle} href={previousPath}>
          <ArrowLeftIcon />
          Previos
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link className={btnStyle} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
