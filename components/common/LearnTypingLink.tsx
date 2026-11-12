import Link from "next/link";

export default function LearnTypingLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border bg-white p-4 hover-lift">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-[--color-text-muted]">
            {description ?? "New here?"}
          </p>
        </div>

        <Link
          href={href}
          className="btn-secondary whitespace-nowrap self-start sm:self-auto"
        >
          {label} →
        </Link>
      </div>
    </div>
  );
}
