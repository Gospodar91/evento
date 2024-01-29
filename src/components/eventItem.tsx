import { TEventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventoItemProps = {
  event: TEventoEvent;
};

export default function EventItem({ event }: EventoItemProps) {
  return (
    <Link
      className="h-[380px] max-w-[500px]  flex-1 basis-80 rounded-xl "
      href={`/event/${event.slug}`}
    >
      <section className="flex  flex-col  items-center bg-white/[3%]  overflow-hidden relative w-full h-full hover:scale-105 transition active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-fit"
        />
        <div className=" flex-1 items-center flex flex-col justify-center">
          <h2 className=" text-white font-semibold text-2xl ">{event.name}</h2>
          <p className=" italic text-white/75">{event.organizerName}</p>
          <p className=" text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className=" absolute  left-[12px] top-[12px] h-[45px] flex flex-col items-center justify-center  ">
          <p className="text-xl font-bold  -mb-[-5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className=" text-accent  text-xs">
            {new Date(event.date)
              .toLocaleDateString("en-US", { month: "short" })
              .toUpperCase()}
          </p>
        </section>
      </section>
    </Link>
  );
}
