import Sceleton from "@/components/sceleton";

export default function Loading() {
  return (
    <div className="flex  flex-col gap-y-6 items-center py-10">
      <Sceleton className="h-6" />
      <Sceleton className="h-6 w-[400px]" />
      <Sceleton className="h-6 w-[300px]" />
    </div>
  );
}
