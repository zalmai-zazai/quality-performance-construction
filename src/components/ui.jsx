import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, HardHat } from "lucide-react";
import { fadeUp, stagger, vp } from "../lib/motion.js";
import { IMAGES } from "../data/images.js";
export const Reveal = ({ children, v = fadeUp, className = "" }) => (
  <motion.div variants={v} initial="hidden" whileInView="show" viewport={vp} className={className}>{children}</motion.div>
);
export const Stagger = ({ children, className = "" }) => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className={className}>{children}</motion.div>
);
export function SafeImage({ src, alt, className = "", eager = false }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div role="img" aria-label={`${alt} (add photo)`} className={`blueprint grid place-items-center bg-navy2 text-center text-xs text-white/40 ${className}`}>
      <span><HardHat className="mx-auto mb-2 text-safety/70" />Add photo<br />{src}</span></div>
  ) : <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setBad(true)} className={`object-cover ${className}`} />;
}
export function Logo({ size = 44 }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <span style={{ width: size, height: size }} className="display grid shrink-0 place-items-center rounded-full bg-safety text-navy"><span style={{ fontSize: size * .36 }}>QPC</span></span>
  ) : <img src={IMAGES.logo} alt="Quality Performance Construction logo" onError={() => setBad(true)} style={{ width: size, height: size }} className="shrink-0 rounded-full object-cover" />;
}
export function Button({ href, children, variant = "solid", className = "", onClick }) {
  const base = "group inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wide transition-all";
  const v = { solid: "bg-safety text-navy hover:bg-navy hover:text-white", dark: "bg-navy text-white hover:bg-safety hover:text-navy", ghost: "border-2 border-white/40 text-white hover:border-safety hover:text-safety" }[variant];
  return <a href={href} onClick={onClick} className={`${base} ${v} ${className}`}>{children}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>;
}
export const Heading = ({ eyebrow, title, sub, light }) => (
  <Reveal className="mb-14 max-w-3xl">
    <p className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-safety"><span className="h-0.5 w-10 bg-safety" />{eyebrow}</p>
    <h2 className={`display text-4xl sm:text-6xl ${light ? "text-white" : ""}`}>{title}</h2>
    {sub && <p className={`mt-5 text-lg ${light ? "text-white/70" : "text-slate"}`}>{sub}</p>}
  </Reveal>
);
