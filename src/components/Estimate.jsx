import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, SERVICES } from "../data/site.js";
import { Heading, Reveal } from "./ui.jsx";
const f = "w-full border-2 border-rule bg-white px-4 py-3 text-navy focus:border-safety focus:outline-none";
export default function Estimate() {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.target));
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nCity: ${d.city}\nService: ${d.service}\n\n${d.details}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Estimate request: " + d.service)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="estimate" className="blueprint bg-navy py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Heading light eyebrow="Get started" title="Request your estimate" sub="Tell us about the project. We'll get back to you to set up a walkthrough." />
          <ul className="space-y-5 text-lg">
            <li><a href={`tel:${SITE.tel}`} className="flex items-center gap-4 hover:text-safety"><Phone className="text-safety" />{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-4 break-all hover:text-safety"><Mail className="text-safety" />{SITE.email}</a></li>
            <li className="flex items-start gap-4"><MapPin className="mt-1 shrink-0 text-safety" /><span>{SITE.address.join(", ")}<br /><span className="text-sm text-white/60">Open today · {SITE.closes}</span></span></li>
          </ul>
        </div>
        <Reveal>
          <form onSubmit={submit} className="space-y-4 bg-paper p-6 text-navy sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold">Name<input required name="name" autoComplete="name" className={f} /></label>
              <label className="text-sm font-bold">Phone<input required name="phone" type="tel" autoComplete="tel" className={f} /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold">City<input name="city" className={f} /></label>
              <label className="text-sm font-bold">Service<select name="service" className={f}>{SERVICES.map(s => <option key={s.name}>{s.name}</option>)}<option>Not sure yet</option></select></label>
            </div>
            <label className="block text-sm font-bold">Project details<textarea required name="details" rows="4" className={f} placeholder="What's going on? Where in the home?" /></label>
            <button className="min-h-14 w-full bg-safety font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white">Send estimate request</button>
            <p className="text-xs text-slate">{sent ? "Your email app should open with the details ready to send. You can also just call us." : "This opens your email app with your details filled in. Prefer to talk? Call us."}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
