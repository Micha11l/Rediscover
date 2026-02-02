import { antiAgingCopy, type TreatmentId } from "@/content/antiAgingCopy";

export function ServiceFaqBlockSection({
  treatment,
}: {
  treatment: TreatmentId;
}) {
  const data = antiAgingCopy[treatment].faq;
  const sectionId = `serviceFaqBlock-${treatment}`;

  return (
    <section
      id={sectionId}
      data-testid="service-faq"
      className="w-full bg-surface-base scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        {/* Two stacked rows; each row is (left title + right content) */}
        <div className="flex flex-col">
  {/* Row 1 */}
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
    <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1] text-brand-secondary">
      Key Benefits of{" "}
      <span className="text-text-primary">{data.title}</span>
    </h2>

    <ul data-testid="faq-benefits-list" className="flex flex-col gap-6">
      {data.benefits.map((item, index) => (
        <li key={item.title} data-testid={`faq-item-${index}`} className="flex gap-4">
          <span
            aria-hidden="true"
            className="shrink-0 font-heading text-[24px] leading-[1.2] text-text-primary"
          >
            •
          </span>

          <div className="flex flex-col">
            <span
              data-testid={`faq-q-${index}`}
              className="font-heading text-[24px] font-medium leading-[1.2] text-text-primary"
            >
              {item.title}
            </span>
            <p
              data-testid={`faq-a-${index}`}
              className="m-0 mt-1 font-heading text-[24px] font-normal leading-[1.2] text-brand-secondary"
            >
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Divider aligned to right column */}
  <div className="mt-[72px] grid grid-cols-1 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
    <div className="hidden lg:block" />
    <div className="h-px w-full bg-border" />
  </div>

  {/* Row 2 */}
  <div className="mt-[72px] grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
    <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1] text-brand-secondary">
      What {data.title}{" "}
      <span className="text-text-primary">Can Help With</span>
    </h2>

    <ul data-testid="faq-helps-list" className="flex flex-col gap-2">
      {data.helpsWith.map((item, index) => (
        <li key={item} data-testid={`faq-helps-${index}`} className="flex gap-4">
          <span
            aria-hidden="true"
            className="shrink-0 font-heading text-[24px] leading-[2] text-text-primary"
          >
            •
          </span>
          <span className="font-heading text-[24px] font-normal leading-[2] text-text-primary">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>
    </section>
  );
}
