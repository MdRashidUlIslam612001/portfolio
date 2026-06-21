import { ExternalLink, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Tag from '../components/Tag.jsx';
import { publicationFilters, publications } from '../data/publications.js';

export default function PublicationsSection() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () =>
      active === 'All'
        ? publications
        : publications.filter((publication) => publication.categories.includes(active)),
    [active],
  );

  return (
    <section className="section-shell">
      <SectionHeader id="publications" number="05" title="Publications" eyebrow="Research output">
        A publication record spanning robotics, HCI, computer vision, recommendation systems, usability, safety, and
        intelligent systems.
      </SectionHeader>

      <div className="mb-8 flex flex-wrap gap-2">
        {publicationFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`focus-ring rounded-md border px-4 py-2 text-sm font-black transition ${
              active === filter
                ? 'border-navy bg-navy text-white'
                : 'border-slateLine bg-white text-slate-700 hover:border-teal hover:text-teal'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((publication, index) => (
          <Reveal key={publication.title} delay={index * 0.03}>
            <article className="border border-slateLine bg-white p-6 shadow-sm transition hover:border-teal hover:shadow-soft">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Tag
                      tone={
                        publication.primaryType === 'Journal'
                          ? 'teal'
                          : publication.primaryType === 'Conference'
                            ? 'brass'
                            : 'navy'
                      }
                    >
                      {publication.primaryType}
                    </Tag>
                    {publication.categories
                      .filter((category) => category !== publication.primaryType)
                      .map((category) => (
                        <Tag key={category} tone="navy">
                          {category}
                        </Tag>
                      ))}
                    {publication.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <h3 className="text-xl font-black leading-snug text-navy">
                    <span className="mr-2 font-mono text-sm text-brass">[{publication.code}]</span>
                    {publication.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{publication.venue}</p>
                  {publication.authors && <p className="mt-2 text-sm font-semibold text-slate-600">{publication.authors}</p>}
                  {publication.doi && <p className="mt-2 text-sm text-slate-500">DOI: {publication.doi}</p>}
                  <p className="mt-2 text-sm text-slate-500">{publication.status}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end">
                  {publication.year && <span className="font-mono text-sm font-bold text-brass">{publication.year}</span>}
                  <a
                    href={publication.link}
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-slateLine bg-paper px-3 py-2 text-sm font-bold text-navy transition hover:border-teal hover:text-teal"
                    aria-label={`Open publication link for ${publication.title}`}
                  >
                    <ExternalLink size={16} />
                    Link
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      
    </section>
  );
}
