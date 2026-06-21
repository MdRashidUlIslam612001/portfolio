import { ArrowDown, Download, FileText, FolderKanban, Mail, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Tag from '../components/Tag.jsx';
import { profile } from '../data/profile.js';

const actions = [
  { label: 'Download CV', href: profile.cvUrl, icon: Download, variant: 'primary' },
  { label: 'View Publications', href: '#publications', icon: FileText, variant: 'secondary' },
  { label: 'View Projects', href: '#projects', icon: FolderKanban, variant: 'secondary' },
  { label: 'Contact', href: '#contact', icon: Mail, variant: 'secondary' },
];

export default function HeroSection() {
  return (
    <section id="intro" className="relative overflow-hidden bg-white pt-20 lg:pt-0">
      <div className="section-shell grid min-h-[calc(100vh-1rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.7fr]">
        <Reveal>
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-brass">00 Intro</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-navy md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-700 md:text-xl">
              {profile.shortTitle}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
              <MapPin size={17} />
              {profile.location}
            </p>
            <p className="mt-7 max-w-2xl text-left text-base leading-8 text-slate-700 md:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.researchTags.map((tag) => (
                <Tag key={tag} tone="teal">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {actions.map((action) => {
                const Icon = action.icon;
                const primary = action.variant === 'primary';
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`focus-ring inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-black transition ${
                      primary
                        ? 'border-navy bg-navy text-white hover:bg-ink'
                        : 'border-slateLine bg-white text-navy hover:border-teal hover:text-teal'
                    }`}
                  >
                    <Icon size={18} />
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -left-3 top-3 h-full w-full border border-slateLine bg-mist" />
            <div className="relative overflow-hidden border border-slateLine bg-white shadow-soft">
              <img
                className="aspect-[4/5] w-full object-cover"
                src={profile.image}
                alt="Portrait of Md Rashid Ul Islam"
              />
            </div>
          </div>
        </Reveal>
      </div>
      <a
        href="#about"
        className="screen-only focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-slateLine bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm lg:left-[calc(50%+9rem)] md:inline-flex"
      >
        Continue
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
