'use client';

import AuthForm from '@/components/AuthForm';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen relative flex flex-col">
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
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
            Welcome Back
          </h1>
          <div className="bg-transparent backdrop-blur-md  rounded-xl shadow-2xl p-6 sm:p-8">
            <AuthForm type="login" onSubmit={login} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}