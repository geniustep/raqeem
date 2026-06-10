interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders trusted, statically-built structured data. Never pass
 * user-provided content here.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
