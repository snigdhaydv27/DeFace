import { Brain, NotepadText, Shield, Upload } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-blue-950 to-[#4D55CC]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Detect Deepfakes with Advanced AI Technology
            </h1>
            <p className="text-lg text-white mb-8">
              Upload your images and let our advanced AI-powered tool analyze
              them to determine if they're genuine or AI-generated.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="border border-blue-600 text-white hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero1.png"
              alt="DeFace"
              className="h-[32rem] w-full object-cover" 
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          How DeFace Works
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
          Our advanced AI algorithms detect subtle inconsistencies that the human eye might miss.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-row items-center gap-4">
            <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                <Brain/>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              </div>
              <p className="text-gray-600">
              Our neural networks have been trained on thousands of images to detect AI manipulation patterns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-row items-center gap-4">
              <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                <Upload />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Uploads</h3>
              </div>
              <p className="text-gray-600">
              Simply upload any suspicious image to our platform to begin the analysis process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-row items-center gap-4">
            <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                <NotepadText/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Results</h3>
              </div>
              <p className="text-gray-600">
              Get comprehensive reports with confidence scores and visual indicators of potential manipulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              
             <div className="flex flex-row items-center gap-4">
            <div className="bg-black rounded-full p-2 w-fit text-white font-bold text-4xl mb-4">
                <Shield/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy Protected</h3> 
             </div>
              <p className="text-gray-600">
              Your uploads are processed securely and never shared with third parties or stored long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
