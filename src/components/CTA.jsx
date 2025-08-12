import React from 'react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready for a perfect fit?</h2>
        <p className="mt-3 text-indigo-100">Call now or send a message to book your measurement.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:09630168370" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50">Call Now</a>
          <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400">Contact Form</a>
        </div>
      </div>
    </section>
  );
}


