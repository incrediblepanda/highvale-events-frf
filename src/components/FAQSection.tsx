'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Why should I choose Highvale Events over another planner?',
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
    <section
      className="py-20 bg-white"
      data-element="faq-section"
      data-name="FAQ Section"
    >
      <div
        className="max-w-3xl mx-auto px-6"
        data-element="faq-container"
        data-name="FAQ Section > Container"
      >
        <ScrollAnimation
          className="text-center mb-12"
          data-element="faq-header"
          data-name="FAQ Section > Header Box"
        >
          <h2
            className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4"
            data-element="section-heading"
            data-name="FAQ Section > Header Box > Heading"
          >
            Frequently Asked <span className="text-sage-dark italic">Questions</span>
          </h2>
          <p
            className="text-lg text-sage-darker/70"
            data-element="section-description"
            data-name="FAQ Section > Header Box > Text"
          >
            Common questions about planning your perfect celebration.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          delay={0.2}
          data-element="faq-content"
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
                <AccordionTrigger className="text-left font-cormorant text-xl text-sage-darkest hover:text-sage-dark py-6">
                  {index === 0 || index === 2 ? (
                    <div style={{ fontFamily: 'Arial, sans-serif' }}>
                      {faq.question}
                    </div>
                  ) : (
                    faq.question
                  )}
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
  );
}
