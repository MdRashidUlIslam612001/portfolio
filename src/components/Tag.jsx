export default function Tag({ children, tone = 'default' }) {
  const tones = {
    default: 'border-slateLine bg-white text-slate-700',
    teal: 'border-teal/20 bg-mist text-teal',
    brass: 'border-brass/20 bg-white text-brass',
    navy: 'border-navy/20 bg-white text-navy',
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}
