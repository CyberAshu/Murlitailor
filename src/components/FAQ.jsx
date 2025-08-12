import React from 'react';

const faqs = [
  { q: 'How long does stitching take?', a: 'Typical turnaround is 2–5 days depending on the garment and workload.' },
  { q: 'Do you provide alterations?', a: 'Yes. We handle pant, shirt, kurta, and suit alterations.' },
  { q: 'Do you make wedding and safari suits?', a: 'Yes. We craft custom wedding and safari suits with premium finishing.' },
  { q: 'What about home visits for measurement?', a: 'Available within Khardon Kalan on request.' },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-gray-600">Answers to common questions.</p>
        </div>
        <dl className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <dt className="font-semibold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


