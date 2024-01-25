"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SeachForm() {
  const [seacrhtextState, setSeacrhtextState] = useState("");
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!seacrhtextState) {
      return;
    }
    router.push(`/events/${seacrhtextState}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={seacrhtextState}
        className="w-full outline-none h-16 rounded-lg bg-white/[7%] ring-accent/50 px-6 transition focus:bg-white/10 focus:ring-2"
        placeholder="Seacrh events in any city"
        spellCheck={false}
        onChange={(e) => setSeacrhtextState(e.target.value)}
      />
    </form>
  );
}
