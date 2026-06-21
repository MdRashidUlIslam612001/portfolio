export default function SectionHeader({ id, number, eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl" id={id}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-brass">{number}</p>
      <h2 className="mt-3 text-3xl font-black tracking-normal text-navy md:text-[2.35rem]">{title}</h2>
      {eyebrow && <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>}
      {children && <div className="mt-5 text-lg leading-8 text-slate-700">{children}</div>}
    </div>
  );
}
