"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Diensten", href: "#diensten" },
  { label: "Waarom wij", href: "#waarom-wij" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-primary-800"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`text-xl lg:text-2xl font-bold transition-colors ${
              isScrolled ? "text-primary-800" : "text-white"
            }`}
            aria-label="M.G B.V. - Home"
          >
            M.G B.V.
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  isScrolled
                    ? "bg-primary-800 text-white hover:bg-primary-900"
                    : "bg-white text-primary-800 hover:bg-gray-100"
                }`}
              >
                Offerte aanvragen
              </Link>
            </li>
          </ul>

          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-2 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
