import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Murli Tailors</h3>
            <p className="mt-2">Gents tailor in Khardon Kalan, Madhya Pradesh</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2">Kurawar Road, Khardon Kalan, District Shajapur, Madhya Pradesh 465339</p>
            <p className="mt-1">Lalaji Market, Bakawan Road, Khardon Kalan, District Shajapur, Madhya Pradesh</p>
            <p className="mt-1"><a className="text-indigo-600 hover:underline" href="tel:09630168370">096301 68370</a> / <a className="text-indigo-600 hover:underline" href="tel:09993658413">099936 58413</a></p>
            <p className="mt-1"><a className="text-indigo-600 hover:underline" href="mailto:murlitailorkhardon@gmail.com">murlitailorkhardon@gmail.com</a></p>
          </div>
          <div className="md:text-right">
            <p className="text-gray-500">&copy; {currentYear} Murli Tailors. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


