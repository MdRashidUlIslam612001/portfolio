import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-slateLine bg-white lg:ml-0">
      <div className="section-shell py-8 text-sm text-slate-600">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <p className="font-semibold text-navy">{profile.name}</p>
          <p>Academic portfolio for research collaboration and PhD applications.</p>
        </div>
      </div>
    </footer>
  );
}
