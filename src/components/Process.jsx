import React from 'react';

const steps = [
  { title: 'Consultation', desc: 'Understand your style, fabric choice, and occasion.' },
  { title: 'Measurement', desc: 'Accurate measurements for a precise, comfortable fit.' },
  { title: 'Crafting', desc: 'Expert tailoring with attention to detail and finishing.' },
  { title: 'Trial & Adjust', desc: 'Fitting session and quick alterations if needed.' },
];

export default function Process() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Process</h2>
          <p className="mt-3 text-gray-600">A simple, proven approach for perfect results.</p>
        </div>
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">{idx + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


