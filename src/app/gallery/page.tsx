'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import InquirySection from '@/components/InquirySection';
import { PageTransition } from '@/components/PageTransition';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import ModernGallery from '@/components/ModernGallery';
import { galleryImages, galleryCategories, getCategoryCounts } from '@/data/galleryData';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <Navigation />

      {/* Hero Section - Matching other pages */}
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
            src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe15769e1f80b49f2b9ebdbd2ce9bd162"
            alt="Highvale Events"
            className="h-20 md:h-24 mx-auto mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-cormorant text-sage-darkest mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            A curated collection of our favorite moments from weddings, parties, and celebrations across Colorado's most beautiful venues.
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
              onClick={scrollToGallery}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              View Gallery
            </Button>
          </motion.div>
        </PageTransition>
      </section>

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
