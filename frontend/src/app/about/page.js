import Footer from "@/components/Footer";

export default function AboutPage() {
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

      {/* Content */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6 sm:mb-8 text-center">
            About Us
          </h1>
          <div className="bg-transparent backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl border border-white/20">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-6">
                As AI technology evolves, so does the potential for misuse.
                DeepCheck provides cutting-edge detection capabilities to help
                identify manipulated media.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Our Team
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-6">
                Our team of experts in artificial intelligence and machine
                learning has developed proprietary algorithms specifically
                designed to detect the subtle artifacts and inconsistencies
                present in AI-generated and manipulated content.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Technology
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                We're committed to maintaining the highest standards of accuracy
                and staying ahead of emerging deepfake technologies through
                continuous research and development.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
