'use client';

import InquirySection from '@/components/InquirySection';
import PortfolioSection from '@/components/PortfolioSection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Calendar, Users, Heart, Gift, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import StandardHero from '@/components/StandardHero';

export default function PartyPlanningPage() {
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
      <StandardHero
        title={<>Party Planning</>}
        subtitle={<>Bachelorette parties, milestone celebrations, and corporate events designed with creativity, style, and attention to every memorable detail.</>}
        learnMoreCallback={scrollToIntro}
      />

      {/* Introduction */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage mb-6">
              Celebrate Life's Special Moments
            </h2>
            <p className="text-lg text-sage/70 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we bring the same attention to detail and
              creative flair to every party we plan. Whether it's a milestone birthday, bachelorette weekend,
              corporate event, or just because you deserve to celebrate, we're here to make it unforgettable.
            </p>
          </ScrollAnimation>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Bachelorette Parties
                  </h3>
                  <p className="text-sage-darker">
                    Weekend getaways or night-out celebrations designed to honor the bride-to-be in style.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Gift className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Birthday Celebrations
                  </h3>
                  <p className="text-sage-darker">
                    Milestone birthdays and themed parties that capture your personality and create lasting memories.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Music className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Social Events
                  </h3>
                  <p className="text-sage-darker">
                    Cocktail parties, dinner soirées, and seasonal celebrations with sophisticated style.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Corporate Events
                  </h3>
                  <p className="text-sage-darker">
                    Company parties, team celebrations, and client events that impress and inspire.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Holiday Parties
                  </h3>
                  <p className="text-sage-darker">
                    Festive gatherings that capture the spirit of the season with creative themes and décor.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.5}>
              <Card className="border-sage/20 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-sage-dark/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                    Special Occasions
                  </h3>
                  <p className="text-sage-darker">
                    Anniversaries, graduations, retirements, and any reason worth celebrating in style.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Party Planning Packages */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage mb-6">
              Party Planning Packages
            </h2>
            <p className="text-lg text-sage/70 max-w-3xl mx-auto">
              Flexible packages designed to fit your celebration style and budget
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="border-sage/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-cormorant text-sage-darkest mb-4">
                    Essential Party Package
                  </h3>
                  <p className="text-3xl font-cormorant text-champagne mb-6">
                    Starting at $800
                  </p>
                  <ul className="space-y-3 text-sage-darker mb-6">
                    <li className="flex items-start">
                      <span className="text-champagne mr-2">•</span>
                      <span>Initial consultation & vision planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Venue selection assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Vendor recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Basic timeline creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Day-of coordination (4 hours)</span>
                    </li>
                  </ul>
                  <Button
                    onClick={scrollToInquiry}
                    className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <Card className="border-champagne h-full">
                <CardContent className="p-8">
                  <div className="bg-champagne text-sage-darkest text-center py-1 px-3 rounded-full text-sm mb-4 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-cormorant text-sage-darkest mb-4">
                    Premium Party Package
                  </h3>
                  <p className="text-3xl font-cormorant text-champagne mb-6">
                    Starting at $1,500
                  </p>
                  <ul className="space-y-3 text-sage-darker mb-6">
                    <li className="flex items-start">
                      <span className="text-champagne mr-2">•</span>
                      <span>Everything in Essential, plus:</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Full vendor management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Design & theme development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Guest list management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Custom party favors coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Day-of coordination (8 hours)</span>
                    </li>
                  </ul>
                  <Button
                    onClick={scrollToInquiry}
                    className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <Card className="border-sage/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-cormorant text-sage-darkest mb-4">
                    Luxury Party Experience
                  </h3>
                  <p className="text-3xl font-cormorant text-champagne mb-6">
                    Starting at $2,500
                  </p>
                  <ul className="space-y-3 text-sage-darker mb-6">
                    <li className="flex items-start">
                      <span className="text-champagne mr-2">•</span>
                      <span>Everything in Premium, plus:</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Complete party design & styling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Entertainment booking & coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Custom décor & rental management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Photography/videography coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>Full event production (unlimited hours)</span>
                    </li>
                  </ul>
                  <Button
                    onClick={scrollToInquiry}
                    className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.3} className="text-center mt-12">
            <p className="text-sage/70 italic">
              All packages can be customized with additional services and add-ons to perfectly fit your celebration
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

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
