import { cn } from "@/lib/cn";

type TSceletonProps = {
  className?: string;
};

export default function Sceleton({ className }: TSceletonProps) {
  return (
    <div
      className={cn(
        `animate-pulse h-4 w-[550px] rounded-md  bg-white/5`,
        className
      )}
    />
  );
}
