import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '../data/navigation.js';
import { profile } from '../data/profile.js';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-72 flex-col border-r border-slateLine bg-paper/95 px-7 py-8 backdrop-blur lg:flex">
        <a href="#intro" className="focus-ring block" aria-label="Go to intro">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-teal">Academic Portfolio</p>
          <h1 className="mt-3 text-xl font-black leading-tight text-navy">{profile.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{profile.shortTitle}</p>
        </a>

        <div className="mt-9 flex-1 space-y-1 overflow-y-auto pb-4">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="focus-ring group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-navy"
            >
              <span className="font-mono text-xs text-brass">{item.number}</span>
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-slateLine pt-5 text-sm text-slate-600">
          <p>{profile.location}</p>
          <a className="focus-ring mt-2 inline-flex font-semibold text-teal" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slateLine bg-paper/96 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <a href="#intro" className="focus-ring min-w-0">
            <p className="truncate text-sm font-black text-navy">{profile.name}</p>
            <p className="truncate text-xs text-slate-600">Academic Portfolio</p>
          </a>
          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-slateLine bg-white text-navy"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slateLine pt-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              >
                <span className="mr-2 font-mono text-xs text-brass">{item.number}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
