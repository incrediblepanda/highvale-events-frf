'use client';

import { useState } from 'react';
import InquirySection from '@/components/InquirySection';
import PortfolioSection from '@/components/PortfolioSection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingsPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWelcome = () => {
    const welcomeSection = document.getElementById('welcome-section');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      title: 'Full-service planning',
      price: 'Starting at $4,500',
      timeline: 'Planning begins 12 Months out',
      description: 'This service includes assistance with everything in the planning process from start to finish. From vendor and budget advice to designing a beautiful tablescape, full planning ensures that you have a coordinator by your side through all of it. Your coordinator will provide answers to your questions and solutions to any issues that may arise throughout your time together so that things progress smoothly throughout the entire process.',
      includedServices: [
        'Event Styling & Design',
        'Budget Planning',
        'Venue Recommendations',
        'Vendor Selection',
        'Vendor Management',
        'Contract Review',
        'Transportation Coordination',
        'Venue Visits',
        'Final Venue Walkthrough',
        'Timeline Creation & Management',
        'Onsite Event Management'
      ],
      extraServices: [
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination'
      ]
    },
    {
      title: 'Partial planning',
      price: 'Starting at $2,500',
      timeline: 'Planning begins 6 Months out',
      description: 'This service is for the client who has the main pieces of their planning process in place but is overwhelmed with managing everything in the months leading up to their wedding day. Partial planning services do not provide the same level of support as full planning services, as they typically do not start more than 6 months before the wedding date, unlike full planning which begins at least 12 months prior.',
      includedServices: [
        'Event Styling & Design',
        'Venue Recommendations',
        'Vendor Management',
        'Contract Review',
        'Final Venue Walkthrough',
        'Timeline Creation & Management',
        'Onsite Event Management'
      ],
      extraServices: [
        'Budget Planning',
        'Vendor Selection',
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination',
        'Transportation Coordination',
        'Venue Visits'
      ]
    },
    {
      title: 'Elopement / microwedding',
      price: 'Starting at $700',
      timeline: 'Planning begins 9 Months out',
      description: 'A wedding under 50 guests is considered a "micro wedding." This service is for you if you\'re planning a smaller celebration with close friends and family to celebrate your union. A micro wedding is perfect if you want a wedding and all of its traditions on a smaller scale so you don\'t feel overwhelmed by the process and its complexities.',
      includedServices: [
        'Venue Recommendations',
        'Vendor Management',
        'Contract Review',
        'Final Venue Walkthrough',
        'Timeline Creation & Management'
      ],
      extraServices: [
        'Event Styling & Design',
        'Budget Planning',
        'Vendor Selection',
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination',
        'Transportation Coordination',
        'Venue Visits',
        'Onsite Event Management'
      ]
    },
    {
      title: 'Day-of coordination / wedding management',
      price: 'Starting at $800',
      timeline: 'Planning begins 3 Months out',
      description: 'Month-Of Coordination is the perfect service for couples who desire to handle the entire planning process themselves but want to hand over the reins prior to the big day. Our job is to step in and coordinate any of the final details and manage all of the logistics for your event, leaving you to enjoy the last moments before you walk down the aisle.',
      includedServices: [
        'Venue Recommendations',
        'Contract Review',
        'Final Venue Walkthrough',
        'Timeline Creation & Management',
        'Onsite Event Management'
      ],
      extraServices: [
        'Event Styling & Design',
        'Budget Planning',
        'Vendor Selection',
        'Vendor Management',
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination',
        'Transportation Coordination',
        'Venue Visits'
      ]
    },
    {
      title: 'Event design',
      price: 'Starting at $500',
      timeline: 'Planning timelines vary',
      description: '',
      includedServices: [
        'Event Styling & Design',
        'Budget Planning',
        'Venue Recommendations',
        'Contract Review',
        'Final Venue Walkthrough',
        'Timeline Creation & Management',
        'Onsite Event Management'
      ],
      extraServices: [
        'Vendor Selection',
        'Vendor Management',
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination',
        'Transportation Coordination',
        'Venue Visits'
      ]
    },
    {
      title: 'A la carte',
      price: 'Starting at $100',
      timeline: 'Planning begins 9 Months out',
      description: 'We offer à la carte services that meet your needs! Our parties are customized to each and every client. From intimate weddings, milestone birthdays, bridal showers, baby showers. Our goal is to design and style an event that your guests will be talking about for years. We\'d love to hear from you so please get in touch and we\'ll work with you to provide a quote.',
      includedServices: [
        'Event Styling & Design',
        'Rentals & Linens',
        'Invites & Stationery',
        'RSVP Tracking',
        'Wedding Website',
        'Wedding Favors & Accessories',
        'Accommodation Coordination'
      ],
      extraServices: []
    }
  ];

  const addOns = [
    'Monogram design',
    'Signage creation',
    'Invitation and RSVP management',
    'Post-wedding brunch planning',
    'Additional assistants',
    'Decor rentals',
    'Rehearsal dinner planning',
    'Hotel block management'
  ];

  return (
    <>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '345px',
          backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F5146ee267a6d4f2cbee3fe2cfc5ad7eb)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          flexGrow: 0
        }}
        data-element="hero-section"
        data-name="Hero Section"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            backgroundColor: 'rgba(66, 68, 66, 0.61)'
          }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              width: '100vw',
              backgroundColor: 'rgba(0, 0, 0, 0.13)',
              alignSelf: 'stretch',
              flexGrow: 1,
              margin: '0 auto 0 calc(50% - 50vw)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                width: '100vw',
                alignSelf: 'center',
                margin: '150px 0 50px'
              }}
            >

              <PageTransition
                className="relative z-10 text-center mx-auto"
                data-element="hero-content"
                data-name="Hero Section > Content Box"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51"
                  style={{
                    display: "block",
                    aspectRatio: "3.48",
                    objectFit: "contain",
                    width: "80%",
                    maxWidth: "300px",
                    minHeight: "60px",
                    margin: "0 auto 24px"
                  }}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'rgb(255, 255, 255)',
                    margin: '0 auto 24px',
                    font: '400 60px/60px "Cormorant Garamond", serif '
                  }}
                  data-element="hero-title"
                  data-name="Hero Section > Content Box > Heading"
                >
                  Signature Wedding Planning
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '400',
                    maxWidth: '672px',
                    textDecoration: 'rgba(255, 255, 255, 0.8)',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                    margin: '0 auto 40px'
                  }}
                  data-element="hero-description"
                  data-name="Hero Section > Content Box > Text"
                >
                  From full-service planning to day-of coordination, we bring your dream wedding to life with elegance, precision, and Colorado's natural beauty as your backdrop.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    marginBottom: '40px'
                  }}
                  data-element="hero-buttons"
                  data-name="Hero Section > Content Box > Button Container"
                >
                  <Button
                    onClick={scrollToInquiry}
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
                    Contact Form
                  </Button>
                  <Button
                    onClick={scrollToWelcome}
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
                    Learn More
                  </Button>
                </motion.div>
              </PageTransition>
            </div>
          </section>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome-section"
        className="py-12 bg-white"
        data-element="welcome-section"
        data-name="Welcome Section"
      >
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-8">
              Welcome to Highvale Weddings
            </h2>
            <p className="mb-6" style={{ font: '400 18px/29px Arial, sans-serif', color: 'rgba(33, 43, 42, 0.7)' }}>
              We offer a variety of wedding planning packages to suit every couple's needs,
              along with customizable add-ons to enhance your experience. Every journey begins
              with a complimentary consultation where we'll discuss your vision, understand your
              needs, and determine the perfect level of support for your special day.
            </p>
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Schedule Your Free Consultation
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Packages Section */}
      <section
        className="py-10 bg-warm-white"
        data-element="packages-section"
        data-name="Our Wedding Packages Section"
      >
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Wedding Planning Packages
            </h2>
            <p className="max-w-2xl mx-auto" style={{ font: '400 18px/28px Arial, sans-serif', color: 'rgba(33, 43, 42, 0.7)' }}>
              Choose the level of support that's right for your wedding journey
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const isExpanded = expandedCards.includes(index);
              return (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.1}>
                  <Card className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${!isExpanded ? 'h-64' : ''}`}>
                    <CardHeader className={`${isExpanded ? 'border-b border-sage-dark/10' : ''} ${!isExpanded ? 'h-full flex flex-col justify-between' : ''}`}>
                      <div className="flex items-start justify-between h-full">
                        <div className="flex-1 flex flex-col justify-between h-full">
                          <div>
                            <CardTitle className="text-2xl md:text-3xl font-cormorant text-sage-darkest leading-tight">
                              {pkg.title}
                            </CardTitle>
                            <CardDescription className="text-sage-dark text-xl font-semibold mt-2">
                              {pkg.price}
                            </CardDescription>
                            {pkg.timeline && (
                              <p className="text-sage-darker/60 mt-1" style={{ font: "400 14px/20px Arial, sans-serif" }}>
                                {pkg.timeline}
                              </p>
                            )}
                          </div>
                          {!isExpanded && (
                            <div className="mt-4">
                              <Button
                                onClick={() => toggleCard(index)}
                                className="w-full bg-champagne/10 hover:bg-champagne/20 text-sage-darkest font-medium rounded-full border border-champagne/30"
                              >
                                View Details
                              </Button>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleCard(index)}
                          className="ml-2 p-2 h-auto hover:bg-sage-dark/10 self-start"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-sage-dark" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-sage-dark" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <CardContent className="pt-6">
                            <div className="space-y-6">
                              {pkg.description && (
                                <div>
                                  <h4 className="font-cormorant text-lg font-semibold text-sage-darkest mb-3">
                                    Description
                                  </h4>
                                  <p className="text-sage-darker/70 text-sm leading-relaxed">
                                    {pkg.description}
                                  </p>
                                </div>
                              )}
                              <div>
                                <h4 className="font-cormorant text-lg font-semibold text-sage-darkest mb-3">
                                  Services included in starting price
                                </h4>
                                <ul className="space-y-2">
                                  {pkg.includedServices.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                      <Check className="w-4 h-4 text-sage-dark mt-0.5 mr-2 flex-shrink-0" />
                                      <span className="text-sage-darker/70 text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {pkg.extraServices.length > 0 && (
                                <div>
                                  <h4 className="font-cormorant text-lg font-semibold text-sage-darkest mb-3">
                                    Services available for extra costs
                                  </h4>
                                  <ul className="space-y-2">
                                    {pkg.extraServices.map((item, i) => (
                                      <li key={i} className="flex items-start">
                                        <Plus className="w-4 h-4 text-sage-dark mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-sage-darker/70 text-sm">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              <div className="pt-4">
                                <Button
                                  onClick={scrollToInquiry}
                                  className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full"
                                >
                                  Get Started
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-10 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Optional Add-Ons
            </h2>
            <p className="max-w-2xl mx-auto" style={{ font: '400 18px/28px Arial, sans-serif', color: 'rgba(33, 43, 42, 0.7)' }}>
              Enhance your package with these additional services
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-warm-white rounded-lg p-4 flex items-center space-x-3 hover:bg-champagne/10 transition-colors"
                >
                  <Plus className="w-5 h-5 text-sage-dark flex-shrink-0" />
                  <span className="text-sage-darkest" style={{ font: '400 14px/20px Arial, sans-serif' }}>{addon}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sage-darker/70 mb-6 italic" style={{ fontFamily: 'Arial, sans-serif' }}>
                All packages can be customized to meet your unique needs
              </p>
              <Button
                onClick={scrollToInquiry}
                className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
              >
                Let's Discuss Your Wedding
              </Button>
            </div>
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
