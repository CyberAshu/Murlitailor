import React from 'react';

const services = [
  'Pants',
  'Shirts',
  'Kurtas',
  'Salwars',
  'Pajamas',
  'Wedding Suits',
  'Safari Suits',
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-gray-600">
            Tailored to your measurements with meticulous attention to detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Custom fittings and premium finishing for a refined look.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


