'use client';

import Navigation from '@/components/Navigation';
import InquirySection from '@/components/InquirySection';
import PortfolioSection from '@/components/PortfolioSection';
import AsSeenIn from '@/components/AsSeenIn';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Luxury Weddings',
      description: 'Create the wedding of your dreams with our meticulous attention to detail and creative vision.',
      href: '/weddings',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Bachelorette Parties',
      description: 'Celebrate the bride-to-be with an unforgettable experience tailored to her unique style and personality.',
      href: '/party-planning',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Party Planning',
      description: 'From intimate gatherings to grand celebrations, we bring your special occasions to life with elegance.',
      href: '/party-planning',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    }
  ];

  const processSteps = [
    { phase: 'Phase 1', title: 'Discovery', description: 'We begin with understanding your vision, style, and unique requirements for your celebration.' },
    { phase: 'Phase 2', title: 'Planning', description: 'Detailed planning of logistics, timelines, and vendor selection tailored to your needs.' },
    { phase: 'Phase 3', title: 'Design', description: 'Our creative team brings your vision to life with bespoke design concepts and styling.' },
    { phase: 'Phase 4', title: 'Execution', description: 'Flawless delivery of your event with our dedicated team managing every detail.' }
  ];

  const faqs = [
    {
      question: 'Why should I choose Highvale Events & Design over another planner?',
      answer: "At Highvale Events & Design, we specialize in more than just timelines and logistics—we bring custom creation and curated design elements to every event. Many of our clients come to us with Pinterest boards they've been building for years, filled with inspiration and dreams. Our passion is transforming those boards into reality, making sure every detail—big or small—feels intentional and beautifully executed. From designing your wedding signage and styling a custom monogram, to curating the perfect tablescape, we ensure every element reflects your unique vision."
    },
    {
      question: 'Can you work with my vendors, or do you only use preferred ones?',
      answer: "We're happy to work with any vendors you've already chosen, and we'll collaborate closely with them to make sure your day runs seamlessly. In addition, we've curated a recommended vendor list filled with professionals we've worked with before and whose services we truly admire. All you have to do is ask! Whether you bring your own team or explore our trusted vendors, we'll ensure everything comes together smoothly."
    },
    {
      question: 'How involved will you be on the actual event day?',
      answer: "At Highvale Events & Design, we're present from the initial setup and decorating, through the first moments of your event, all the way to the final cleanup. Every event has at least two of our team members on site. We collaborate closely, communicating throughout the entire planning process and on the day of the event to ensure thoughtful, informed decisions are made on your behalf."
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src="/golden-wheat-highvale.png"
            alt="Highvale Events & Design"
            className="h-40 md:h-48 lg:h-56 mx-auto mb-8"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-sage-darker font-inter font-normal mb-4 leading-relaxed"
          >
            Luxury Wedding and Event Planning in the Heart of Colorado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-sage-darker max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we transform your
            vision into extraordinary experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/weddings">
              <Button className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-6 text-lg shadow-lg transform transition-all hover:scale-105">
                Start Planning Your Event
              </Button>
            </Link>
            <Link href="/gallery">
              <Button className="bg-white text-sage-darkest border-2 border-sage-dark hover:bg-sage-dark/10 rounded-full px-8 py-6 text-lg transform transition-all hover:scale-105">
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Our <span className="text-sage-dark italic">Services</span>
            </h2>
            <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
              We specialize in creating memorable celebrations tailored to your unique vision.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift h-full">
                  {/* Service image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-cormorant text-sage-darkest mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sage-darker/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <Button className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full transform transition-all hover:scale-105">
                        {service.title === 'Luxury Weddings' ? 'Plan Your Wedding' : 'Explore Options'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Process Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Our <span className="text-sage-dark italic">Process</span>
            </h2>
            <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
              A seamless journey from concept to celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-2 border-sage-dark flex items-center justify-center shadow-md">
                  <span className="text-xl font-cormorant text-sage-dark font-bold">{step.phase}</span>
                </div>
                <h3 className="text-xl font-cormorant text-sage-darkest mb-3">
                  {step.title}
                </h3>
                <p className="text-sage-darker/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Frequently Asked <span className="text-sage-dark italic">Questions</span>
            </h2>
            <p className="text-lg text-sage-darker/70">
              Common questions about planning your perfect celebration.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-sage-dark/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-cormorant text-xl text-sage-darkest hover:text-sage-dark py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sage-darker/70 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </section>

      {/* As Seen In */}
      <AsSeenIn />

      {/* Inquiry Section */}
      <div id="inquiry-section">
        <InquirySection />
      </div>

    </>
  );
}
