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
                &quot;To empower individuals, institutions, and digital platforms
                with AI-driven tools that distinguish between deepfakes,
                AI-generated images, and authentic content — promoting trust,
                transparency, and digital integrity.&quot; As synthetic media becomes
                more sophisticated, our mission is to tackle visual
                misinformation with intelligent, accessible technology. Our
                solution enables researchers to analyze fake content, helps
                journalists verify authenticity, and supports law enforcement in
                validating digital evidence. Social platforms can also use our
                tools to identify and moderate harmful visual content. At
                AI-liens, we’re committed to using technology as a force for
                truth in an increasingly artificial world.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Our Team
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-6">
                Welcome to AI-liens, a team of passionate and driven second-year
                Computer Science students from the National Institute of
                Technology Patna. We are a group of young innovators
                enthusiastic about exploring the intersection of Machine
                Learning, Web Development, and Cybersecurity. Our mission is to
                build intelligent systems that can detect and classify visual
                manipulations — including AI-generated content and deepfakes —
                to make the digital world safer, more transparent, and
                trustworthy for everyone. As digital misinformation becomes
                increasingly sophisticated, we believe it’s our responsibility
                as future technologists to build tools that protect digital
                integrity and uphold truth.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                Technology
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                At the heart of our project lies DeFace, a powerful image
                classification model built on Google’s Vision Transformer (ViT)
                architecture. Designed to move beyond binary real/fake
                detection, DeFace classifies images into three categories:
                Artificial, Deepfake, and Real. It achieves an impressive 97.5%
                accuracy, thanks to extensive training on diverse datasets such
                as FaceForensics++ and CelebDF. By combining CNNs for extracting
                fine-grained local features with the global context-awareness of
                Transformers, our hybrid model ensures robust performance across
                varied image manipulations. To enhance usability, classification
                results are presented alongside a visual bar chart, making
                predictions easy to interpret even for non-technical users. On
                the development side, our web stack is designed for performance,
                scalability, and seamless user interaction. The frontend is
                built using Next.js with TailwindCSS for responsive and elegant
                UI design. Our backend leverages Node.js and Express.js, with
                secure authentication powered by JWT (JSON Web Tokens). We use
                MongoDB Atlas as our cloud-based NoSQL database for efficient
                data handling, while Multer manages image uploads. The entire
                application is deployed on Vercel, ensuring fast global delivery
                and smooth user experience. Integration with Hugging Face
                Transformers enables real-time inference using our
                custom-trained model.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
