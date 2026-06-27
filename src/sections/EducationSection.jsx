import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { education } from '../data/education.js';

export default function EducationSection() {
  return (
    <section className="section-shell">
      <SectionHeader id="education" number="03" title="Education" eyebrow="Academic foundation">
      </SectionHeader>

      <div className="space-y-8">
        {education.map((item, index) => (
          <Reveal key={item.institution} delay={index * 0.04}>
            <TimelineItem
              title={item.institution}
              subtitle={item.degree}
              period={item.period}
              location={item.location}
            >
              <ul className="flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <li key={detail} className="rounded-full border border-slateLine bg-white px-3 py-1 text-sm font-bold">
                    {detail}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
