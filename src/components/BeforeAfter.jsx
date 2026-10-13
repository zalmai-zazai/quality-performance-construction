import { useState } from "react";
import { SafeImage } from "./ui.jsx";
import { IMAGES } from "../data/images.js";
export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] select-none overflow-hidden border-4 border-navy sm:aspect-[16/9]">
      <SafeImage src={IMAGES.after} alt="After: finished project" className="absolute inset-0 size-full" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <SafeImage src={IMAGES.before} alt="Before: original condition" className="size-full" />
      </div>
      <span className="absolute left-3 top-3 bg-navy px-3 py-1 text-xs font-bold uppercase text-white">Before</span>
      <span className="absolute right-3 top-3 bg-safety px-3 py-1 text-xs font-bold uppercase text-navy">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-safety" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-safety font-bold text-navy shadow-xl">⇄</span>
      </div>
      <input type="range" min="0" max="100" value={pos} onChange={e => setPos(+e.target.value)} aria-label="Drag to compare before and after" className="absolute inset-0 size-full cursor-ew-resize opacity-0" />
    </div>
  );
}
