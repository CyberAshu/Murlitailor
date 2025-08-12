import React from 'react';
import AboutSection from '../components/About';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function About() {
  return (
    <>
      <AboutSection />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Why choose Murli Tailors?</h3>
              <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                <li>Bespoke stitching for pants, shirts, kurtas, salwars, pajamas, wedding and safari suits</li>
                <li>Seasoned craftsmanship with focus on fit and comfort</li>
                <li>Quality materials and neat finishing</li>
                <li>Honest pricing and on-time delivery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
              <ul className="mt-4 text-gray-700 space-y-1">
                <li>Mon–Sat: 9:30 AM – 8:00 PM</li>
                <li>Sun: 10:00 AM – 2:00 PM</li>
              </ul>
              <p className="mt-4 text-gray-600">Home visits for measurements available in Khardon Kalan on request.</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}


