import React, { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const { serviceId, templateId, publicKey } = useMemo(() => ({
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  }), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage('Email service is not configured. Please set your EmailJS keys.');
      return;
    }
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setStatusMessage('');
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatusMessage('Message sent successfully! We will get back to you soon.');
      formRef.current.reset();
    } catch (error) {
      setStatusMessage('Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
            <p className="mt-3 text-gray-600">We are here to help with measurements, fittings, and custom orders.</p>

            <dl className="mt-8 space-y-4 text-gray-700">
              <div>
                <dt className="font-semibold text-gray-900">Address</dt>
                <dd>Lalaji Market, Bakawan Road, Khardon Kalan, District Shajapur, Madhya Pradesh</dd>
                <dd>Kurawar Road, Khardon Kalan, District Shajapur, Madhya Pradesh 465339</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Phone</dt>
                <dd>
                  <a className="text-indigo-600 hover:underline" href="tel:09630168370">096301 68370</a>
                  {' '} / {' '}
                  <a className="text-indigo-600 hover:underline" href="tel:09993658413">099936 58413</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Email</dt>
                <dd>
                  <a className="text-indigo-600 hover:underline" href="mailto:murlitailorkhardon@gmail.com">murlitailorkhardon@gmail.com</a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10,}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="10+ digit mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>

              {statusMessage && (
                <p className="mt-4 text-sm text-gray-700">{statusMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


