import Sceletoncard from "@/components/sceletoncard";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] max-auto  pax-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, index) => (
        <Sceletoncard key={index} />
      ))}
    </div>
  );
}
