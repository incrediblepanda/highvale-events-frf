'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: 'Mountain Vista Wedding',
      category: 'Wedding',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Garden Party Celebration',
      category: 'Party',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Elegant Barn Reception',
      category: 'Wedding',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Milestone Birthday Soirée',
      category: 'Party',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Lakeside Ceremony',
      category: 'Wedding',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    },
    {
      title: 'Corporate Gala',
      category: 'Event',
      image: 'https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg'
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1180px] mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
            Our <span className="text-sage-dark italic">Portfolio</span>
          </h2>
          <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
            A glimpse into the celebrations we've had the honor of creating.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-darkest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-champagne text-sm mb-1">{item.category}</p>
                    <h3 className="text-xl font-cormorant">{item.title}</h3>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center">
          <Link href="/gallery">
            <Button className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3">
              View Full Gallery
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
