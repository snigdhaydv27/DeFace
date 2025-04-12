'use client';

import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/context/AuthContext';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}