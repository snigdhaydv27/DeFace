'use client';

import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/context/AuthContext';
import Footer from '@/components/Footer';

export default function SignupPage() {
  const { signup } = useAuth();

  const handleSignup = async (name, email, password) => {
    try {
      const result = await signup(name, email, password);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Failed to create account'
      };
    }
  };

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
        <div className="w-full max-w-md relative">
          {/* Added GIF */}
          <div className="absolute -top-10 -right-10 w-36 h-36 z-20">
            <img
              src="/animation.gif"
              alt="Animated icon"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
        Create Your Account
          </h1>
          <div className="bg-transparent backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8">
            <AuthForm type="signup" onSubmit={handleSignup} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}