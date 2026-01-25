/**
 * DevTools QA Script for Anti-Aging Page
 *
 * Run this script in the browser DevTools console when viewing:
 * http://localhost:3000/services/anti-aging
 *
 * Checks:
 * 1. Section padding, gap, max-width
 * 2. Component reuse verification (same TSX for repeated sections)
 * 3. Design token compliance
 */

(function qaAntiAgingPage() {
  console.log('%c🔍 Anti-Aging Page QA Report', 'font-size: 18px; font-weight: bold; color: #735B4B;');
  console.log('═'.repeat(60));

  // Expected values based on Figma specs
  const SPECS = {
    containerMaxWidth: 1440,
    containerPaddingDesktop: 100, // xl:px-[100px]
    sectionPaddingY: 100, // py-[100px]
    recommendedGap: 48, // gap-12
    accordionGap: 24, // gap-6
    cardBorderRadius: 24, // rounded-3xl
    recommendedCardBorderRadius: 45, // rounded-[45px]
  };

  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
  };

  function log(status, message, details = '') {
    const icons = { pass: '✅', fail: '❌', warn: '⚠️', info: 'ℹ️' };
    const colors = { pass: 'green', fail: 'red', warn: 'orange', info: 'blue' };
    console.log(`%c${icons[status]} ${message}`, `color: ${colors[status]}`, details);
    if (status === 'pass') results.passed++;
    if (status === 'fail') results.failed++;
    if (status === 'warn') results.warnings++;
  }

  // =========================================================================
  // 1. CHECK SECTION EXISTENCE AND ORDER
  // =========================================================================
  console.log('\n%c📋 Section Structure', 'font-size: 14px; font-weight: bold;');

  const expectedSections = [
    { testId: 'anti-aging-hero', name: 'Hero' },
    { testId: 'service-about-sofwave', name: 'About - Sofwave' },
    { testId: 'recommended-for-sofwave-recommended', name: 'Recommended - Sofwave' },
    { testId: 'sofwave-faq-block', name: 'FAQ Block - Sofwave' },
    { testId: 'sofwave-before-after', name: 'Before/After - Sofwave' },
    { testId: 'service-about-thermage', name: 'About - Thermage' },
    { testId: 'recommended-for-thermage-recommended', name: 'Recommended - Thermage' },
    { testId: 'thermage-faq-block', name: 'FAQ Block - Thermage' },
    { testId: 'thermage-before-after', name: 'Before/After - Thermage' },
    { testId: 'service-about-morpheus8', name: 'About - Morpheus8' },
    { testId: 'recommended-for-morpheus8-recommended', name: 'Recommended - Morpheus8' },
    { testId: 'morpheus8-faq-block', name: 'FAQ Block - Morpheus8' },
    { testId: 'morpheus8-before-after', name: 'Before/After - Morpheus8' },
    { testId: 'service-about-forma', name: 'About - Forma' },
    { testId: 'recommended-for-forma-recommended', name: 'Recommended - Forma' },
    { testId: 'forma-faq-block', name: 'FAQ Block - Forma' },
    { testId: 'forma-before-after', name: 'Before/After - Forma' },
    { testId: 'service-testimoni-carousel', name: 'Testimonial Carousel' },
    { testId: 'anti-aging-faq', name: 'General FAQ' },
  ];

  expectedSections.forEach(({ testId, name }) => {
    const el = document.querySelector(`[data-testid="${testId}"]`);
    if (el) {
      log('pass', `${name} section found`);
    } else {
      log('fail', `${name} section NOT found`, `data-testid="${testId}"`);
    }
  });

  // =========================================================================
  // 2. CHECK CONTAINER MAX-WIDTH
  // =========================================================================
  console.log('\n%c📐 Container Max-Width Check', 'font-size: 14px; font-weight: bold;');

  const containers = document.querySelectorAll('[class*="max-w-[1440px]"]');
  log('info', `Found ${containers.length} containers with max-w-[1440px]`);

  if (containers.length >= 10) {
    log('pass', 'Sufficient containers using correct max-width');
  } else {
    log('warn', 'Some sections may not have proper max-width constraint');
  }

  // =========================================================================
  // 3. CHECK RECOMMENDED FOR SECTIONS (Component Reuse)
  // =========================================================================
  console.log('\n%c🔄 Component Reuse Check - Recommended For', 'font-size: 14px; font-weight: bold;');

  const recommendedSections = document.querySelectorAll('[data-testid^="recommended-for-"]');
  log('info', `Found ${recommendedSections.length} Recommended For sections`);

  if (recommendedSections.length === 4) {
    log('pass', 'All 4 Recommended For sections rendered');

    // Check they all have same structure (4 cards each)
    let allHave4Cards = true;
    recommendedSections.forEach((section, i) => {
      const cards = section.querySelectorAll('[class*="rounded-[45px]"]');
      if (cards.length !== 4) {
        allHave4Cards = false;
        log('fail', `Section ${i + 1} has ${cards.length} cards instead of 4`);
      }
    });
    if (allHave4Cards) {
      log('pass', 'All Recommended sections have 4 cards (using RecommendedForGrid)');
    }
  } else {
    log('fail', `Expected 4 Recommended For sections, found ${recommendedSections.length}`);
  }

  // =========================================================================
  // 4. CHECK BEFORE/AFTER SECTIONS (Component Reuse)
  // =========================================================================
  console.log('\n%c🔄 Component Reuse Check - Before/After', 'font-size: 14px; font-weight: bold;');

  const beforeAfterSections = document.querySelectorAll('[data-testid$="-before-after"]');
  log('info', `Found ${beforeAfterSections.length} Before/After sections`);

  if (beforeAfterSections.length === 4) {
    log('pass', 'All 4 Before/After sections rendered');

    // Check they all have 2 images with rounded-[30px]
    let allHave2Images = true;
    beforeAfterSections.forEach((section, i) => {
      const images = section.querySelectorAll('[class*="rounded-[30px]"]');
      if (images.length !== 2) {
        allHave2Images = false;
        log('fail', `Section ${i + 1} has ${images.length} image containers instead of 2`);
      }
    });
    if (allHave2Images) {
      log('pass', 'All Before/After sections have 2 image containers (using BeforeAfterGrid)');
    }
  } else {
    log('fail', `Expected 4 Before/After sections, found ${beforeAfterSections.length}`);
  }

  // =========================================================================
  // 5. CHECK DECORATIVE DIVIDERS
  // =========================================================================
  console.log('\n%c🔄 Component Reuse Check - Decorative Dividers', 'font-size: 14px; font-weight: bold;');

  const dividers = document.querySelectorAll('[role="separator"]');
  log('info', `Found ${dividers.length} decorative dividers`);

  if (dividers.length === 3) {
    log('pass', 'All 3 decorative dividers rendered');
  } else {
    log('warn', `Expected 3 dividers, found ${dividers.length}`);
  }

  // =========================================================================
  // 6. CHECK FAQ ACCORDION (Component Reuse)
  // =========================================================================
  console.log('\n%c🔄 Component Reuse Check - FAQ Accordion', 'font-size: 14px; font-weight: bold;');

  const faqSection = document.querySelector('[data-testid="anti-aging-faq"]');
  if (faqSection) {
    log('pass', 'General FAQ section found');

    const accordionItems = faqSection.querySelectorAll('[class*="rounded-3xl"]');
    if (accordionItems.length >= 3) {
      log('pass', `FAQ has ${accordionItems.length} accordion items (using FaqAccordion)`);
    } else {
      log('warn', `FAQ has only ${accordionItems.length} accordion items`);
    }
  } else {
    log('fail', 'General FAQ section not found');
  }

  // =========================================================================
  // 7. CHECK PADDING VALUES
  // =========================================================================
  console.log('\n%c📏 Padding/Spacing Check', 'font-size: 14px; font-weight: bold;');

  // Check About sections have py-[100px]
  const aboutSections = document.querySelectorAll('[data-testid^="service-about-"]');
  aboutSections.forEach((section, i) => {
    const styles = window.getComputedStyle(section);
    const paddingTop = parseInt(styles.paddingTop);
    const paddingBottom = parseInt(styles.paddingBottom);

    if (paddingTop === 100 && paddingBottom === 100) {
      log('pass', `About section ${i + 1} has correct py-[100px]`);
    } else {
      log('warn', `About section ${i + 1} padding: ${paddingTop}/${paddingBottom}px`, 'Expected 100px');
    }
  });

  // =========================================================================
  // 8. CHECK BACKGROUND COLORS
  // =========================================================================
  console.log('\n%c🎨 Background Color Check', 'font-size: 14px; font-weight: bold;');

  recommendedSections.forEach((section, i) => {
    const styles = window.getComputedStyle(section);
    const bgColor = styles.backgroundColor;
    // brand-secondary should be rgb(115, 91, 75) or similar
    if (bgColor.includes('115') || bgColor.includes('91') || bgColor.includes('75')) {
      log('pass', `Recommended section ${i + 1} has brand-secondary background`);
    } else {
      log('warn', `Recommended section ${i + 1} background: ${bgColor}`);
    }
  });

  // =========================================================================
  // SUMMARY
  // =========================================================================
  console.log('\n' + '═'.repeat(60));
  console.log('%c📊 QA Summary', 'font-size: 16px; font-weight: bold;');
  console.log(`%c✅ Passed: ${results.passed}`, 'color: green; font-weight: bold;');
  console.log(`%c❌ Failed: ${results.failed}`, 'color: red; font-weight: bold;');
  console.log(`%c⚠️ Warnings: ${results.warnings}`, 'color: orange; font-weight: bold;');

  if (results.failed === 0) {
    console.log('%c\n🎉 All critical checks passed!', 'font-size: 14px; color: green; font-weight: bold;');
  } else {
    console.log('%c\n⚠️ Some checks failed. Review the issues above.', 'font-size: 14px; color: red; font-weight: bold;');
  }

  // Return summary for programmatic use
  return results;
})();
