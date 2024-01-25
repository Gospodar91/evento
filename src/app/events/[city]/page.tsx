import H1 from "@/app/components/H1";
import { TEventoEvent } from "@/app/lib";

type TCity = {
  params: {
    city: string;
  };
};

export default async function CityEvents({ params }: TCity) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: TEventoEvent[] = await response.json();

  const { city } = params;
  return (
    <main className="flex py-24 px-[20px] flex-col items-center">
      <H1>
        {city === "all-events"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      {events.map((event) => {
        return <section key={event.id}>{event.name}</section>;
      })}
    </main>
  );
}
