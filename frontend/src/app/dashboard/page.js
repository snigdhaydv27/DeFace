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
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto py-8 bg-transparent">
        <h1 className="text-3xl font-bold mb-8 text-white">Dashboard</h1>
        <div className="grid grid-cols-1 gap-8 bg-transparent">
          <FileUpload />
          {/* Additional dashboard components can be added here */}
        </div>
      </div>
      <Footer/>
    </ProtectedRoute>
  );
}