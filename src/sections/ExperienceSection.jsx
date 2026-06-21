import { ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { experience } from '../data/experience.js';

export default function ExperienceSection() {
  return (
    <section className="border-y border-slateLine bg-white">
      <div className="section-shell">
        <SectionHeader id="experience" number="04" title="Professional Experience" eyebrow="Teaching, mentoring, and applied systems">
          Roles that combine university teaching, robotics leadership, student mentoring, and industry exposure.
        </SectionHeader>

        <div className="grid gap-7 lg:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.03}>
              <TimelineItem title={item.role} subtitle={item.organization} period={item.period}>
                <p className="leading-7 text-slate-700">{item.impact}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md border border-slateLine bg-paper px-3 py-2 text-sm font-bold text-navy transition hover:border-teal hover:text-teal"
                    aria-label={`Open ${item.linkLabel || 'link'} for ${item.role}`}
                  >
                    <ExternalLink size={16} />
                    {item.linkLabel || 'Link'}
                  </a>
                )}
              </TimelineItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
