export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <span className="ambient-bg__grid" />
      <span className="ambient-bg__sweep ambient-bg__sweep--one" />
      <span className="ambient-bg__sweep ambient-bg__sweep--two" />
      <span className="ambient-bg__nodes" />
    </div>
  );
}
