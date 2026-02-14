export function RmtHelpSection() {
  return (
    <>
      <section data-testid="rmt-help" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
              <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1]">
                <span className="text-brand-secondary">What RMT </span>
                <span className="text-text-primary">Can Help With?</span>
              </h2>
              <p className="mb-0 mt-6 font-body text-[16px] leading-[1.6] text-brand-secondary">
                Clinically focused therapeutic massage to support pain relief and recovery.
              </p>
            </div>

            <div className="flex flex-1 flex-col font-heading text-[24px] leading-[1.5]">
              <p className="mb-0 text-text-primary">
                Registered Massage Therapy may help support:
              </p>
              <div className="h-[24px]" />
              <ul className="mb-0 list-disc pl-[36px] text-brand-secondary">
                <li className="mb-0">Muscle tension and chronic pain</li>
                <li className="mb-0">Neck, shoulder, and lower back discomfort</li>
                <li className="mb-0">Postural strain from work or daily activities</li>
                <li className="mb-0">Sports-related soreness or recovery</li>
                <li className="mb-0">Stress relief and relaxation</li>
                <li className="mb-0">Improved circulation and mobility</li>
              </ul>
              <div className="h-[24px]" />
              <p className="mb-0 text-text-primary">
                Each treatment plan is adjusted based on your comfort level and treatment goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex lg:justify-end">
          <hr className="m-0 h-px w-full border-0 bg-border-muted lg:w-7/12" />
        </div>
      </div>

      <section data-testid="rmt-insurance" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
              <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1]">
                <span className="text-brand-secondary">Insurance & </span>
                <span className="text-text-primary">Receipts</span>
              </h2>
              <p className="mb-0 mt-6 font-body text-[16px] leading-[1.6] text-brand-secondary">
                Coverage may vary by insurance provider.
              </p>
            </div>

            <div className="flex flex-1 flex-col font-heading text-[24px] leading-[1.5] text-text-primary">
              <ul className="mb-0 list-disc pl-[36px]">
                <li className="mb-0">
                  RMT services may be eligible for reimbursement under many extended health insurance plans
                </li>
              </ul>
              <div className="h-[24px]" />
              <ul className="mb-0 list-disc pl-[36px]">
                <li className="mb-0 font-semibold">
                  Official insurance receipts are provided upon request
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
