import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-[height] duration-200 ${isScrolled ? 'h-14' : 'h-16'}`}>
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
              Murli Tailors
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:09630168370"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Call Now
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:09630168370"
              className="mt-2 block rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white text-center hover:bg-indigo-500"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


