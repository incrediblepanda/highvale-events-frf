'use client';

import { motion } from 'framer-motion';

export default function AsSeenIn() {
  const logos = [
    { name: 'Zola', text: 'ZOLA' },
    { name: 'The Knot', text: 'THE KNOT' },
    { name: 'Best of Colorado Springs', text: 'BEST OF COLORADO SPRINGS' },
    { name: 'Zola', text: 'ZOLA' }, // Duplicate for seamless loop
    { name: 'The Knot', text: 'THE KNOT' },
    { name: 'Best of Colorado Springs', text: 'BEST OF COLORADO SPRINGS' },
  ];

  const getLogoSrc = (logo: { name: string; text: string; image?: string }) => {
    if (logo.image) return logo.image;
    const text = logo.text.replace(/&/g, '&amp;');
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='360' height='60'>
        <rect width='100%' height='100%' fill='transparent' />
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family="ivyModeBody, 'Inter', sans-serif" font-size='16' fill='#2A3532'>${text}</text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 bg-white border-t border-sage/10 overflow-hidden"
      data-element="as-seen-in-section"
      data-name="As Seen In Section"
    >
      <div
        className="max-w-full px-0"
        data-element="as-seen-in-container"
        data-name="As Seen In Section > Container"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-ivy-body font-semibold text-sage mb-10" style={{ font: '400 24px/28px ivyModeBody, "ivyModeBody Fallback"' }}
          data-element="section-heading"
          data-name="As Seen In Section > Heading"
        >
          As Seen In
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          data-element="logo-carousel"
          data-name="As Seen In Section > Carousel Box"
        >
          <div
            className="flex animate-scroll-right-to-left gap-4"
            style={{ width: 'max-content' }}
            data-element="logo-track"
            data-name="As Seen In Section > Carousel Box > Logo Track"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-4 sm:px-8 min-w-[120px] sm:min-w-[240px]"
              >
                <div className="text-sage/60 font-ivy-body font-medium text-lg tracking-wider whitespace-nowrap" style={{ font: '400 16px/20px ivyModeBody, "ivyModeBody Fallback"' }}>
                  {logo.text}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-4 sm:px-8 min-w-[120px] sm:min-w-[240px]"
              >
                <div className="text-sage/60 font-ivy-body font-medium text-lg tracking-wider whitespace-nowrap" style={{ font: '400 16px/20px ivyModeBody, "ivyModeBody Fallback"' }}>
                  {logo.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
