'use client';

import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import StandardHero from '@/components/StandardHero';

export default function SayHiPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIntro = () => {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* Hero Section - Slimmer version */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "calc(var(--vh, 1vh) * 50)" }}>
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
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51"
            alt="Highvale Events"
            style={{
              aspectRatio: "3.48",
              objectFit: "cover",
              objectPosition: "center",
              width: "50%",
              margin: "20px auto",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-cormorant text-sage-darkest mb-4"
          >
            Say Hi!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Ready to start your journey? Let's have a conversation about your vision, timeline, and how we can make your celebration extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Contact Form
            </Button>
            <Button
              onClick={scrollToIntro}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </PageTransition>
      </section>

      {/* Introduction Section */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <p className="text-xl text-sage mb-8 leading-relaxed">
              We're a team of experienced dream makers with over 40 years of combined industry knowledge.
              We bring both visionary creativity and practical problem-solving to every event we touch.
            </p>
            <p className="text-lg text-sage/80 mb-8">
              We're here to orchestrate flawless timelines and ensure you can focus on enjoying your special day.
              Whether you need full-service planning or just a helping hand, we're ready to elevate your journey.
            </p>
            <h2 className="text-4xl font-cormorant text-sage mb-12">
              Let's get to know each other!
            </h2>
          </ScrollAnimation>

          {/* Consultation Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage mb-3">
                    Let's Talk About Your Plans
                  </h3>
                  <p className="text-sage/70">
                    We'll start with a friendly conversation about your vision, timeline, and what matters most to you.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage mb-3">
                    Understand Your Challenges
                  </h3>
                  <p className="text-sage/70">
                    We'll learn about any concerns or obstacles you're facing and how we can help overcome them.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage mb-3">
                    Gauge Your Support Needs
                  </h3>
                  <p className="text-sage/70">
                    Together, we'll determine the perfect level of support - whether that's full planning or day-of coordination.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage mb-3">
                    Elevate Your Journey
                  </h3>
                  <p className="text-sage/70">
                    We'll explain exactly how Highvale can transform your planning experience from stressful to seamless.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
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

    </>
  );
}
