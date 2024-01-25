import React from "react";
type TH1 = {
  children: React.ReactNode;
};
export default function H1({ children }: TH1) {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tight ">
      {children}
    </h1>
  );
}
