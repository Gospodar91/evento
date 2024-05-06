import H1 from "@/components/H1";
import { getAllEvents, sleep } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};

//Static pre-render of popular routes
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const event: EventoEvent = await getAllEvents(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  return [
    {
      slug: "comedy-extravaganza",
    },
    { slug: "dj-practice-session" },
  ];
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;
  const event: EventoEvent = await getAllEvents(slug);

  return (
    <main>
      <section className="relative  overflow-hidden flex justify-center items-center py-14  md:px-20">
        <Image
          src={event.imageUrl}
          alt="back_image"
          fill
          quality={50}
          priority
          sizes="(max-width:1280px):100vw,1280px"
          className=" blur-3xl object-cover z-0"
        />

        <div className="relative z-1 flex  gap-6 lg:gap-16 flex-col lg:flex-row">
          {" "}
          <Image
            alt="main_image"
            src={event.imageUrl}
            width={300}
            height={201}
            className=" rounded-xl border-2 border-white/50 object-cover"
          />{" "}
          <div className="flex flex-col">
            <p className=" text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                weekday: "long",
              })}
            </p>

            <H1 className="mt-1 mb-2 text-white/75 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className=" text-white/75  whitespace-nowrap text-xl">
              Oganized by{" "}
              <span className=" italic"> {event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize  w-[95vw] sm:w-full py-2 rounded-md border-2 mt-5 lg:mt-auto border-white/10 hover-effect focus:scale-105">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className=" text-center py-16 px-5">
        <Section>
          <SectionHeading> About this event </SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading> Location </SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className=" text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className=" max-w-4xl mx-auto leading-8 text-lg text-white/75">
      {children}
    </p>
  );
}
