'use client';

import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Sparkles, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhoWeAre = () => {
    const whoWeAreSection = document.getElementById('who-we-are-section');
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        data-element="hero-section"
        data-name="About Hero Section"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-warm-white via-white to-champagne/20"
          data-element="hero-background-gradient"
          data-name="Hero Background Gradient"
        />

        {/* Background image placeholder */}
        <div
          className="absolute inset-0 opacity-10"
          data-element="hero-background-image"
          data-name="Hero Background Image"
        >
          <img
            src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div
          className="absolute inset-0 bg-black/40"
          data-element="hero-dark-overlay"
          data-name="Hero Dark Overlay"
        />

        {/* Grey-green overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-sage-darkest/20 to-sage-darker/15"
          data-element="hero-color-overlay"
          data-name="Hero Color Overlay"
        />

        {/* Content */}
        <PageTransition
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24"
          data-element="hero-content-container"
          data-name="Hero Content Container"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/golden-wheat-highvale.png"
            alt="Highvale Events"
            className="h-20 md:h-24 mx-auto mb-6"
            data-element="hero-logo"
            data-name="About Hero Logo"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-cormorant text-sage-darkest mb-4"
            data-element="hero-main-heading"
            data-name="About Hero Main Heading"
          >
            About Highvale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            data-element="hero-description"
            data-name="About Hero Description"
          >
            A passionate team of wedding and event professionals bringing over 40 years of combined experience, creativity, and genuine care to every celebration we touch.
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
              onClick={scrollToWhoWeAre}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </PageTransition>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage mb-8">
              Who We Are
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="prose prose-lg max-w-none text-sage">
            <p className="text-xl mb-8 leading-relaxed text-center">
              We're a highly caffeinated, wedding-obsessed, client-focused team that brings
              boundless energy and genuine passion to every event we touch.
            </p>

            {/* First Image Placeholder */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
                alt="Highvale Events Team"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <p className="mb-6">
              Our approach is simple: we believe your celebration should be as unique as your love story.
              We're not here to impose a cookie-cutter template or push trendy ideas that don't reflect
              who you are. Instead, we listen, we learn, and we bring your authentic vision to life with
              meticulous attention to detail and creative flair.
            </p>

            <p className="mb-6">
              What sets us apart? It's our personality. We're the planners who will laugh with you,
              cry happy tears at your ceremony, and dance at your reception (if you want us to!).
              Many of our clients tell us that by the end of the planning process, we feel like family –
              and honestly, that's exactly how we like it.
            </p>

            {/* Second Image Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
                  alt="Event Planning Process"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
                  alt="Event Details"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <p className="mb-6">
              We understand that planning a wedding or event can feel overwhelming. That's why we offer
              flexible support options tailored to your specific journey. Whether you need comprehensive
              planning from day one or just someone to tie everything together in the final weeks, we're
              here to make the process seamless and enjoyable.
            </p>

            <p className="mb-8">
              Our team brings over 40 years of combined industry experience, but more importantly,
              we bring heart. We're problem-solvers and dream-makers, logistics experts and creative
              visionaries. We're the calm in the storm and the spark that brings magic to your celebration.
            </p>

            <div className="bg-cream rounded-2xl p-8 mt-12">
              <p className="text-2xl font-cormorant text-gold italic text-center mb-6">
                "Your wedding should be uniquely yours"
              </p>
              <p className="text-center text-sage">
                We believe every couple deserves a celebration that reflects their personality,
                values, and love story. No two weddings should be the same, and we're committed
                to ensuring yours is one-of-a-kind.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-4xl font-cormorant text-sage mb-4">
              Our Core Values
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage-dark/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-sage-dark" />
                </div>
                <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                  Client-First Always
                </h3>
                <p className="text-sage/70">
                  Your vision, your budget, your comfort level – everything we do centers around you.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage-dark/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-sage-dark" />
                </div>
                <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                  Authentic Creativity
                </h3>
                <p className="text-sage/70">
                  We bring fresh ideas and creative solutions while staying true to your unique style.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage-dark/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-sage-dark" />
                </div>
                <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                  Seamless Execution
                </h3>
                <p className="text-sage/70">
                  Behind every beautiful moment is flawless planning and invisible coordination.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-cormorant text-sage mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-lg text-sage/70 mb-8 max-w-2xl mx-auto">
              We're ready to bring our energy, expertise, and enthusiasm to your celebration.
              The question is: are you ready to start this incredible journey?
            </p>
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Let's Chat!
            </Button>
          </ScrollAnimation>
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

    </>
  );
}
