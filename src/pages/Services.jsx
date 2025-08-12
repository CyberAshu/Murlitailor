import React from 'react';
import ServicesSection from '../components/Services';
import CTA from '../components/CTA';

const serviceDetails = {
  Pants: ['Formal trousers', 'Casual chinos', 'Alterations & tapering'],
  Shirts: ['Formal shirts', 'Casual wear', 'Collar/cuff styling'],
  Kurtas: ['Daily wear', 'Festive designs', 'Kurta-pajama sets'],
  Salwars: ['Traditional fit', 'Comfort-first patterns'],
  Pajamas: ['Nightwear', 'Kurta pairing'],
  'Wedding Suits': ['Two/three-piece', 'Custom lapel & lining', 'Fittings included'],
  'Safari Suits': ['Classic safari styling', 'Durable stitching'],
};

export default function Services() {
  return (
    <>
      <ServicesSection />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-bold text-gray-900">Detailed Offerings</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(serviceDetails).map(([name, items]) => (
              <div key={name} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}


