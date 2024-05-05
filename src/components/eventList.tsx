import EventItem from "./eventItem";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./paginationControls";

type TEventProps = {
  city: string;
  page?: number;
};

export default async function Eventlist({ city, page = 1 }: TEventProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-wrap w-full gap-10 flex-1 basis-80">
      {events.map((event) => {
        return <EventItem event={event} key={event.id}></EventItem>;
      })}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
