import { ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Tag from '../components/Tag.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section className="border-y border-slateLine bg-white">
      <div className="section-shell">
        <SectionHeader id="projects" number="06" title="Notable Projects" eyebrow="Research-backed systems">
          Project work that demonstrates applied problem framing, prototyping, intelligent sensing, and user-centered
          evaluation rather than only software implementation.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.03}>
              <article className="flex h-full flex-col border border-slateLine bg-paper p-6 transition hover:-translate-y-1 hover:border-teal hover:shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black text-navy">{project.title}</h3>
                  {project.year && <span className="font-mono text-sm font-bold text-brass">{project.year}</span>}
                </div>
                <p className="mt-4 flex-1 leading-7 text-slate-700">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="focus-ring inline-flex items-center gap-2 rounded-md border border-slateLine bg-white px-3 py-2 text-sm font-bold text-navy transition hover:border-teal hover:text-teal"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
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
