export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 animate-pulse">
      {/* Header card skeleton */}
      <div className="rounded-2xl bg-(--muted) p-5 mb-5">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-(--border) shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-4 bg-(--border) rounded-md w-2/5 mb-2" />
            <div className="h-3 bg-(--border) rounded-md w-3/5" />
          </div>
        </div>
      </div>

      {/* Form skeleton */}
      <div className="bg-(--card) border border-(--border) rounded-2xl p-5 space-y-4">
        {[1, 2].map((i) => (
          <div key={i}>
            <div className="h-3 bg-(--muted) rounded w-24 mb-2" />
            <div className="h-10 bg-(--muted) rounded-xl w-full" />
          </div>
        ))}
        <div className="h-10 bg-(--muted) rounded-xl w-full opacity-60" />
      </div>

      {/* Result skeleton */}
      <div className="mt-4 bg-(--card) border border-(--border) rounded-2xl p-5">
        <div className="h-3 bg-(--muted) rounded w-16 mb-3" />
        <div className="h-7 bg-(--muted) rounded-md w-2/5 mb-2" />
        <div className="h-3 bg-(--muted) rounded w-3/5" />
      </div>
    </div>
  );
}
