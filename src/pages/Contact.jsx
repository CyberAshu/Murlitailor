import React from 'react';
import ContactSection from '../components/Contact';
import MapEmbed from '../components/MapEmbed';

export default function Contact() {
  return (
    <>
      <ContactSection />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}


