import { Camera, CheckCircle2, CircleDashed, Mountain, Plane, Waves } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Tag from '../components/Tag.jsx';
import { adventureProfile } from '../data/adventures.js';
import { adventureGallery } from '../data/gallery.js';

const cards = [
  {
    title: 'Travel and Trekking',
    description:
      'Seeks new places, routes, and terrain through travel and trekking, with a steady interest in exploration beyond academic work.',
    icon: Mountain,
  },
  {
    title: 'Aerial Activities',
    description:
      'Completed paragliding and parasailing, with skydiving planned as a future high-altitude adventure.',
    icon: Plane,
  },
  {
    title: 'Water Activities',
    description:
      'Completed underwater walking, with scuba diving and river rafting on the next adventure list.',
    icon: Waves,
  },
];

export default function AdventureSection() {
  return (
    <section className="section-shell">
      <SectionHeader id="adventure" number="11" title="Beyond Research" eyebrow="Travel, trekking, and adventure">
        {adventureProfile.summary}
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={index * 0.03}>
              <article className="h-full border border-slateLine bg-white p-6 shadow-sm">
                <Icon className="text-teal" size={26} />
                <h3 className="mt-5 text-xl font-black text-navy">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{card.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="border border-slateLine bg-paper p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-teal" size={22} />
              <h3 className="text-lg font-black text-navy">Completed Activities</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {adventureProfile.completed.map((item) => (
                <Tag key={item} tone="teal">
                  {item}
                </Tag>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="border border-slateLine bg-paper p-6">
            <div className="flex items-center gap-3">
              <CircleDashed className="text-brass" size={22} />
              <h3 className="text-lg font-black text-navy">Next Adventure List</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {adventureProfile.upcoming.map((item) => (
                <Tag key={item} tone="brass">
                  {item}
                </Tag>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slateLine bg-white text-teal">
              <Camera size={20} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Visual notes</p>
              <h3 className="text-2xl font-black text-navy">Travel, Trekking, and Adventure Gallery</h3>
            </div>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
            {adventureGallery.map((photo) => (
              <figure
                key={`${photo.title}-${photo.year}`}
                className="mb-4 break-inside-avoid overflow-hidden border border-slateLine bg-white shadow-sm"
              >
                <div className="overflow-hidden bg-mist">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    className="h-auto w-full transition duration-500 hover:scale-[1.025]"
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
    </section>
  );
}
