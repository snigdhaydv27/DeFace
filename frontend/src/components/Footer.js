import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white py-8 overflow-hidden border-none">
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">DeFace</h3>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com/yourprofile" 
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://github.com/yourprofile" 
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 text-center text-gray-400 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} DeFace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}