import { Images, Network } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { fieldworkGallery } from '../data/gallery.js';
import { leadership } from '../data/leadership.js';

export default function LeadershipSection() {
  return (
    <section className="section-shell">
      <SectionHeader id="leadership" number="09" title="Leadership and Service" eyebrow="Mentoring, teams, and student communities">
        Leadership across rover teams, technical clubs, robotics mentoring, math activities, cybersecurity, and
        department-level representation.
      </SectionHeader>

      <Reveal>
        <div className="mb-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slateLine bg-white text-teal">
              <Images size={20} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Fieldwork archive</p>
              <h3 className="text-2xl font-black text-navy">Rover Competitions, Awards, and Research Mobility</h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fieldworkGallery.map((photo, index) => (
              <figure
                key={`${photo.title}-${photo.year}-${index}`}
                className={`group overflow-hidden border border-slateLine bg-white shadow-sm ${
                  photo.wide ? 'md:col-span-2 xl:col-span-2' : ''
                }`}
              >
                <div className={`overflow-hidden bg-mist ${photo.wide ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>
                <figcaption className="border-t border-slateLine p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-black text-navy">{photo.title}</h4>
                    <span className="font-mono text-xs font-bold text-brass">{photo.year}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{photo.category}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {leadership.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.03}>
            <article className="h-full border border-slateLine bg-white p-5 shadow-sm">
              <Network className="text-teal" size={24} />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-brass">{item.role}</p>
              <h3 className="mt-2 text-lg font-black text-navy">{item.organization}</h3>
              <p className="mt-2 font-mono text-xs font-bold text-slate-500">{item.period}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
