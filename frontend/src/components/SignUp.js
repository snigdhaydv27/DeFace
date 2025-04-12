import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  
  const router = useRouter();
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }
    try {
      await signup(formData);
      toast.success("Signup successful!");
      router.push("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Navbar />
      <div className="flex justify-center items-center w-3/4 h-3/4 p-8 rounded-[100px] shadow-2xl shadow-yellow-400 bg-white">
        {/* left side */}
        <div className="w-1/2 flex flex-col justify-center items-center h-full hidden md:flex">
          <img src="/images/login.jpg" alt="Welcome" className="w-full h-full rounded-[200px] object-cover" />
        </div>
        {/* right side */}
        <div className="w-1/2 flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center h-3/5 w-[220px]">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-center items-center rounded-xl border-[2.5px]">
                <img src="/images/user.svg" alt="user" className="ml-2 w-6 h-6" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 rounded-xl outline-none"
                />
              </div>
              {errors.username && <span className="text-red-500 text-xs mt-1">{errors.username}</span>}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-center items-center rounded-xl border-[2.5px]">
                <img src="/images/email.svg" alt="email" className="ml-2 w-6 h-6" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-xl outline-none"
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-center items-center rounded-xl border-[2.5px]">
                <img src="/images/password.svg" alt="password" className="ml-2 w-6 h-6" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded-xl outline-none"
                />
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password}</span>}
            </div>

            <button
              type="submit"
              disabled={isSigningUp}
              className="w-[90px] p-2 rounded-3xl bg-yellow-400 text-white hover:bg-yellow-500 disabled:opacity-50"
            >
              {isSigningUp ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-slate-300">Or</p>
          <button 
            type="button"
            className="p-1 mt-4 rounded-3xl bg-white text-slate-500 border-[0.8px] border-white/2 w-[220px] items-center flex flex-row gap-2 hover:bg-slate-200"
          >
            <img src="/images/logo.webp" alt="Google logo" className="w-10 h-10 self-center" />
            Continue with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
