'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">DeFace</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              SignUp/Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              SignUp/Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}