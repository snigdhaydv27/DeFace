import Footer from "@/components/Footer";
import { Brain, NotepadText, Shield, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-fill -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full  -z-5"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto w-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detect Deepfakes with Advanced AI Technology
              </h1>
              <p className="text-lg text-slate-400 mb-8">
                Upload your images and let our advanced AI-powered tool analyze
                them to determine if they&apos;re genuine or AI-generated.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/signup"
                  className="bg-white hover:bg-[#4F1C51] hover:text-white text-black px-6 py-3 rounded-lg text-lg font-medium"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="border border-[#4F1C51] bg-[#4F1C51] text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg text-lg font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:h-[36rem]">
              <Image
                src="/hero1.png"
                alt="DeFace"
                width={800}
                height={720}
                className="top-0 rounded-xl h-[45rem] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-44 relative">
            {/* Background gradient for section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              How DeFace Works
            </h2>
            <p className="text-lg text-center text-slate-400 mb-12 max-w-3xl mx-auto">
              Our advanced AI algorithms detect subtle inconsistencies that the human eye might miss
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-purple-900/50 rounded-full p-4 text-white font-bold text-3xl backdrop-blur-sm border border-purple-500/20">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    AI-Powered Analysis
                  </h3>
                </div>
                <p className="text-slate-300 mt-4 ml-16">
                  Our neural networks have been trained on thousands of images to detect AI manipulation patterns.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-purple-900/50 rounded-full p-4 text-white font-bold text-3xl backdrop-blur-sm border border-purple-500/20">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Easy Uploads
                  </h3>
                </div>
                <p className="text-slate-300 mt-4 ml-16">
                  Simply upload any suspicious image to our platform to begin the analysis process.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-purple-900/50 rounded-full p-4 text-white font-bold text-3xl backdrop-blur-sm border border-purple-500/20">
                    <NotepadText className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Detailed Results
                  </h3>
                </div>
                <p className="text-slate-300 mt-4 ml-16">
                  Get comprehensive reports with confidence scores and visual indicators of potential manipulations.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-purple-900/50 rounded-full p-4 text-white font-bold text-3xl backdrop-blur-sm border border-purple-500/20">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Privacy Protected
                  </h3>
                </div>
                <p className="text-slate-300 mt-4 ml-16">
                  Your uploads are processed securely and never shared with third parties or stored long-term.
                </p>
              </div>
            </div>
          </div>

          {/* New Image Types Section */}
          <div className="mt-44 mb-20 relative">
            {/* Background gradient for section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Understanding Different Types of Images
            </h2>
            <p className="text-lg text-center text-slate-400 mb-12 max-w-3xl mx-auto">
              Learn to distinguish between authentic photos, AI creations, and manipulated content
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto px-4">
              <div className="relative group flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] bg-black/20 backdrop-blur-sm rounded-2xl">
                <div className="relative w-full h-full p-4 md:p-8">
                  <Image
                    src="/animation.gif"
                    alt="Image Comparison"
                    width={800}
                    height={720}
                    className="rounded-xl w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Real Images
                  </h3>
                  <ul className="text-slate-300 space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Captured using camera or recording devices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Represents authentic scenes or people
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Contains natural imperfections
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Used in journalism and personal photography
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    AI-Generated Images
                  </h3>
                  <ul className="text-slate-300 space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Created by algorithms like GANs, DALL·E
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Often imaginary or artistic in nature
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> May show minor inconsistencies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Common in art and marketing
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    Deepfake Images
                  </h3>
                  <ul className="text-slate-300 space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Manipulated using deep learning
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Aims to replace faces or alter features
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Can be extremely realistic
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span> Raises serious ethical concerns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-4xl">Why DeFace Matters</p>
            <p className="text-slate-400 mt-5">
              In a world where AI-generated content is increasingly
              sophisticated,
            </p>
            <p className="text-slate-400">
              verifying authenticity is more important than ever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 flex flex-col justify-center items-center ">
              <div className=" gap-4">
                <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                  <Shield />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  &ldquo;In an era where visual misinformation can spread rapidly,
                  tools like DeFace are essential for maintaining trust in
                  our digital ecosystem.&rdquo;
                </h3>
              </div>
              <p className="text-white relative right-52">Dr. Sarah Chen</p>
              <p className="text-slate-400 relative right-44">Digital Forensics Expert</p>
            </div>
            <div className="md:h-[36rem] mt-10">
              <Image
                src="/hero3.png"
                alt="DeFace"
                width={800}
                height={720}
                className="rounded-xl h-[45rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
