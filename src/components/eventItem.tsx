"use client";
import { EventoEvent } from "@prisma/client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventoItemProps = {
  event: EventoEvent;
};
const MotionLink = motion(Link);
export default function EventItem({ event }: EventoItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="h-[380px] max-w-[500px]  flex-1 basis-80 rounded-xl "
      href={`/event/${event.slug}`}
      style={{
        //@ts-ignore
        scale: scaleProgress,
        //@ts-ignore
        opacity: opacityProgress,
      }}
    >
      <section className="flex  flex-col  items-center bg-white/[3%]  overflow-hidden relative w-full h-full hover-effect">
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
    </MotionLink>
  );
}
