import React from 'react';
import ReviewsSection from '../components/Reviews';
import CTA from '../components/CTA';

export default function Reviews() {
  return (
    <>
      <ReviewsSection />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
            <p className="text-sm text-yellow-800">Real customers from Khardon Kalan trust our work. Leave your feedback after your next visit!</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}


