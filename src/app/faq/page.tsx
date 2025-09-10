'use client';

import Navigation from '@/components/Navigation';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuestions = () => {
    const questionsSection = document.getElementById('questions-section');
    if (questionsSection) {
      questionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "When should we hire a wedding planner?",
      answer: "The best time to hire a wedding planner is as early as possible! Ideally, you should bring us on board right after you get engaged, before you make any major decisions or bookings. However, we understand that every couple's journey is different. Whether you're just starting to plan or you're a few months out and feeling overwhelmed, we have packages designed to support you at any stage. Even if your wedding is just weeks away, our Month-of Coordination service can ensure everything runs smoothly on your big day."
    },
    {
      question: "We've already booked some vendors. Can you still help?",
      answer: "Absolutely! Many of our clients come to us after booking a venue or a few key vendors. We're happy to work with your existing vendor team and can help you fill in any gaps with our trusted recommendations. We'll review your contracts, coordinate with your vendors, and ensure everyone is on the same page. We can also suggest additional vendors that complement your existing choices and fit within your budget and style."
    },
    {
      question: "How do we know which package is right for us?",
      answer: "That's what our complimentary consultation is for! During our initial conversation, we'll discuss your vision, timeline, budget, and what aspects of planning feel most overwhelming to you. Based on this discussion, we'll recommend the package that best fits your needs. Remember, our packages are flexible – you can always upgrade if you find you need more support, and we offer various add-on services to customize your experience."
    },
    {
      question: "What is your payment structure?",
      answer: "We require a 20% deposit to secure your date and begin planning. The remaining balance is divided into installments that work with your timeline and budget. We'll create a payment schedule that's comfortable for you during our initial consultation. We believe in complete transparency – no hidden fees, no surprise charges. Every purchase or booking we make on your behalf requires your explicit approval first."
    },
    {
      question: "Can we upgrade our package later if we need more help?",
      answer: "Yes! We understand that wedding planning needs can evolve. If you start with Month-of Coordination and realize you'd like more design support or vendor management, you can upgrade to Partial or Full Planning at any point. We'll credit what you've already paid toward the new package price. We want you to have the right level of support when you need it."
    },
    {
      question: "What does 'custom services' mean?",
      answer: "Every wedding is unique, and sometimes our standard packages might not perfectly fit your needs. Custom services allow us to create a tailored planning experience just for you. Maybe you only need help with design and décor, or perhaps you want us to handle just your rehearsal dinner and welcome party. We'll work together to create a custom package that includes exactly the services you need, nothing more and nothing less."
    },
    {
      question: "How much access do we have to you during planning?",
      answer: "Your level of access depends on your package, but all of our clients receive dedicated support. Full Planning clients enjoy unlimited communication via email and text, plus monthly in-person or video meetings. Partial Planning includes bi-weekly scheduled calls and email support. Month-of Coordination includes two planning meetings and email support in the final weeks. Regardless of package, we pride ourselves on being responsive – we typically reply to emails within 24 hours on business days."
    },
    {
      question: "Do you only work with certain venues or vendors?",
      answer: "Not at all! While we have a wonderful network of trusted vendors we've built relationships with over the years, we're happy to work with any venue or vendor you choose. If you need recommendations, we'll suggest options that fit your style and budget. If you've already made selections, we'll build strong working relationships with your chosen team. Our goal is to ensure everyone works together seamlessly, regardless of whether we've worked with them before."
    },
    {
      question: "What areas do you serve?",
      answer: "We're based in Colorado Springs and primarily serve the greater Colorado area. However, we're available for destination weddings and events throughout Colorado and beyond. Travel fees may apply for events outside our immediate area, which we'll discuss during your consultation."
    },
    {
      question: "What if we need to postpone or cancel?",
      answer: "We understand that life happens. If you need to postpone your wedding, we'll work with you to find a new date based on our availability, and your deposit and payments will transfer to the new date. Our full cancellation and postponement policies are outlined in our contract, which we'll review together before you commit to working with us."
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section - Slimmer version */}
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

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Everything you need to know about working with Highvale Events, from planning packages to our process and philosophy.
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
              onClick={scrollToQuestions}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </PageTransition>
      </section>

      {/* FAQ Section */}
      <section id="questions-section" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-sage-dark/20 rounded-lg px-6">
                <AccordionTrigger className="text-left font-cormorant text-xl text-sage-darkest hover:text-sage-dark py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sage-darker/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-cormorant text-sage mb-4">
              Still Have Questions?
            </h3>
            <p className="text-sage/70 mb-8">
              We'd love to chat more about how we can help make your wedding or event extraordinary.
            </p>
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Let's Chat!
            </Button>
          </div>
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
