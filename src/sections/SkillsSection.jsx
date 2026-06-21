import { Wrench } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Tag from '../components/Tag.jsx';
import { skills } from '../data/skills.js';

export default function SkillsSection() {
  return (
    <section className="border-y border-slateLine bg-white">
      <div className="section-shell">
        <SectionHeader id="skills" number="10" title="Skills" eyebrow="Technical toolkit">
          Skills are grouped around programming, AI/ML, embedded systems, robotics, and tools explicitly supported by
          the provided CV extract.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.03}>
              <article className="h-full border border-slateLine bg-paper p-6">
                <Wrench className="text-teal" size={24} />
                <h3 className="mt-5 text-xl font-black text-navy">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
