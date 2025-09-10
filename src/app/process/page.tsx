'use client';

import Navigation from '@/components/Navigation';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhases = () => {
    const phasesSection = document.getElementById('phases-section');
    if (phasesSection) {
      phasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phases = [
    {
      number: 'Phase One',
      title: 'Discovery',
      timeline: '9-12 months out',
      description: 'We begin by getting to know you, understanding your vision, and establishing the foundation for your celebration.',
      details: [
        'Initial consultation and vision mapping',
        'Budget setting and allocation',
        'Venue selection and booking',
        'Initial vendor recommendations',
        'Style and aesthetic exploration'
      ],
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      number: 'Phase Two',
      title: 'Planning',
      timeline: 'Ongoing',
      description: 'The organizational phase where we keep all the moving pieces on track and ensure nothing falls through the cracks.',
      details: [
        'Vendor contracts and negotiations',
        'Guest list management',
        'Timeline development',
        'Regular check-ins and updates',
        'Logistics coordination'
      ],
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      number: 'Phase Three',
      title: 'Design',
      timeline: '4-9 months out',
      description: 'This is where your vision comes to life through colors, textures, and creative details.',
      details: [
        'Color palette and mood board creation',
        'Fabric swatches and material selection',
        'Floral design concepts',
        'Stationery and signage design',
        'Visual direction finalization'
      ],
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      number: 'Phase Four',
      title: 'Final Execution',
      timeline: '2-4 months out',
      description: 'The final stretch where everything comes together for a flawless celebration.',
      details: [
        'Final vendor meetings',
        'Rehearsal coordination',
        'Day-of timeline finalization',
        'Emergency planning and backup solutions',
        'Complete vendor coordination for event day'
      ],
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section - Slimmer version */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-white to-champagne/20" />

        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Grey-green overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-darkest/20 to-sage-darker/15" />

        <PageTransition className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/golden-wheat-highvale.png"
            alt="Highvale Events"
            className="h-20 md:h-24 mx-auto mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-cormorant text-sage-darkest mb-4"
          >
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            A proven four-phase approach that takes your celebration from initial vision to flawless execution, with you at the center of every decision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Contact Form
            </Button>
            <Button
              onClick={scrollToPhases}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </PageTransition>
      </section>

      {/* Process Phases */}
      <section id="phases-section" className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-gradient-sage rounded-full w-24 h-24 flex items-center justify-center mb-6">
                    <span className="text-white font-cormorant text-3xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-champagne font-cormorant text-lg font-semibold mb-2">
                    {phase.number}
                  </h3>
                  <h2 className="text-4xl font-cormorant font-bold text-sage mb-3">
                    {phase.title}
                  </h2>
                  <p className="text-sage/60 font-inter text-sm mb-4">
                    {phase.timeline}
                  </p>
                  <p className="text-sage/70 font-inter leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-champagne mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sage/70 text-sm font-inter">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Our <span className="text-champagne italic">Promise</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-sage/70 font-inter leading-relaxed mb-6">
              At Highvale Events, we promise to make your planning process as seamless and enjoyable
              as the celebration itself. We're not just your planners – we're your advocates, your
              creative partners, and your biggest supporters.
            </p>
            <p className="text-lg text-sage/70 font-inter leading-relaxed mb-6">
              We promise to listen first, create together, and execute flawlessly. Your vision is our
              mission, and we won't rest until every detail exceeds your expectations.
            </p>
            <p className="text-lg text-sage/70 font-inter leading-relaxed mb-8">
              Most importantly, we promise to handle the stress so you don't have to. From vendor
              hiccups to timeline adjustments, we've got it covered. You focus on the joy – we'll
              handle everything else.
            </p>
            <div className="text-2xl font-cormorant font-semibold text-champagne italic">
              Client-first, always.
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <AsSeenIn />

      {/* Inquiry Section */}
      <div id="inquiry-section">
        <InquirySection />
      </div>

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
}
