import React from 'react';

const reviews = [
  {
    name: 'Rohit S.',
    text: 'Excellent fit and quick delivery. Highly recommended for gents tailoring!'
  },
  {
    name: 'Amit K.',
    text: 'Great craftsmanship. My wedding suit came out perfect.'
  },
  {
    name: 'Vivek P.',
    text: 'Friendly service and precise measurements. Will visit again.'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reviews</h2>
            <p className="mt-2 text-gray-600">Rated 5.03 ★ on Google reviews</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-800 ring-1 ring-yellow-200">
            <span className="text-yellow-600">5.03 ★</span>
            <span>Google reviews</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <blockquote className="text-gray-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


