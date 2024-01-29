import H1 from "@/components/H1";
import Eventlist from "@/components/eventList";
import { TEventoEvent } from "@/lib/types";

type TCity = {
  params: {
    city: string;
  };
};

export default async function CityEvents({ params }: TCity) {
  const { city } = params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEventoEvent[] = await response.json();

  return (
    <main className="flex py-24 px-[20px] flex-col items-center">
      <H1 className="mb-28">
        {city === "all-events"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Eventlist events={events} />
    </main>
  );
}
