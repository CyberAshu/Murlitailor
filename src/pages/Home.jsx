import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
                <p className="mt-2 text-sm text-gray-600">Serving Khardon Kalan with years of craftsmanship.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Perfect Fit</h3>
                <p className="mt-2 text-sm text-gray-600">Precision measurements and premium finishing.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Quick Turnaround</h3>
                <p className="mt-2 text-sm text-gray-600">Fast delivery with careful quality checks.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
    </>
  );
}


