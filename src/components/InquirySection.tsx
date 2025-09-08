'use client';

import { useEffect, useRef } from 'react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    _HB_?: {
      pid?: string;
      init?: () => void;
    };
  }
}

export default function InquirySection() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    // Clean up function to remove everything HoneyBook related
    const cleanup = () => {
      // Remove all HoneyBook scripts
      const scripts = document.querySelectorAll('script[src*="honeybook.com"], script[src*="widget.honeybook.com"]');
      scripts.forEach(script => script.remove());

      // Clear HoneyBook global
      if (window._HB_) {
        delete window._HB_;
      }

      // Clear the form container
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };

    // Force cleanup first
    cleanup();

    // Small delay to ensure cleanup is complete
    const timer = setTimeout(() => {
      if (formContainerRef.current) {
        // Create fresh form div
        const formDiv = document.createElement('div');
        formDiv.className = 'hb-p-6890f4efb285f80007ab288b-2';
        formContainerRef.current.appendChild(formDiv);

        // Add tracking image
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = 'https://www.honeybook.com/p.png?pid=6890f4efb285f80007ab288b';
        img.alt = '';
        formContainerRef.current.appendChild(img);

        // Create inline script that will execute immediately
        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
          (function() {
            // Clear any existing HB object
            window._HB_ = {};
            window._HB_.pid = '6890f4efb285f80007ab288b';

            // Create and inject the HoneyBook script
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';

            // Force cache bypass with timestamp
            script.src += '?t=' + new Date().getTime();

            document.body.appendChild(script);
          })();
        `;
        document.body.appendChild(inlineScript);

        // Remove the inline script after execution
        setTimeout(() => {
          inlineScript.remove();
        }, 100);
      }
    }, 50);

    // Cleanup on unmount or route change
    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [pathname]); // Re-run effect when pathname changes

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: 'rgba(1, 1, 1, 1)',
        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F4b9ba40f793140a2982a78715899cb1f)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: '0.8'
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation className="text-center">
          <h2
            className="text-4xl md:text-5xl font-cormorant mb-4"
            style={{
              color: 'rgba(255, 255, 255, 1)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 1)'
            }}
          >
            Start Your Journey With Us
          </h2>
          <p
            className="text-lg mb-12"
            style={{
              color: 'rgba(255, 255, 255, 1)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 1)'
            }}
          >
            Tell us about your vision and we'll bring it to life with elegance and precision.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px]">
            {/* HoneyBook Form Container */}
            <div ref={formContainerRef} id="honeybook-form-container">
              {/* Form will be injected here by the script */}
              <div className="text-center text-sage-darker/50">
                <p className="text-lg">Loading contact form...</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
