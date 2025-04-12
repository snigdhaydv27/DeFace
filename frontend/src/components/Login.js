"use client";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-50 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
            <div className="left-0 right-0 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {isLogin
                  ? "Need an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
