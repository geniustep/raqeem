export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" aria-busy="true">
      <span className="size-10 animate-spin rounded-full border-4 border-brand-navy-100 border-t-brand-teal motion-reduce:animate-none" />
    </div>
  );
}
