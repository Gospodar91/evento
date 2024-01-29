import Link from "next/link";
import SeachForm from "../components/SeachForm";
import H1 from "../components/H1";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1 className="mb-12">Find Events around you </H1>
      <p className=" mb-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline   text-accent">
          10, 000 events
        </span>{" "}
        around you{" "}
      </p>
      <SeachForm />
      <section className="flex mt-4 text-sm text-white/50 gap-x-4">
        <p>Popular:</p>
        <div className="space-x-2  font-semibold">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/seattle"}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
