import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.75]);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div style={{ y, opacity }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-12 text-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800 ring-1 ring-yellow-200"
              >
                <span className="text-yellow-600">5.03 ★</span> Google reviews
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                Murli Tailors
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-lg text-gray-700"
              >
                Expert Gents Tailoring &amp; Custom Fittings
              </motion.p>
              <p className="mt-2 text-sm text-gray-500">
                Gents tailor in Khardon Kalan, Madhya Pradesh
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:09630168370"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=Khardon+Kalan+Madhya+Pradesh+465339"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


