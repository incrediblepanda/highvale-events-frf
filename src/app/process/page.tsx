'use client';

import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StandardHero from '@/components/StandardHero';

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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F800489f1000249769fbb0285c522154a'
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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F070cb75f5c4548b3ac4e044635a1b4ad'
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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F57ab56aab34b44329ef5bad9cf5652e2'
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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F7afb9b4d984d4cdd8ef6358d3cec72be'
    }
  ];

  return (
    <div className="bg-cream" style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}>

          {/* Hero Section - Slimmer version */}
      <StandardHero
        title={<>Our Process</>}
        subtitle={<>A proven four-phase approach that takes your celebration from initial vision to flawless execution, with you at the center of every decision.</>}
        learnMoreCallback={scrollToPhases}
        backgroundImage="url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Faa88c307fd1340f39c05a5c95aa7bdc5)"
      />

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
