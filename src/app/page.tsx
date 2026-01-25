/**
 * Main Home Page
 * Placeholder - actual preview at /figma-home
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-base">
      <div className="text-center">
        <h1 className="font-heading text-heading-xl text-text-primary">
          Beauva
        </h1>
        <p className="mt-4 font-body text-body-lg text-text-muted">
          Preview available at{" "}
          <a href="/figma-home" className="text-brand-secondary underline">
            /figma-home
          </a>
        </p>
      </div>
    </main>
  );
}
