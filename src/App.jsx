import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Star,
  Instagram,
  Facebook,
  Check,
  Plus,
  Minus,
  AlertTriangle,
} from "lucide-react";
import {
  SITE,
  NAV,
  SERVICES,
  PROCESS,
  REVIEWS,
  COUNTIES,
  FAQ,
} from "./data/site.js";
import { IMAGES } from "./data/images.js";
import { fadeUp, scaleIn } from "./lib/motion.js";
import {
  Button,
  Heading,
  Logo,
  Reveal,
  Stagger,
  SafeImage,
} from "./components/ui.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Estimate from "./components/Estimate.jsx";
const slug = (n) => n.toLowerCase();

function Navbar() {
  const [small, setSmall] = useState(false),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSmall(scrollY > 40);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${small ? "bg-navy/95 py-2 shadow-xl backdrop-blur" : "py-5"}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white"
      >
        <a
          href="#top"
          aria-label="Quality Performance Construction home"
          className="flex items-center gap-3"
        >
          <Logo size={small ? 40 : 50} />
          <span className="display hidden text-lg leading-none sm:block">
            Quality Performance
            <br />
            <span className="text-safety">Construction</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a
                href={`#${slug(n)}`}
                className="transition-colors hover:text-safety"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.tel}`}
            className="hidden min-h-11 items-center gap-2 font-bold hover:text-safety xl:flex"
          >
            <Phone size={18} className="text-safety" />
            {SITE.phone}
          </a>
          <a
            href="#estimate"
            className="hidden min-h-11 items-center bg-safety px-5 text-sm font-bold uppercase text-navy hover:bg-white sm:inline-flex"
          >
            Free quote
          </a>
          <button
            className="grid size-12 place-items-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-navy text-white lg:hidden"
          >
            <ul className="px-5 pb-4">
              {NAV.map((n) => (
                <li key={n}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${slug(n)}`}
                    className="display block border-b border-white/10 py-4 text-3xl"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6">
              <Button
                href="#estimate"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Request an estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
    >
      {/* Construction background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Professional construction workers working on a building project"
          eager
          className="size-full object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/35" />

      {/* Subtle blueprint texture */}
      <div className="blueprint absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur"
        >
          <span className="flex text-safety">
            {[0, 1, 2, 3, 4].map((n) => (
              <Star key={n} size={14} fill="currentColor" />
            ))}
          </span>
          {SITE.rating} on Google · {SITE.reviewCount} reviews
        </motion.p>

        <h1 className="display text-[clamp(2.8rem,9vw,7.5rem)]">
          {["Built right.", "Repaired right."].map((l, i) => (
            <span key={l} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i ? "text-safety" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-7 max-w-xl text-lg text-white/80"
        >
          Bathroom remodels, structural repairs and water damage repairs for
          homeowners across King and Pierce County. Based in Kent, WA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#estimate">Request an estimate</Button>
          <Button href={`tel:${SITE.tel}`} variant="ghost">
            Call {SITE.phone}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Strip() {
  const items = [
    ["Serving", "King & Pierce County"],
    ["Based in", "Kent, WA"],
    ["Rated", `${SITE.rating} on Google`],
    ["Open today", SITE.closes],
  ];
  return (
    <div className="border-b-4 border-safety bg-navy2 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
        {items.map(([a, b]) => (
          <div key={a} className="px-5 py-5">
            <p className="text-xs uppercase tracking-widest text-safety">{a}</p>
            <p className="display text-xl">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-28">
      <Heading
        eyebrow="What we do"
        title="Three things, done properly"
        sub="Focused on the work homeowners need most."
      />
      <Stagger className="grid gap-6 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.article
            variants={fadeUp}
            key={s.name}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col overflow-hidden border-2 border-rule bg-white transition-shadow hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <SafeImage
                src={IMAGES.services[i]}
                alt={s.name}
                className="size-full transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute left-0 top-0 bg-safety p-3 text-navy">
                <s.icon size={26} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="display text-3xl">{s.name}</h3>
              <p className="mt-3 text-slate">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm font-medium">
                    <Check size={18} className="shrink-0 text-safety" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#estimate"
                className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold uppercase text-navy transition-colors group-hover:text-safety"
              >
                Get an estimate →
              </a>
            </div>
            {s.urgent && (
              <a
                href={`tel:${SITE.tel}`}
                className="flex items-center gap-2 bg-navy px-7 py-3 text-sm font-bold text-white hover:bg-safety hover:text-navy"
              >
                <AlertTriangle size={16} className="text-safety" />
                Active leak? Call now
              </a>
            )}
          </motion.article>
        ))}
      </Stagger>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="blueprint bg-navy py-28 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          light
          eyebrow="How it works"
          title="Simple from first call to final walkthrough"
        />
        <Stagger className="grid gap-px bg-white/15 md:grid-cols-4">
          {PROCESS.map(([t, d], i) => (
            <motion.div variants={fadeUp} key={t} className="bg-navy p-8">
              <p className="display text-6xl text-safety">0{i + 1}</p>
              <h3 className="display mt-6 text-2xl">{t}</h3>
              <p className="mt-3 text-white/65">{d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-28">
      <Heading
        eyebrow="Our work"
        title="See the difference"
        sub="Drag the slider to compare before and after. Replace the photos in /public with your own projects."
      />
      <Reveal v={scaleIn}>
        <BeforeAfter />
      </Reveal>
      <Stagger className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {IMAGES.projects.map((p, i) => (
          <motion.div
            variants={scaleIn}
            key={p}
            className="group overflow-hidden border-2 border-rule"
          >
            <SafeImage
              src={p}
              alt={`Completed project ${i + 1}`}
              className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-sand py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal v={scaleIn}>
          <SafeImage
            src={IMAGES.about}
            alt="Quality Performance Construction team on a job site"
            className="aspect-[4/5] w-full border-4 border-navy"
          />
        </Reveal>
        <div>
          <Heading
            eyebrow="Why homeowners call us"
            title="A local contractor that shows up and does it right"
          />
          <Stagger className="space-y-5">
            {[
              [
                "Quality workmanship",
                "The name is the standard we hold ourselves to on every job.",
              ],
              [
                "Clear communication",
                "You'll know the scope, the cost and what's happening next.",
              ],
              [
                "One team, repair to rebuild",
                "Damage repair and the rebuild handled together.",
              ],
              [
                "Local to Kent",
                "Serving King and Pierce County from right here.",
              ],
            ].map(([t, d]) => (
              <motion.div variants={fadeUp} key={t} className="flex gap-4">
                <span className="mt-1 grid size-8 shrink-0 place-items-center bg-safety text-navy">
                  <Check size={18} />
                </span>
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="text-slate">{d}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
          <div className="mt-10">
            <Button href="#estimate" variant="dark">
              Request an estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-28">
      <Heading
        eyebrow="Reviews"
        title={`${SITE.rating} stars from ${SITE.reviewCount} Google reviews`}
        sub="Cards below are placeholders: paste real reviews in src/data/site.js."
      />
      <Stagger className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.blockquote
            variants={fadeUp}
            key={i}
            className="border-l-4 border-safety bg-white p-7 shadow-sm"
          >
            <div
              className="flex gap-1 text-safety"
              role="img"
              aria-label="5 out of 5 stars"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-4 text-lg">{r.text}</p>
            <footer className="mt-5 text-sm font-bold text-slate">
              {r.name}
            </footer>
          </motion.blockquote>
        ))}
      </Stagger>
    </section>
  );
}

function Area() {
  return (
    <section id="area" className="border-y border-rule bg-sand py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading
            eyebrow="Service area"
            title="Serving King and Pierce County"
            sub="Based in Kent. Not sure if we cover your address? Give us a call."
          />
          <div className="flex flex-wrap gap-3">
            {COUNTIES.map((c) => (
              <span
                key={c}
                className="display border-2 border-navy px-5 py-3 text-xl"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <Reveal className="bg-navy p-8 text-white">
          <MapPin className="text-safety" size={32} />
          <address className="display mt-4 text-3xl not-italic">
            {SITE.address[0]}
            <br />
            {SITE.address[1]}
          </address>
          <p className="mt-2 text-sm text-white/60">
            Plus Code: {SITE.plusCode}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={SITE.directions}>Directions</Button>
            <Button href={`tel:${SITE.tel}`} variant="ghost">
              Call now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  const [o, setO] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-28">
      <Heading eyebrow="Questions" title="Good to know" />
      <div className="divide-y-2 divide-rule border-y-2 border-rule">
        {FAQ.map(([q, a], i) => (
          <div key={q}>
            <button
              onClick={() => setO(o === i ? -1 : i)}
              aria-expanded={o === i}
              className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold"
            >
              {q}
              {o === i ? (
                <Minus className="shrink-0 text-safety" />
              ) : (
                <Plus className="shrink-0 text-safety" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {o === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pb-5 text-slate"
                >
                  {a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy px-5 py-16 pb-28 text-white md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo size={56} />
          <p className="display mt-4 text-2xl">{SITE.name}</p>
          <p className="mt-2 text-white/60">{SITE.address.join(", ")}</p>
        </div>
        <div className="space-y-2">
          <a
            className="block min-h-9 hover:text-safety"
            href={`tel:${SITE.tel}`}
          >
            {SITE.phone}
          </a>
          <a
            className="block break-all hover:text-safety"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
          <div className="flex gap-3 pt-3">
            {[
              [Instagram, "Instagram", SITE.social.instagram],
              [Facebook, "Facebook", SITE.social.facebook],
            ].map(([I, l, h]) => (
              <a
                key={l}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l}
                className="grid size-11 place-items-center border border-white/25 hover:border-safety hover:text-safety"
              >
                <I size={18} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n}>
                <a
                  className="inline-flex min-h-9 items-center text-white/70 hover:text-safety"
                  href={`#${slug(n)}`}
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="border-t border-white/15 pt-6 text-sm text-white/50 md:col-span-3">
          © 2026 Quality Performance Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-safety"
      />
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Services />
        <Process />
        <Projects />
        <Why />
        <Reviews />
        <Area />
        <FAQSection />
        <Estimate />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 shadow-2xl md:hidden">
        <a
          href={`tel:${SITE.tel}`}
          className="flex min-h-14 items-center justify-center gap-2 bg-navy font-bold text-white"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href="#estimate"
          className="flex min-h-14 items-center justify-center bg-safety font-bold text-navy"
        >
          Get estimate
        </a>
      </div>
    </>
  );
}
