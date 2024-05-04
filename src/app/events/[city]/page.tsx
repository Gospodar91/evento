import H1 from "@/components/H1";
import Eventlist from "@/components/eventList";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

type CityEventsProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All events" : `Events in  ${capitalize(city)}`,
  };
}

export default async function CityEvents({
  params,
  searchParams,
}: CityEventsProps) {
  const { city } = params;
  const page = searchParams.page || 1;

  return (
    <main className="flex py-24 px-[20px] flex-col items-center">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        {" "}
        <Eventlist city={city} page={+page} />
      </Suspense>
    </main>
  );
}
