import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const events = prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}

export async function getAllEvents(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}
