'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import InquirySection from '@/components/InquirySection';
import { PageTransition } from '@/components/PageTransition';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'All Events', count: 48 },
    { id: 'weddings', label: 'Weddings', count: 24 },
    { id: 'parties', label: 'Parties', count: 12 },
    { id: 'corporate', label: 'Corporate', count: 8 },
    { id: 'details', label: 'Design Details', count: 4 },
  ];

  // Enhanced gallery with coming soon images and better layout
  const galleryImages = [
    { id: 1, category: 'weddings', alt: 'Mountain wedding ceremony with stunning backdrop', size: 'tall', image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F5bb27648143e488ab6f639b3640931c2' },
    { id: 2, category: 'details', alt: 'Elegant floral centerpiece', size: 'normal', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 3, category: 'weddings', alt: 'Romantic first dance', size: 'wide', image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F28c9d97713d44c8baea1a1aaa5b1bcb7' },
    { id: 4, category: 'parties', alt: 'Bachelorette party celebration', size: 'normal', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 5, category: 'details', alt: 'Table setting perfection', size: 'normal', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 6, category: 'corporate', alt: 'Corporate gala dinner setup', size: 'tall', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 7, category: 'weddings', alt: 'Garden wedding reception', size: 'normal', image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F83bc7803e09d4a28bf82c368522bf9ff' },
    { id: 8, category: 'parties', alt: 'Milestone birthday party', size: 'wide', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 9, category: 'weddings', alt: 'Ceremony under the stars', size: 'normal', image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fb60f674fe85c445bb0654dbd9a2591c4' },
    { id: 10, category: 'details', alt: 'Bridal bouquet artistry', size: 'tall', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 11, category: 'corporate', alt: 'Product launch event', size: 'normal', image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg' },
    { id: 12, category: 'weddings', alt: 'Sunset wedding portraits', size: 'wide', image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F1d75e495f4d149ec926832ab0eea47a5' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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

      {/* Category Filters - Enhanced styling */}
      <section id="gallery-section" className="py-12 bg-white border-b border-sage-dark/10">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-8">
            <h3 className="text-2xl font-cormorant text-sage-darkest mb-2">Browse by Category</h3>
            <p className="text-sage-darker/70">Select a category to filter the gallery</p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id
                      ? 'bg-sage-dark text-white border-sage-dark'
                      : 'bg-white text-sage-darkest border border-sage-dark/30 hover:bg-sage-dark/5'
                  } rounded-full px-6 py-2.5 transition-all duration-300 flex items-center gap-2`}
                >
                  <span>{category.label}</span>
                  <span className={`text-xs ${
                    activeCategory === category.id ? 'text-white/70' : 'text-sage-darker/50'
                  }`}>
                    ({category.count})
                  </span>
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Mosaic Grid - Enhanced layout */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredImages.map((image, index) => {
              // Determine grid classes based on size
              let gridClass = '';
              if (image.size === 'wide') {
                gridClass = 'col-span-2';
              } else if (image.size === 'tall') {
                gridClass = 'row-span-2';
              } else if (image.size === 'large') {
                gridClass = 'col-span-2 row-span-2';
              }

              return (
                <ScrollAnimation
                  key={image.id}
                  animation="fadeInUp"
                  delay={index * 0.05}
                  className={`${gridClass} group relative overflow-hidden rounded-xl cursor-pointer`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={image.image}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sage-darkest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-lg font-cormorant mb-1">{image.alt}</p>
                    <p className="text-champagne text-sm capitalize">{image.category}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* View More Button */}
          <ScrollAnimation className="text-center mt-16">
            <p className="text-sage-darker/60 mb-6">Showing {filteredImages.length} of 48 images</p>
            <Button
              className="bg-white text-sage-darkest border-2 border-sage-dark/30 hover:bg-sage-dark hover:text-white hover:border-sage-dark rounded-full px-8 py-3 transition-all duration-300"
            >
              Load More Images
            </Button>
          </ScrollAnimation>
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
