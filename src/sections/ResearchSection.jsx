import { Bot, BrainCircuit, Cpu, Eye, MousePointer2, UsersRound } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { researchInterests } from '../data/research.js';

const icons = [Bot, BrainCircuit, MousePointer2, Eye, Cpu, UsersRound];

export default function ResearchSection() {
  return (
    <section className="border-y border-slateLine bg-white">
      <div className="section-shell">
        <SectionHeader id="research" number="02" title="Research Interests" eyebrow="Prospective PhD direction">
          These interests connect robotic systems, intelligent sensing, adaptive interfaces, and human-centered
          evaluation into a coherent applied research agenda.
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {researchInterests.map((interest, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={interest.title} delay={index * 0.03}>
                <article className="h-full border border-slateLine bg-paper p-6 transition hover:-translate-y-1 hover:border-teal hover:shadow-soft">
                  <Icon className="text-teal" size={28} />
                  <h3 className="mt-5 text-xl font-black text-navy">{interest.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{interest.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
