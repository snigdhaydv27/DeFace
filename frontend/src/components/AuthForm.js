'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthForm({ type, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let result;
      if (type === 'login') {
        result = await onSubmit(email, password);
      } else {
        result = await onSubmit(name, email, password);
      }

      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-transparent backdrop-blur-3xl p-8 rounded-lg shadow-2xl border border-white/20">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      {error && (
        <div className="mb-4 p-3 bg-red-500/50 backdrop-blur-sm text-white rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
            required
            minLength="6"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Processing...' : type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-4 text-center text-white">
        {type === 'login' ? (
          <p>
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}