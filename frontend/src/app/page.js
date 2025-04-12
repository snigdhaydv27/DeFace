'use client';
import { useState } from "react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen">
      {isLogin ? <Login /> : <SignUp />}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </main>
  );
}
