import { BookOpenCheck } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { teachingGroups } from '../data/teaching.js';

export default function TeachingSection() {
  return (
    <section className="border-y border-slateLine bg-white">
      <div className="section-shell">
        <SectionHeader id="teaching" number="08" title="Teaching Experience" eyebrow="Course areas">
          Teaching is organized around core CSE foundations, lab-based learning, and applied systems mentoring.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {teachingGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.03}>
              <article className="h-full border border-slateLine bg-paper p-6">
                <BookOpenCheck className="text-teal" size={26} />
                <h3 className="mt-5 text-xl font-black text-navy">{group.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{group.description}</p>
                <ul className="mt-5 space-y-2">
                  {group.courses.map((course) => (
                    <li key={course} className="border-l-2 border-teal bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                      {course}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
