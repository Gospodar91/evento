import { TEventoEvent } from "@/lib/types";
import EventItem from "./eventItem";

type TEventProps = {
  events: TEventoEvent[];
};

export default function Eventlist({ events }: TEventProps) {
  return (
    <section className="flex flex-wrap w-full gap-10 flex-1 basis-80">
      {events.map((event) => {
        return <EventItem event={event} key={event.id}></EventItem>;
      })}
    </section>
  );
}
