'use client';

import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-white">
          Contact Us
        </h1>
        <div className="max-w-3xl mx-auto bg-transparent backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl border border-white/20">
          {submitted ? (
            <div className="bg-green-100/90 backdrop-blur-sm text-green-700 p-4 rounded-md mb-6 text-sm sm:text-base">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-white/30 backdrop-blur-md border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-white/30 backdrop-blur-md border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 bg-white/30 backdrop-blur-md border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70 text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/20">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Email</h3>
                <p className="text-white/80 text-sm sm:text-base">support@deface.com</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Phone</h3>
                <p className="text-white/80 text-sm sm:text-base">+1 (555) 123-4567</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Address</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  123 Tech Street<br />
                  San Francisco, CA 94107
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Business Hours</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Monday - Friday: 9am - 5pm PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}