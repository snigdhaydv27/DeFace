import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl text-white font-bold mb-8">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We are dedicated to providing secure and reliable file storage solutions
            for individuals and businesses. Our platform is designed with simplicity
            and security in mind, ensuring that your files are always accessible and
            protected.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our team consists of experienced developers and security experts who are
            passionate about creating the best file management experience possible.
            We continuously work to improve our platform and add new features based
            on user feedback.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">Technology</h2>
          <p className="text-gray-700">
            We leverage cutting-edge technologies to ensure fast, reliable, and secure
            file storage. Our infrastructure is built on a scalable cloud platform
            with multiple layers of security to protect your data.
          </p>
        </div>
        <Footer/>
      </div>
    );
  }