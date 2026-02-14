import { DecorativeDivider } from "@/components/ui";

export function RmtWelcomeSection() {
  return (
    <section data-testid="rmt-welcome" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[40px] pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="text-center font-heading text-[48px] font-medium leading-[1.2]">
          <p className="m-0 text-text-primary">At Rediscover Beauty Clinic,</p>
          <p className="m-0 text-brand-secondary">
            our Registered Massage Therapy services are
            <br />
            designed to support both physical recovery and
            <br />
            overall well-being.
          </p>
        </div>
      </div>

      <DecorativeDivider className="py-6" />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[100px] pt-[40px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="text-center font-body text-[16px] leading-[1.6] text-brand-secondary">
          <p className="mb-0 font-semibold">About Our RMT Services</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            All Registered Massage Therapy (RMT) treatments at Rediscover Beauty
            Clinic are provided by a licensed Registered Massage Therapist in Ontario.
          </p>
          <p className="mb-0">
            Our approach focuses on therapeutic effectiveness while maintaining a
            relaxing, professional environment.
          </p>
          <p className="mb-0">Insurance receipts are available for eligible plans.</p>
        </div>
      </div>
    </section>
  );
}
