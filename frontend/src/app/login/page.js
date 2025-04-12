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
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="w-full max-w-md relative">
          {/* First GIF - top right */}
          <div className="absolute -top-10 sm:-top-14 -right-0 sm:-right-0 lg:-right-12 
                         w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 z-20">
            <img
              src="/animation3.gif"
              alt="Animated icon"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Welcome Back
          </h1>

          {/* Second GIF - adjusted position */}
          <div className=" absolute -top-10 sm:-top-14 
                         -left-0 sm:-left-0 lg:-left-8
                         w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 z-20">
            <img
              src="/animation2.gif"
              alt="Animated icon"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="bg-transparent backdrop-blur-md rounded-xl shadow-2xl 
                         p-4 sm:p-6 lg:p-8">
            <AuthForm type="login" onSubmit={login} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}