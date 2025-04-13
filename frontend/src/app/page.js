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

          <div className="mt-44">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              How DeFace Works
            </h2>
            <p className="text-lg text-center text-slate-400 mb-8">
              Our advanced AI algorithms detect subtle inconsistencies that the
              human eye might miss.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-transparent backdrop:blur-[200px] p-6 rounded-lg shadow-2xl">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                    <Brain />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    AI-Powered Analysis
                  </h3>
                </div>
                <p className="text-slate-400">
                  Our neural networks have been trained on thousands of images to
                  detect AI manipulation patterns.
                </p>
              </div>
              <div className="bg-transparent backdrop:blur-[200px] p-6 rounded-lg shadow-2xl">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                    <Upload />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Easy Uploads</h3>
                </div>
                <p className="text-slate-400">
                  Simply upload any suspicious image to our platform to begin the
                  analysis process.
                </p>
              </div>
              <div className="bg-transparent backdrop:blur-[200px] p-6 rounded-lg shadow-2xl">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                    <NotepadText />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Detailed Results</h3>
                </div>
                <p className="text-slate-400">
                  Get comprehensive reports with confidence scores and visual
                  indicators of potential manipulations.
                </p>
              </div>
              <div className="bg-transparent backdrop:blur-[200px] p-6 rounded-lg shadow-2xl">
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                    <Shield />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Privacy Protected
                  </h3>
                </div>
                <p className="text-slate-400">
                  Your uploads are processed securely and never shared with third
                  parties or stored long-term.
                </p>
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
      </div>
      <Footer/>
    </div>
  );
}
