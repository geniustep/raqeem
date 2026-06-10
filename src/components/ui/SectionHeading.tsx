interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-teal-50 px-4 py-1.5 text-sm font-semibold text-brand-teal-700">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-gold" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{description}</p>
      ) : null}
    </div>
  );
}
