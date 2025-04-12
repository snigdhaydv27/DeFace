'use client';

import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <AuthForm type="login" onSubmit={login} />
    </div>
  );
}