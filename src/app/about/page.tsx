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
import StandardHero from '@/components/StandardHero';

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
      <StandardHero
        title={
          <>
            About Highvale
          </>
        }
        subtitle={
          <>
            A passionate team of wedding and event professionals bringing over 40 years of combined experience, creativity, and genuine care to every celebration we touch.
          </>
        }
        learnMoreCallback={scrollToWhoWeAre}
      />

      {/* Who We Are Section */}
      <section id="who-we-are-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <div style={{ color: 'rgb(42, 53, 50)', marginBottom: '32px', font: '400 48px/48px "Cormorant Garamond", serif ' }}>
              Who We Are
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="prose prose-lg max-w-none text-sage">
            <div style={{ fontFeatureSettings: 'normal', font: '400 20px/32.5px Arial, sans-serif ', marginBottom: '32px', textAlign: 'center' }}>
              We're a highly caffeinated, wedding-obsessed, client-focused team that brings boundless energy and genuine passion to every event we touch.
            </div>

            {/* First Image Placeholder (background image) */}
            <div style={{ display: 'flex', backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F800489f1000249769fbb0285c522154a)', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderColor: 'rgba(42, 53, 50, 0)', borderRadius: '10px', borderWidth: '1px', flexDirection: 'column', fontWeight: '400', height: '500px', margin: '20px 0', overflowX: 'hidden', overflowY: 'hidden', position: 'relative' }} />

            <p className="mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              Our approach is simple: we believe your celebration should be as unique as your love story. We're not here to impose a cookie-cutter template or push trendy ideas that don't reflect who you are. Instead, we listen, we learn, and we bring your authentic vision to life with meticulous attention to detail and creative flair.
            </p>

            <p className="mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              What sets us apart? It's our personality. We're the planners who will laugh with you, cry happy tears at your ceremony, and dance at your reception (if you want us to!). Many of our clients tell us that by the end of the planning process, we feel like family – and honestly, that's exactly how we like it.
            </p>

            {/* Replace two-image grid with a single background block */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '20px', height: '400px', backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fc4b5777164f04449bbab5d908f19d153)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', overflow: 'hidden' }} />

            {/* Additional visual block */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', height: '400px', backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F082b40be8f3e44bc80b2566b73f89fa2)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', overflow: 'hidden', margin: '20px 0 50px' }} />

            <p className="mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              We understand that planning a wedding or event can feel overwhelming. That's why we offer flexible support options tailored to your specific journey. Whether you need comprehensive planning from day one or just someone to tie everything together in the final weeks, we're here to make the process seamless and enjoyable.
            </p>

            <p className="mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
              Our team brings over 40 years of combined industry experience, but more importantly, we bring heart. We're problem-solvers and dream-makers, logistics experts and creative visionaries. We're the calm in the storm and the spark that brings magic to your celebration.
            </p>

            <div className="bg-cream rounded-2xl p-8 mt-12">
              <p className="text-2xl font-cormorant text-gold italic text-center mb-6">
                "Your wedding should be uniquely yours"
              </p>
              <p className="text-center text-sage" style={{ fontFamily: 'Arial, sans-serif' }}>
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
                <p className="text-sage/70" style={{ fontFamily: 'Arial, sans-serif' }}>
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
