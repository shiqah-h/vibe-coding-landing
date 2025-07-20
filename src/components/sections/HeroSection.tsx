import React from 'react';
import Container from '../ui/Container';
import SignupForm from './SignupForm';
import SignupCounter from './SignupCounter';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Container maxWidth="2xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60% on desktop */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master{' '}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Vibe Coding
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                Launch Your MVP in 30 Days
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your coding skills with our intensive 30-day program. 
                Learn modern development practices, build real projects, and join 
                a community of developers who ship fast and iterate quickly.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                From concept to deployment, master the art of rapid prototyping 
                and user-centered design. Perfect for developers ready to level up 
                their skills and build products that users love.
              </p>
            </div>

            {/* Signup Counter */}
            <div className="pt-4">
              <SignupCounter 
                className="text-center lg:text-left"
                showLoadingSpinner={false}
              />
            </div>
          </div>

          {/* Right Form - 40% on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600">
                  Join the waitlist for early access
                </p>
              </div>
              
              <SignupForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 