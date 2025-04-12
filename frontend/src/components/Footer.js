import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">DeFace</h3>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-blue-400">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact Us
            </Link>
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeFace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}