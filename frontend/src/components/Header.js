"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

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
      <div className="relative z-10 container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
          DeFace
        </Link>
        <nav className="space-x-6">
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact Us
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-400 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="hover:text-blue-400 transition-colors">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
