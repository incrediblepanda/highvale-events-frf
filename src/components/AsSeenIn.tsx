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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white border-t border-sage/10 overflow-hidden"
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
          className="text-center text-2xl font-cormorant font-semibold text-sage mb-10"
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
            className="flex animate-scroll-right-to-left"
            data-element="logo-track"
            data-name="As Seen In Section > Carousel Box > Logo Track"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-16 min-w-[350px]"
              >
                <div className="text-sage/60 font-inter font-medium text-lg tracking-wider whitespace-nowrap">
                  {logo.text}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-16 min-w-[350px]"
              >
                <div className="text-sage/60 font-inter font-medium text-lg tracking-wider whitespace-nowrap">
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
