import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function StandardHero({
  title,
  subtitle,
  scrollToInquiryId = 'inquiry-section',
  learnMoreCallback,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  scrollToInquiryId?: string;
  learnMoreCallback?: () => void;
}) {
  const scrollToInquiry = () => {
    const el = document.getElementById(scrollToInquiryId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '345px',
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F39ff8520416a4d7eabd3d346d3edd505)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        flexGrow: 0,
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
          backgroundColor: 'rgba(66, 68, 66, 0.61)',
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
            margin: '0 auto 0 calc(50% - 50vw)',
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
              margin: '150px 0 50px',
            }}
          >
            <div className="relative z-10 text-center mx-auto" style={{ maxWidth: 1180 }}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Ff3eaa0d01287491bb3add65b28898d51"
                style={{
                  display: 'block',
                  aspectRatio: '3.48 / 1',
                  objectFit: 'contain',
                  width: '80%',
                  maxWidth: '300px',
                  minHeight: '60px',
                  margin: '0 auto 24px',
                }}
                alt="Highvale Events"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  color: 'rgb(255, 255, 255)',
                  textDecoration: 'rgb(255, 255, 255)',
                  margin: '0 auto 24px',
                  fontFeatureSettings: 'normal',
                  font: '400 60px/60px "Cormorant Garamond", serif ',
                }}
                data-element="hero-title"
                data-name="Hero Section > Content Box > Heading"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  font: '400 20px Arial, sans-serif ',
                  maxWidth: '672px',
                  textDecoration: 'rgba(255, 255, 255, 0.8)',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                  margin: '0 auto 40px',
                }}
                data-element="hero-description"
                data-name="Hero Section > Content Box > Text"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}
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
                    padding: '12px 32px',
                  }}
                >
                  Contact Form
                </Button>

                <Button
                  onClick={() => {
                    if (learnMoreCallback) learnMoreCallback();
                  }}
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
                    padding: '12px 32px',
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
