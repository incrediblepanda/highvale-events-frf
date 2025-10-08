'use client';

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
import { motion, AnimatePresence } from 'framer-motion';

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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F37df92d536484ac38103d3d19caacf25'
    },
    {
      title: 'Bachelorette Parties',
      description: 'Celebrate the bride-to-be with an unforgettable experience tailored to her unique style and personality.',
      href: '/party-planning',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F07309c944dd84e3a9362b760d95a65a9'
    },
    {
      title: 'Party Planning',
      description: 'From intimate gatherings to grand celebrations, we bring your special occasions to life with elegance.',
      href: '/party-planning',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F4717adbf50024f3aa1deda1c5bf7b113'
    }
  ];

  const processSteps = [
    { phase: 'Phase 1', title: 'Discovery', description: 'We begin with understanding your vision, style, and unique requirements for your celebration.' },
    { phase: 'Phase 2', title: 'Planning', description: 'Detailed planning of logistics, timelines, and vendor selection tailored to your needs.' },
    { phase: 'Phase 3', title: 'Design', description: 'Our creative team brings your vision to life with unique design concepts and styling.' },
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
    <div
      data-element="homepage-wrapper"
      data-name="Homepage"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Hero Section */}
      <section
        className="relative"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#2A3532',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          position: 'relative'
        }}
        data-element="hero-section"
        data-name="Hero Section"
      >
        {/* Mobile Background Image */}
        <div
          className="block md:hidden"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://cdn.builder.io/o/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F03813cb852214c41aaf1c5c0db6153e7?alt=media&token=f74c858b-2677-40c9-9ffa-01436cb5575e&apiKey=52185cbc63e544f6abfcb901069ce1f1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        />
        {/* Desktop Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.5)',
            minWidth: '100%',
            minHeight: '100%',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="https://cdn.builder.io/o/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F0861570d1d114dfbb1ca4f985344cc37?alt=media&token=cd9f7576-fd31-431c-8218-7306024489a6&apiKey=52185cbc63e544f6abfcb901069ce1f1" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(66, 68, 66, 0.4)', zIndex: 1 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            zIndex: 2
          }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              width: '100vw',
              alignSelf: 'stretch',
              flexGrow: 1,
              margin: '0 auto 0 calc(50% - 50vw)'
            }}
          >
            <div
              className="pt-20 sm:pt-24 md:pt-32"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                width: '100vw',
                alignSelf: 'center',
                justifyContent: 'flex-start',
                paddingBottom: '22px'
              }}
            >
              <PageTransition
                className="relative z-10 text-center mx-auto px-1 sm:px-4 lg:px-8 pt-15 sm:pt-0"
                data-element="hero-content"
                data-name="Hero Section > Content Box"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F79e25098e0fe4082903d579f2e81ecb3"
                  alt="Highvale Events & Design"
                  className="w-auto max-w-full object-contain"
                  style={{
                    display: "block",
                    fontWeight: "400",
                    height: "250px",
                    objectFit: "contain",
                    margin: "60px auto 24px",
                  }}
                  data-element="hero-company-logo"
                  data-name="Hero Section > Content Box > Logo"
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    color: '#FCF5EA',
                    margin: '0 auto 24px',
                    font: '400 30px/30px ivyModeBody, "ivyModeBody Fallback" ',
                  }}
                  data-element="hero-title"
                  data-name="Hero Section > Content Box > Heading"
                >
                  <span
                      data-loc="src/app/page.tsx:224:120"
                      className="hero-mobile-title"
                      style={{
                        display: 'none',
                        fontFamily: 'ivyModeBody, "ivyModeBody Fallback"',
                        fontFeatureSettings: 'normal',
                        fontWeight: '400',
                      }}
                    >
                      Luxury Wedding
                      <br
                        data-loc="src/app/page.tsx:231:128"
                        style={{ fontWeight: '400' }}
                      />
                      &amp; Event Planning
                      <br />
                      in the Heart of Colorado
                      <br />
                    </span>

                  <div className="hero-desktop-title" style={{ display: 'inline', fontFeatureSettings: 'normal', font: '400 60px/80px ivyModeBody, "ivyModeBody Fallback" ' }}>
                    Luxury Wedding &amp; Event Planning
                  </div>

                  <div className="hero-desktop-sub" style={{ display: 'inline', fontFeatureSettings: 'normal', font: '400 60px/55px ivyModeBody, "ivyModeBody Fallback" ' }}>
                    &nbsp;
                    <br />
                    in the Heart of Colorado
                  </div>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-20 mb-10 px-4"
                  data-element="hero-buttons"
                  data-name="Hero Section > Content Box > Button Container"
                >
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('inquiry-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="w-full sm:w-auto"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'rgb(227, 198, 141)',
                      borderRadius: '9999px',
                      color: 'rgb(27, 35, 36)',
                      fontWeight: '500',
                      gap: '8px',
                      height: '48px',
                      justifyContent: 'center',
                      padding: '12px 32px'
                    }}
                  >
                    Start Planning Your Event
                  </Button>

                  <Link href="/weddings">
                    <Button
                      className="w-full sm:w-auto"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(35, 43, 42, 0.2)',
                        borderRadius: '9999px',
                        borderWidth: '2px',
                        color: 'rgb(27, 35, 36)',
                        fontWeight: '500',
                        gap: '8px',
                        height: '48px',
                        justifyContent: 'center',
                        padding: '12px 32px'
                      }}
                    >
                      Wedding Planning Packages
                    </Button>
                  </Link>
                </motion.div>
              </PageTransition>
            </div>
          </section>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="bg-white pt-[70px] sm:pt-[60px]"
        style={{ paddingBottom: '80px' }}
        data-element="services-section"
        data-name="Our Services Section"
      >
        <ScrollAnimation
          className="text-center mb-16"
          data-element="services-header"
          data-name="Our Services Section > Header Box"
        >
          <h2
            className="text-4xl md:text-5xl font-ivy-body text-sage-darkest mb-4"
            style={{
              color: "rgb(27, 35, 36)",
              marginBottom: "16px",
              font: '400 48px/48px ivyModeBody, "ivyModeBody Fallback" '
            }}
            data-element="services-title"
            data-name="Our Services Section > Header Box > Heading"
          >
            Our <span className="text-sage-dark italic" style={{ display: "inline", color: "rgb(35, 43, 42)", fontStyle: "italic" }}>Services</span>
          </h2>
          <div
            style={{
              color: "rgba(33, 43, 42, 0.7)",
              maxWidth: "672px",
              margin: "0 auto",
              font: "400 18px/28px Arial, sans-serif "
            }}
          >
            <p className="px-2.5 sm:px-0">
              From intimate celebrations to grand galas, we bring your vision to life with elegance, precision, and Colorado's natural beauty as your backdrop.
            </p>
          </div>
        </ScrollAnimation>
        <div
          className="max-w-[1180px] mx-auto px-6"
          data-element="services-container"
          data-name="Our Services Section > Container"
        >
          <ScrollAnimation
            className="text-center mb-16"
            data-element="services-header"
            data-name="Our Services Section > Header Box"
          />

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-element="services-grid"
            data-name="Our Services Section > Cards Grid"
          >
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                data-element={`service-card-wrapper-${index + 1}`}
                data-name={`Our Services Section > Service Card ${index + 1} > Wrapper`}
              >
                <Card
                  className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift p-0 ${
                    index === 0 ? 'h-[480px] sm:h-auto' : index === 1 ? 'h-[475px] sm:h-auto' : 'h-[454px] sm:h-auto'
                  }`}
                  data-element={`service-card-${index + 1}`}
                  data-name={`Our Services Section > Service Card ${index + 1} > Card`}
                >
                  {/* Service image */}
                  <div
                    className="h-48 overflow-hidden"
                    data-element={`service-image-container-${index + 1}`}
                    data-name={`Our Services Section > Service Card ${index + 1} > Image Container`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-element={`service-image-${index + 1}`}
                      data-name={`Our Services Section > Service Card ${index + 1} > Image Container > Image`}
                    />
                  </div>
                  <CardContent
                    className="p-8"
                    data-element={`service-content-${index + 1}`}
                    data-name={`Our Services Section > Service Card ${index + 1} > Content Box`}
                  >
                    <h3
                      className="text-2xl font-ivy-body text-sage-darkest mb-4"
                      data-element={`service-title-${index + 1}`}
                      data-name={`Our Services Section > Service Card ${index + 1} > Content Box > Title Heading`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sage-darker/70 mb-6 leading-relaxed"
                      data-element={`service-description-${index + 1}`}
                      data-name={`Our Services Section > Service Card ${index + 1} > Content Box > Description Text`}
                    >
                      {service.description}
                    </p>
                    <div
                      data-element={`service-button-wrapper-${index + 1}`}
                      data-name={`Our Services Section > Service Card ${index + 1} > Content Box > Button Wrapper`}
                    >
                      <Link
                        href={service.href}
                        className="flex flex-col"
                        data-element={`service-button-link-${index + 1}`}
                        data-name={`Our Services Section > Service Card ${index + 1} > Content Box > Button Link`}
                      >
                        <Button
                          className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full transform transition-all hover:scale-105 mx-auto"
                          data-element={`service-button-${index + 1}`}
                          data-name={`Our Services Section > Service Card ${index + 1} > Content Box > Button`}
                        >
                          {service.title === 'Luxury Weddings' ? 'Plan Your Wedding' : 'Explore Options'}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <div
        data-element="portfolio-section-wrapper"
        data-name="Our Portfolio Section > Wrapper"
      >
        <PortfolioSection />
      </div>

      {/* Process Section */}
      <div
        className="w-full"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100px",
          backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ffcc2ffa805a84a458af0b921531cc971)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)"
        }}
      >
        <section
          className="flex flex-col relative w-full self-stretch flex-1 mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: "100px",
            backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ffcc2ffa805a84a458af0b921531cc971)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            alignSelf: "stretch",
            flexGrow: "1",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              paddingBottom: "30px",
              width: "100vw",
              marginLeft: "calc(50% - 50vw)",
              backgroundColor: "rgba(48, 48, 48, 0.4)"
            }}
          >
            <div
              className="max-w-[1180px] mx-auto px-[25px] sm:px-12 pb-10 flex flex-col"
              data-element="process-main-container"
              data-name="Our Process Section > Content Box > Container"
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "400",
                maxWidth: "1180px",
                margin: "0 auto"
              }}
            >
              <div
              className="text-center mb-16"
              data-element="process-spacer"
              data-name="Our Process Section > Content Box > Header Spacer"
              style={{
                fontWeight: "400",
                marginBottom: "64px",
                textAlign: "center",
                fontFamily: 'var(--font-ivy-body)'
              }}
            />
              <h2
                className="text-center text-3xl sm:text-4xl lg:text-5xl font-ivy-body mb-6 px-2 sm:px-0"
                data-element="process-title"
                data-name="Our Process Section > Content Box > Heading"
                style={{
                  color: "rgb(0, 0, 0)",
                  textAlign: "center",
                  textDecoration: "rgb(0, 0, 0)",
                  backgroundColor: "rgba(250, 247, 242, 0.77)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  padding: "25px 87px 43px 59px",
                  font: '400 48px/48px ivyModeBody, "ivyModeBody Fallback" ',
                  border: "1px solid rgba(0, 0, 0, 0)"
                }}
              >
                <div
                  data-element="process-title-our"
                  data-name="Our Process Section > Content Box > Heading > Our"
                  className="font-normal sm:font-bold text-5xl sm:text-inherit"
                  style={{
                    display: "inline",
                    color: "rgba(0, 0, 0, 1)",
                    textDecoration: "rgb(255, 255, 255)",
                    fontWeight: "400"
                  }}
                >
                  Our
                </div>
                <div
                  data-element="process-title-process"
                  data-name="Our Process Section > Content Box > Heading > Process"
                  className="font-normal sm:font-bold text-5xl sm:text-inherit"
                  style={{
                    display: "inline",
                    color: "rgba(0, 0, 0, 1)",
                    fontStyle: "italic",
                    fontWeight: "400",
                    textDecoration: "rgb(255, 255, 255)"
                  }}
                >
                  Process
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginTop: "20px",
                    height: "auto",
                    paddingBottom: "30px"
                  }}
                >
                  <div
                    data-element="process-description"
                    data-name="Our Process Section > Content Box > Text"
                    className="text-lg sm:text-2xl leading-6 sm:leading-9 pt-4 sm:pt-0 px-2.5 sm:px-0"
                    style={{
                      color: "rgba(33, 43, 42, 0.7)",
                      maxWidth: "672px",
                      margin: "0 auto",
                      font: "400 18px/28px Arial, sans-serif "
                    }}
                  >
                    <p>A seamless journey from concept to celebration.</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginTop: "20px"
                  }}
                >
                  <div
                    className="flex flex-col lg:flex-row gap-5 lg:gap-0"
                    style={{
                      gap: "20px",
                      display: "flex"
                    }}
                  >
                    {processSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-full lg:w-1/4"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          lineHeight: "normal",
                          width: "25%",
                          marginLeft: "20px"
                        }}
                      >
                        <div
                          data-element={`process-step-${index + 1}`}
                          data-name={`Our Process Section > Content Box > Step ${index + 1} > Step Box`}
                          style={{
                            fontWeight: "400",
                            color: "rgba(250, 250, 250, 0.85)",
                            fontFamily: "Inter, sans-serif",
                            textDecoration: "rgba(250, 250, 250, 0.85)",
                            backgroundColor: "rgba(38, 43, 36, 0.84)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            padding: index >= 2 ? "32px 32px 53px" : "32px",
                            border: "1px solid rgba(250, 250, 250, 0)"
                          }}
                        >
                          <div
                            className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "rgb(27, 36, 36)",
                              borderColor: "rgb(227, 198, 141)",
                              borderRadius: "9999px",
                              borderWidth: "2px",
                              boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px",
                              fontWeight: "400",
                              height: "90px",
                              justifyContent: "center",
                              width: "90px",
                              margin: "0 auto 16px"
                            }}
                            data-element={`process-step-icon-${index + 1}`}
                            data-name={`Our Process Section > Content Box > Step ${index + 1} > Step Box > Icon`}
                          >
                            <div
                              className="text-xl font-ivy-body font-bold"
                              style={{
                                display: "block",
                                color: "rgb(255, 255, 255)",
                                textDecoration: "rgb(255, 255, 255)",
                                font: '700 20px/28px ivyModeBody, "ivyModeBody Fallback" '
                              }}
                              data-element={`process-step-number-${index + 1}`}
                              data-name={`Our Process Section > Content Box > Step ${index + 1} > Step Box > Text`}
                            >
                              {step.phase}
                            </div>
                          </div>
                          <h3
                            className="font-ivy-body mb-3"
                            data-element={`process-step-title-${index + 1}`}
                            data-name={`Our Process Section > Content Box > Step ${index + 1} > Step Box > Heading`}
                            style={{
                              color: "rgb(255, 255, 255)",
                              textDecoration: "rgb(0, 0, 0)",
                              textShadow: "rgba(0, 0, 0, 0.75) 1px 1px 3px",
                              margin: "0 auto 12px",
                              font: '400 30px/28px ivyModeBody, "ivyModeBody Fallback" '
                            }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="leading-relaxed text-lg sm:text-base"
                            data-element={`process-step-description-${index + 1}`}
                            data-name={`Our Process Section > Content Box > Step ${index + 1} > Step Box > Text`}
                            style={{
                              color: "rgb(255, 255, 255)",
                              textDecoration: "rgb(0, 0, 0)",
                              textShadow: "rgba(0, 0, 0, 0.75) 1px 1px 3px",
                              font: "400 18px Arial, sans-serif",
                              ...(index === 0 && { marginRight: "-1px" })
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="/process"
                  className="inline-flex items-center justify-center bg-champagne text-sage-darkest rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium"
                  data-element="process-learn-more-button"
                  data-name="Our Process Section > Content Box > Button"
                  style={{
                    display: "flex",
                    height: "48px",
                    alignItems: "center",
                    animationDuration: "0.3s",
                    backgroundColor: "rgb(227, 198, 141)",
                    borderRadius: "9999px",
                    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                    color: "rgb(27, 35, 36)",
                    gap: "8px",
                    justifyContent: "center",
                    textDecoration: "rgb(27, 35, 36)",
                    transitionDuration: "0.3s",
                    width: "auto",
                    alignSelf: "center",
                    margin: "40px 200px 0",
                    padding: "24px 32px",
                    font: "500 18px/28px Arial, sans-serif "
                  }}
                >
                  More About Our Process
                </a>
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                data-element="process-steps-grid"
                data-name="Our Process Section > Content Box > Steps Grid"
                style={{
                  display: "grid",
                  fontWeight: "400",
                  gap: "24px",
                  gridTemplate: "none / repeat(4, minmax(0px, 1fr))",
                }}
              />
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
          className="max-w-3xl mx-auto pr-6 px-[10px] sm:px-0"
          data-element="faq-container"
          data-name="FAQ Section > Container"
        >
          <ScrollAnimation
            className="text-center mb-12"
            data-element="faq-header"
            data-name="FAQ Section > Header Box"
          >
            <h2
              className="text-4xl md:text-5xl font-ivy-body text-sage-darkest mb-4"
              data-element="faq-title"
              data-name="FAQ Section > Header Box > Heading"
            >
              Frequently Asked <span className="text-sage-dark italic">Questions</span>
            </h2>
            <p
              className="text-lg text-sage-darker/70"
              data-element="faq-description"
              data-name="FAQ Section > Header Box > Text"
            >
              Common questions about planning your perfect celebration.
            </p>
          </ScrollAnimation>

          <ScrollAnimation
            delay={0.2}
            data-element="faq-accordion-wrapper"
            data-name="FAQ Section > Content Box"
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              data-element="faq-accordion"
              data-name="FAQ Section > Content Box > Accordion"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-sage-dark/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-ivy-body text-xl text-sage-darkest hover:text-sage-dark py-6">
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
      <div
        data-element="as-seen-in-wrapper"
        data-name="As Seen In Section > Wrapper"
      >
        <AsSeenIn />
      </div>

      {/* Inquiry Section */}
      <div
        id="inquiry-section"
        data-element="inquiry-section-wrapper"
        data-name="Contact Us Section > Wrapper"
      >
        <InquirySection />
      </div>

    </div>
  );
}
