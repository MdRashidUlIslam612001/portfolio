import { Award, ExternalLink, Trophy } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { awards, featuredAwards } from '../data/awards.js';

export default function AwardsSection() {
  return (
    <section className="section-shell">
      <SectionHeader id="awards" number="07" title="Honors and Awards" eyebrow="Recognition">
        A selected record of academic distinction, research recognition, innovation awards, robotics competitions, and
        programming or mathematics placements.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredAwards.map((award, index) => (
          <Reveal key={award.title} delay={index * 0.03}>
            <article className="h-full border border-slateLine border-t-navy border-t-4 bg-white p-5 shadow-sm">
              <Trophy className="text-teal" size={28} />
              <p className="mt-5 font-mono text-sm font-bold text-brass">{award.year || 'Distinction'}</p>
              <h3 className="mt-2 text-lg font-black leading-snug text-navy">{award.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-600">{award.organization}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{award.detail}</p>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-slateLine bg-paper px-3 py-2 text-sm font-bold text-navy transition hover:border-teal hover:text-teal"
                  aria-label={`Open ${award.linkLabel || 'link'} for ${award.title}`}
                >
                  <ExternalLink size={16} />
                  {award.linkLabel || 'Link'}
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {awards.map((award, index) => (
          <Reveal key={award.title} delay={index * 0.02}>
            <article className="flex gap-4 border border-slateLine bg-white p-5 shadow-sm">
              <Award className="mt-1 shrink-0 text-teal" size={22} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-black text-navy">{award.title}</h3>
                  {award.year && <span className="font-mono text-xs font-bold text-brass">{award.year}</span>}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{award.detail}</p>
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md border border-slateLine bg-paper px-3 py-2 text-sm font-bold text-navy transition hover:border-teal hover:text-teal"
                    aria-label={`Open ${award.linkLabel || 'link'} for ${award.title}`}
                  >
                    <ExternalLink size={16} />
                    {award.linkLabel || 'Link'}
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
