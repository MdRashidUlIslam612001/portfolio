export default function TimelineItem({ title, subtitle, period, location, children }) {
  return (
    <article className="relative border-l border-slateLine pl-6">
      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal shadow" />
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-black text-navy">{title}</h3>
          <p className="mt-1 font-semibold text-slate-700">{subtitle}</p>
          {location && <p className="mt-1 text-sm text-slate-500">{location}</p>}
        </div>
        <p className="shrink-0 font-mono text-sm font-bold text-brass">{period}</p>
      </div>
      {children && <div className="mt-4 text-slate-700">{children}</div>}
    </article>
  );
}
