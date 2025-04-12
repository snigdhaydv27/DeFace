'use client';
import { useState } from "react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen">
      {isLogin ? <Login /> : <SignUp />}
    </main>
  );
}
