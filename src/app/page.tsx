import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight ">
        {" "}
        Find Events around you{" "}
      </h1>
      <p className="mt-12 mb-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline   text-accent">
          10, 000 events
        </span>{" "}
        around you{" "}
      </p>
      <form className="w-full sm:w-[580px]">
        <input
          className="w-full outline-none h-16 rounded-lg bg-white/[7%] ring-accent/50 px-6 transition focus:bg-white/10 focus:ring-2"
          placeholder="Seacrh events in any city"
          spellCheck={false}
        />
      </form>
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
