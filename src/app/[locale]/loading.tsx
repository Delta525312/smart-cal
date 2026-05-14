export default function Loading() {
  return (
    <div className="w-full max-w-2xl mx-auto animate-pulse">
      {/* Header — mirrors CalculatorLayout hero (border, p-6, icon + title) */}
      <div className="relative mb-6 rounded-2xl overflow-hidden border border-(--border)">
        <div className="flex items-start gap-4 p-6">
          <div className="w-14 h-14 rounded-2xl bg-(--muted) shrink-0" />
          <div className="flex-1 min-w-0 pt-1">
            <div className="h-7 bg-(--muted) rounded-lg w-2/5 mb-2.5" />
            <div className="h-4 bg-(--muted) rounded w-4/5 mb-1.5" />
            <div className="h-4 bg-(--muted) rounded w-3/5" />
          </div>
        </div>
      </div>

      {/* Ad slot placeholder */}
      <div className="mb-5 h-24 rounded-2xl bg-(--muted)" />

      {/* Form card — mirrors typical calculator card (p-6, labels + inputs + button) */}
      <div className="bg-(--card) border border-(--border) rounded-2xl p-6 space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="h-3.5 bg-(--muted) rounded w-28 mb-2" />
            <div className="h-11 bg-(--muted) rounded-xl w-full" />
          </div>
        ))}
        <div className="h-12 bg-(--muted) rounded-xl w-full mt-2" />
      </div>

      {/* Result card */}
      <div className="mt-4 bg-(--card) border border-(--border) rounded-2xl p-6">
        <div className="h-3.5 bg-(--muted) rounded w-24 mb-3" />
        <div className="h-9 bg-(--muted) rounded-lg w-2/5 mb-2" />
        <div className="h-3.5 bg-(--muted) rounded w-3/5" />
      </div>
    </div>
  );
}
