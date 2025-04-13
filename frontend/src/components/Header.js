"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react
import Image from 'next/image';

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="DeFace Logo"
              width={56}
              height={56}
              className="h-8 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/about" className="hover:text-[#4F1C51] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#4F1C51] transition-colors">
              Contact Us
            </Link>
            {user ? (
              <>
                <Link href="/dashboard" className="hover:text-[#4F1C51] transition-colors">
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                  className="hover:text-[#4F1C51] transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-[#4F1C51] transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="hover:text-[#4F1C51] transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } pt-4 pb-3 space-y-3`}
        >
          <nav className="flex flex-col space-y-3">
            <Link
              href="/about"
              className="px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                    toggleMenu();
                  }}
                  className="px-3 py-2 text-left hover:bg-white/10 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
