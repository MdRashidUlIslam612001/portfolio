import { GraduationCap, Microscope, Users } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const facts = [
  { label: 'B.Sc. CGPA', value: '3.84/4.00', icon: GraduationCap },
  { label: 'Class Rank', value: '3rd of 88', icon: Users },
  { label: 'Current Role', value: 'Lecturer at MIST', icon: Microscope },
];

export default function AboutSection() {
  return (
    <section className="section-shell" aria-labelledby="about-heading">
      <SectionHeader id="about" number="01" title="About" eyebrow="Academic biography">
        <p id="about-heading">
          Md Rashid Ul Islam is a Computer Science and Engineering lecturer at the Military Institute of Science and
          Technology with a strong undergraduate record and a research profile shaped by robotics, AI, HCI, IoT, and
          intelligent systems.
        </p>
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="border border-slateLine bg-white p-5 shadow-sm">
                  <Icon className="text-teal" size={24} />
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                  <p className="mt-2 text-2xl font-black text-navy">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 border border-slateLine bg-white p-6 text-lg leading-8 text-slate-700 shadow-sm md:p-8">
            <p>
              Completed B.Sc. in Computer Science and Engineering from MIST from Jan 2020 to Mar 2024, earning a CGPA
              of 3.84 out of 4.00 and ranking 3rd among 88 students. This academic foundation is reinforced by
              sustained work in robotics competitions, intelligent-system prototypes, HCI studies, and publication-led
              research.
            </p>
            <p>
              Combines teaching, student mentoring, and research development as a Lecturer at MIST. Work spans
              cost-effective robotics, computer-vision systems for monitoring and prediction, adaptive interfaces,
              usability research for underrepresented users, and IoT-based embedded automation.
            </p>
            <p>
              Positioned for PhD study around research that connects deployable AI and robotics with human needs,
              field constraints, and measurable impact in domains such as agriculture, public health,
              safety, education, and intelligent infrastructure.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
