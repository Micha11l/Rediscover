export function AboutMapSection() {
  return (
    <section data-testid="about-map" className="w-full bg-surface-base">
       <div className="mx-auto w-full max-w-[1440px] py-12 md:py-16 lg:py-[100px]">
        <div className="relative h-[480px] w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.9876543!2d-79.3858!3d43.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4a5f5f5f5f5%3A0x1234567890abcdef!2s9425%20Leslie%20St%2C%20Richmond%20Hill%2C%20ON%20L4B%203N7!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rediscover Beauty Clinic Location"
            className="absolute inset-0 size-full"
          />
        </div>
      </div>
    </section>
  );
}
