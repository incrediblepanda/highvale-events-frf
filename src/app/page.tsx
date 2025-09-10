'use client';

import InquirySection from '@/components/InquirySection';
import PortfolioSection from '@/components/PortfolioSection';
import AsSeenIn from '@/components/AsSeenIn';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fc382e1a13da64c9ea4d004cbcd28e09d',
    'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fb7bbaf124c2b49d8aa2bbe3596e5ba15',
    'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fdbc9d1a9c0cc4678a778bfe785ad61de',
    'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F39ff8520416a4d7eabd3d346d3edd505'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fb7bbaf124c2b49d8aa2bbe3596e5ba15'
    },
    {
      title: 'Bachelorette Parties',
      description: 'Celebrate the bride-to-be with an unforgettable experience tailored to her unique style and personality.',
      href: '/party-planning',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fdbc9d1a9c0cc4678a778bfe785ad61de'
    },
    {
      title: 'Party Planning',
      description: 'From intimate gatherings to grand celebrations, we bring your special occasions to life with elegance.',
      href: '/party-planning',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F39ff8520416a4d7eabd3d346d3edd505'
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
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        data-element="hero-section"
        data-name="Homepage Hero Section"
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: index === 0 ? 0.62 : 0,
              scale: 1.1
            }}
            animate={{
              opacity: index === currentImageIndex ? 0.62 : 0,
              scale: index === currentImageIndex ? 1 : 1.05
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              scale: { duration: 6 }
            }}
            className="absolute inset-0"
            data-element={`hero-slideshow-image-${index + 1}`}
            data-name={`Hero Slideshow Image ${index + 1}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          data-element="hero-dark-overlay"
          data-name="Hero Dark Overlay"
          style={{
            backgroundColor: 'rgba(22, 22, 22, 1)',
            opacity: '0.36'
          }}
        />

        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20"
          data-element="hero-content-container"
          data-name="Hero Content Container"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe15769e1f80b49f2b9ebdbd2ce9bd162"
            alt="Highvale Events & Design"
            className="mx-auto"
            data-element="hero-company-logo"
            data-name="Hero Company Logo"
            style={{
              opacity: '0.79',
              height: '200px',
              marginBottom: '75px'
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-element="hero-main-heading"
            data-name="Hero Main Heading"
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '40px',
              fontWeight: '400',
              lineHeight: '50px',
              maxWidth: '768px',
              margin: '0 auto 60px'
            }}
          >
            Luxury Wedding and Event Planning <br />
            in the Heart of Colorado
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-element="hero-action-buttons"
            data-name="Hero Action Buttons Container"
          >
            <Link
              href="/weddings"
              data-element="hero-primary-button-link"
              data-name="Hero Primary Button Link"
            >
              <Button
                className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-6 text-lg shadow-lg transform transition-all hover:scale-105"
                data-element="hero-primary-button"
                data-name="Hero Primary Button - Start Planning"
              >
                Start Planning Your Event
              </Button>
            </Link>
            <Link
              href="/gallery"
              data-element="hero-secondary-button-link"
              data-name="Hero Secondary Button Link"
            >
              <Button
                className="bg-white text-sage-darkest border-2 border-sage-dark hover:bg-sage-dark/10 rounded-full px-8 py-6 text-lg transform transition-all hover:scale-105"
                data-element="hero-secondary-button"
                data-name="Hero Secondary Button - View Portfolio"
              >
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 bg-white"
        data-element="services-section"
        data-name="Services Section"
      >
        <div
          className="max-w-[1180px] mx-auto px-6"
          data-element="services-container"
          data-name="Services Container"
        >
          <ScrollAnimation
            className="text-center mb-16"
            data-element="services-header"
            data-name="Services Section Header"
          >
            <h2
              className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4"
              data-element="services-title"
              data-name="Services Section Title"
            >
              Our <span className="text-sage-dark italic">Services</span>
            </h2>
            <p
              className="text-lg text-sage-darker/70 max-w-2xl mx-auto"
              data-element="services-description"
              data-name="Services Section Description"
            >
              We specialize in creating memorable celebrations tailored to your unique vision.
            </p>
          </ScrollAnimation>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-element="services-grid"
            data-name="Services Cards Grid"
          >
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                data-element={`service-card-wrapper-${index + 1}`}
                data-name={`Service Card ${index + 1} Wrapper`}
              >
                <Card
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift h-full p-0"
                  data-element={`service-card-${index + 1}`}
                  data-name={`Service Card ${index + 1} - ${service.title}`}
                >
                  {/* Service image */}
                  <div
                    className="h-48 overflow-hidden"
                    data-element={`service-image-container-${index + 1}`}
                    data-name={`Service ${index + 1} Image Container`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-element={`service-image-${index + 1}`}
                      data-name={`Service ${index + 1} Image - ${service.title}`}
                    />
                  </div>
                  <CardContent
                    className="p-8"
                    data-element={`service-content-${index + 1}`}
                    data-name={`Service ${index + 1} Content`}
                  >
                    <h3
                      className="text-2xl font-cormorant text-sage-darkest mb-4"
                      data-element={`service-title-${index + 1}`}
                      data-name={`Service ${index + 1} Title`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sage-darker/70 mb-6 leading-relaxed"
                      data-element={`service-description-${index + 1}`}
                      data-name={`Service ${index + 1} Description`}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="flex flex-col"
                      data-element={`service-button-link-${index + 1}`}
                      data-name={`Service ${index + 1} Button Link`}
                    >
                      <Button
                        className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full transform transition-all hover:scale-105 mx-auto"
                        data-element={`service-button-${index + 1}`}
                        data-name={`Service ${index + 1} Button - ${service.title === 'Luxury Weddings' ? 'Plan Your Wedding' : 'Explore Options'}`}
                      >
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
      <div
        className="w-full py-20"
        data-element="process-section"
        data-name="Process Section"
        style={{
          backgroundColor: 'rgba(7, 7, 7, 1)',
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe137fdb8669345f6a848efc534ada837)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <section
          className="flex flex-col relative w-full self-stretch flex-1 max-w-[1200px] mx-auto"
          data-element="process-inner-section"
          data-name="Process Inner Section"
        >
          <div
            className="flex flex-col relative w-full min-w-5 overflow-hidden min-h-[400px]"
            data-element="process-wrapper"
            data-name="Process Content Wrapper"
          >
            <div
              className="relative flex flex-col h-auto w-auto self-stretch flex-1"
              data-element="process-content-overlay"
              data-name="Process Content Overlay"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                opacity: '0.82'
              }}
            >
              <h2
                className="text-black mb-4 text-center pt-10 text-4xl md:text-5xl font-cormorant"
                data-element="process-title"
                data-name="Process Section Title"
              >
                <span className="font-bold">Our </span>
                <span className="italic font-bold">Process</span>
              </h2>
              <p
                className="text-black text-2xl max-w-2xl mx-auto"
                data-element="process-description"
                data-name="Process Section Description"
              >
                A seamless journey from concept to celebration.
              </p>
              <div
                className="max-w-[1180px] mx-auto px-6 pb-10 flex flex-col"
                data-element="process-main-container"
                data-name="Process Main Container"
              >
                <div
                  className="text-center mb-16"
                  data-element="process-spacer"
                  data-name="Process Header Spacer"
                />
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                  data-element="process-steps-grid"
                  data-name="Process Steps Grid"
                >
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="text-center"
                      data-element={`process-step-${index + 1}`}
                      data-name={`Process Step ${index + 1} - ${step.title}`}
                    >
                      <div
                        className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: 'rgba(27, 36, 36, 1)', border: '2px solid rgba(227, 198, 141, 1)' }}
                        data-element={`process-step-icon-${index + 1}`}
                        data-name={`Process Step ${index + 1} Icon - Phase ${step.phase}`}
                      >
                        <span
                          className="text-xl font-cormorant font-bold"
                          style={{ color: 'rgba(255, 255, 255, 1)' }}
                          data-element={`process-step-number-${index + 1}`}
                          data-name={`Process Step ${index + 1} Number`}
                        >
                          {step.phase}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-cormorant text-black mb-3"
                        data-element={`process-step-title-${index + 1}`}
                        data-name={`Process Step ${index + 1} Title`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-black text-sm leading-relaxed"
                        data-element={`process-step-description-${index + 1}`}
                        data-name={`Process Step ${index + 1} Description`}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="/process"
                  className="inline-flex items-center justify-center bg-champagne text-sage-darkest rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium mx-auto mt-6"
                  data-element="process-learn-more-button"
                  data-name="Process Learn More Button - More About Our Process"
                  style={{
                    gap: '8px',
                    height: '48px',
                    padding: '24px 32px',
                    fontSize: '18px',
                    lineHeight: '28px'
                  }}
                >
                  More About Our Process
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section
        className="py-20 bg-white"
        data-element="faq-section"
        data-name="FAQ Section"
      >
        <div
          className="max-w-3xl mx-auto px-6"
          data-element="faq-container"
          data-name="FAQ Container"
        >
          <ScrollAnimation
            className="text-center mb-12"
            data-element="faq-header"
            data-name="FAQ Section Header"
          >
            <h2
              className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4"
              data-element="faq-title"
              data-name="FAQ Section Title"
            >
              Frequently Asked <span className="text-sage-dark italic">Questions</span>
            </h2>
            <p
              className="text-lg text-sage-darker/70"
              data-element="faq-description"
              data-name="FAQ Section Description"
            >
              Common questions about planning your perfect celebration.
            </p>
          </ScrollAnimation>

          <ScrollAnimation
            delay={0.2}
            data-element="faq-accordion-wrapper"
            data-name="FAQ Accordion Wrapper"
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              data-element="faq-accordion"
              data-name="FAQ Accordion"
            >
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
