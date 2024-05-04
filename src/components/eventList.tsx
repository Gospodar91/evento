import { TEventoEvent } from "@/lib/types";
import EventItem from "./eventItem";
import { getEvents } from "@/lib/utils";

type TEventProps = {
  city: string;
};

export default async function Eventlist({ city }: TEventProps) {
  const events = await getEvents(city);
  return (
    <section className="flex flex-wrap w-full gap-10 flex-1 basis-80">
      {events.map((event) => {
        return <EventItem event={event} key={event.id}></EventItem>;
      })}
    </section>
  );
}
