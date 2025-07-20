import { Metadata } from 'next';
import HeroSection from '../components/sections/HeroSection';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Vibe Coding - Master MVP Development in 30 Days',
  description: 'Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.',
  openGraph: {
    title: 'Vibe Coding - Master MVP Development in 30 Days',
    description: 'Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.',
    type: 'website',
    url: 'https://vibe-coding.com',
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Vibe Coding - Master MVP Development in 30 Days',
  description: 'Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.',
  provider: {
    '@type': 'Organization',
    name: 'Vibe Coding',
    url: 'https://vibe-coding.com',
  },
  courseMode: 'online',
  educationalLevel: 'intermediate',
  inLanguage: 'en-US',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'USD',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Developers and programmers',
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Analytics tracking points */}
      <div id="analytics-tracking" className="hidden">
        {/* Page view tracking */}
        <div data-analytics="page-view" data-page="home" />
        
        {/* Conversion tracking points */}
        <div data-analytics="conversion-point" data-type="signup-form-visible" />
        <div data-analytics="conversion-point" data-type="signup-form-submitted" />
        <div data-analytics="conversion-point" data-type="newsletter-consent" />
      </div>
      
      {/* Main content */}
      <ErrorBoundary>
        <main className="min-h-screen">
          <HeroSection />
          
          {/* Additional sections can be added here */}
          {/* <FeaturesSection /> */}
          {/* <TestimonialsSection /> */}
          {/* <PricingSection /> */}
          {/* <Footer /> */}
        </main>
      </ErrorBoundary>
    </>
  );
}
