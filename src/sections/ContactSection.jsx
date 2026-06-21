import { Globe2, GraduationCap, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { profile } from '../data/profile.js';

const contactItems = [
  { label: 'Official Email', value: profile.officialEmail, href: profile.officialEmailHref, icon: Mail },
  { label: 'Personal Email', value: profile.personalEmail, href: profile.personalEmailHref, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'LinkedIn', value: 'LinkedIn profile', href: profile.linkedin, icon: Linkedin },
  { label: 'Google Scholar', value: 'Google Scholar profile', href: profile.googleScholar, icon: GraduationCap },
  { label: 'Website', value: 'Personal website', href: profile.website, icon: Globe2 },
  { label: 'Location', value: profile.location, href: null, icon: MapPin },
];

export default function ContactSection() {
  return (
    <section className="section-shell">
      <SectionHeader id="contact" number="12" title="Contact" eyebrow="Research collaboration">
        Open to PhD supervision conversations, research collaboration, robotics projects, and academic partnerships.
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const Component = item.href ? 'a' : 'div';
              return (
                <Component
                  key={item.label}
                  href={item.href || undefined}
                  className="focus-ring flex items-center gap-4 border border-slateLine bg-white p-4 shadow-sm transition hover:border-teal"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-navy">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brass">{item.label}</span>
                    <span className="mt-1 block font-semibold text-slate-700">{item.value}</span>
                  </span>
                </Component>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            className="border border-slateLine bg-white p-6 shadow-sm md:p-8"
            action={profile.officialEmailHref === '#' ? '#' : profile.officialEmailHref}
            method="get"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name</span>
                <input
                  className="focus-ring mt-2 w-full border border-slateLine bg-paper px-3 py-3 text-slate-800"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input
                  className="focus-ring mt-2 w-full border border-slateLine bg-paper px-3 py-3 text-slate-800"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Subject</span>
              <input
                className="focus-ring mt-2 w-full border border-slateLine bg-paper px-3 py-3 text-slate-800"
                type="text"
                name="subject"
              />
            </label>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                className="focus-ring mt-2 min-h-36 w-full resize-y border border-slateLine bg-paper px-3 py-3 text-slate-800"
                name="body"
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-navy bg-navy px-4 py-3 text-sm font-black text-white transition hover:bg-ink"
            >
              <Send size={17} />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
