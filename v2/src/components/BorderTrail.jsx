import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function BorderTrail({ className, size = 60, transition, delay }) {
  const BASE_TRANSITION = { repeat: Infinity, duration: 5, ease: "linear" };
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn("absolute aspect-square bg-zinc-500/60", className)}
        style={{ width: size, offsetPath: `rect(0 auto auto 0 round ${size}px)` }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ ...(transition ?? BASE_TRANSITION), delay }}
      />
    </div>
  );
}
