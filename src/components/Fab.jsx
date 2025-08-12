import React from 'react';

export default function Fab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919630168370?text=Hi%20Murli%20Tailors,%20I%20need%20help%20with%20stitching"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg ring-1 ring-green-400/30 hover:bg-green-400 transition transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M20 4a10 10 0 00-17.32 9.22L2 22l8.9-2.66A10 10 0 1020 4zm-8 16a8 8 0 01-4.1-1.13l-.29-.17-3.61 1.08 1.08-3.61-.17-.29A8 8 0 1112 20zm4.62-5.02c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.8.98-.15.17-.3.19-.56.07-.25-.12-1.05-.39-2-1.25-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.1-.5.1-.1.25-.26.37-.39.12-.13.15-.22.22-.37.07-.15.03-.28-.01-.39-.12-.31-.57-1.37-.78-1.87-.2-.48-.41-.42-.57-.43l-.49-.01c-.17 0-.39.06-.6.28-.2.22-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.12.16 1.6 2.45 3.86 3.43.54.23.96.36 1.29.46.54.17 1.03.15 1.42.09.43-.06 1.32-.54 1.5-1.07.19-.53.19-.99.13-1.09-.06-.1-.23-.16-.48-.28z"/>
        </svg>
      </a>
      <a
        href="tel:09630168370"
        aria-label="Call now"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg ring-1 ring-indigo-400/30 hover:bg-indigo-500 transition transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
        </svg>
      </a>
    </div>
  );
}


