'use client';

import { useState } from 'react';
import InquirySection from '@/components/InquirySection';
import { PageTransition } from '@/components/PageTransition';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import ModernGallery from '@/components/ModernGallery';
import { galleryImages, galleryCategories, getCategoryCounts } from '@/data/galleryData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StandardHero from '@/components/StandardHero';

export default function GalleryPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoryCounts = getCategoryCounts();

  return (
    <>

      {/* Hero Section - Matching other pages */}
      <StandardHero
        title={<>Our Gallery</>}
        subtitle={<>A curated collection of our favorite moments from weddings, parties, and celebrations across Colorado's most beautiful venues.</>}
        learnMoreCallback={scrollToGallery}
        backgroundImage="url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F39ff8520416a4d7eabd3d346d3edd505)"
      />

      {/* Modern Gallery Section */}
      <section id="gallery-section" className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-ivy-headline text-sage-darkest mb-4">
              Our <span className="text-sage-dark italic">Portfolio</span>
            </h2>
            <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
              Browse through our curated collection of luxury weddings, elegant parties, and memorable celebrations.
            </p>
          </ScrollAnimation>

          <ModernGallery
            images={galleryImages}
            categories={galleryCategories}
            className=""
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-6">
              Ready to Create Your Own Beautiful Moments?
            </h2>
            <p className="text-lg text-sage-darker/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same attention to detail and creative flair.
            </p>
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Start Planning Today
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Inquiry Section */}
      <div id="inquiry-section">
        <InquirySection />
      </div>

    </>
  );
}
