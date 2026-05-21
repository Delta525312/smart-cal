interface FaqItem {
  q: string;
  a: string;
}

interface CalcInfoSectionProps {
  howTitle: string;
  steps: string[];
  formulaTitle: string;
  formula: string;
  faqTitle: string;
  faq: FaqItem[];
}

export function CalcInfoSection({
  howTitle,
  steps,
  formulaTitle,
  formula,
  faqTitle,
  faq,
}: CalcInfoSectionProps) {
  return (
    <div className="mt-8 space-y-4">
      {/* How to Use */}
      <div className="rounded-2xl border border-(--border) bg-(--card) p-6" style={{ boxShadow: "var(--card-shadow)" }}>
        <h2 className="font-bold text-base mb-4">{howTitle}</h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-(--muted-foreground)">
              <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* How it works / Formula */}
      <div className="rounded-2xl border border-(--border) bg-(--card) p-6" style={{ boxShadow: "var(--card-shadow)" }}>
        <h2 className="font-bold text-base mb-2">{formulaTitle}</h2>
        <p className="text-sm text-(--muted-foreground) leading-relaxed">{formula}</p>
      </div>

      {/* FAQ */}
      <div className="rounded-2xl border border-(--border) bg-(--card) p-6" style={{ boxShadow: "var(--card-shadow)" }}>
        <h2 className="font-bold text-base mb-4">{faqTitle}</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i}>
              <p className="font-semibold text-sm">{item.q}</p>
              <p className="text-sm text-(--muted-foreground) mt-1 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
