import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white py-8 overflow-hidden border-none">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 min-w-full min-h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div> */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com/snigdha_ydv" 
              target="_blank"
              className="hover:text-[#4F1C51] transition-colors"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://github.com/snigdhaydv27" 
              target="_blank"
              className="hover:text-[#4F1C51] transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/snigdha-kumar-90445b298/" 
              target="_blank"
              className="hover:text-[#4F1C51] transition-colors"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeFace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}