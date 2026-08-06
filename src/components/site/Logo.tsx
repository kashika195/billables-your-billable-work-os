import mark from "@/assets/billables-mark.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string | undefined;
  markClassName?: string | undefined;
  showWordmark?: boolean | undefined;
}) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <img
        src={mark.url}
        alt="Billables logo"
        width={32}
        height={32}
        className={cn("h-8 w-8 shrink-0 object-contain", markClassName)}
      />
      {showWordmark && (
        <span className="truncate font-display text-[1.35rem] leading-none font-bold lowercase tracking-[-0.045em]">
          billables
        </span>
      )}
    </span>
  );
}
