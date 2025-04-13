'use client';

import FileUpload from '@/components/FileUpload';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white text-center sm:text-left">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <FileUpload />
            </div>
            {/* Additional dashboard components can be added here */}
          </div>
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
