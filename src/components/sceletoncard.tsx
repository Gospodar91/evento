import Sceleton from "./sceleton";

export default function Sceletoncard() {
  return (
    <div className="space-y-4">
      <Sceleton className="h-12 w-12 rounded-full" />
      <Sceleton className="h-4 w-[250px]" />
      <Sceleton className="h-4 w-[200px]" />
    </div>
  );
}
