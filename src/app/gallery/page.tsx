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
      <section className="relative overflow-hidden min-h-[60vh] lg:min-h-[590px] justify-center items-center flex pb-5">
        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-[0.34]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe2473936fcf446fdb2c1ec8636394f3e"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 opacity-[0.39] bg-[#272727]" />

        <PageTransition className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:pt-24" style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            justifyContent: "center"
          }}>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51"
            alt="Highvale Events"
            style={{
              aspectRatio: "3.48",
              objectFit: "contain",
              objectPosition: "center",
              width: "80%",
              maxWidth: "300px",
              margin: "0 auto 24px",
              minHeight: "60px",
              height: "auto",
            }}
            className="sm:w-1/2 sm:max-w-none"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-cormorant text-sage-darkest mb-4 sm:mb-6 leading-tight"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            A curated collection of our favorite moments from weddings, parties, and celebrations across Colorado's most beautiful venues.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 px-4 sm:px-0"
          >
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3 w-full sm:w-auto"
            >
              Contact Form
            </Button>
            <Button
              onClick={scrollToGallery}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3 w-full sm:w-auto"
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
