import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  const session = getServerSession(authOptions)
  console.log(session);
  return (
    <div>
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-10">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Build Smarter with <span className="text-green-600">MERN Stack</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Learn, practice, and grow your skills in modern web development.
                We provide the best resources for React, Node.js, MongoDB, and Express.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#features"
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow hover:bg-green-700 transition"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-xl hover:bg-green-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              {/* <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Coding illustration"
                className="rounded-2xl shadow-lg"
                width={200}
                height={200}
              /> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Developers Love Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🚀 Fast Learning</h3>
                <p className="text-gray-600">
                  Get step-by-step guides and resources to quickly build real-world projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-600 mb-3">💡 Modern Tools</h3>
                <p className="text-gray-600">
                  Learn the latest technologies like React 19, Next.js, and Tailwind CSS.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🌍 Community</h3>
                <p className="text-gray-600">
                  Join a network of learners and share your journey with like-minded devs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              {/* <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="About"
                className="rounded-2xl shadow-lg"
                width={200}
                height={200}
              /> */}
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Platform
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are dedicated to helping developers grow by providing practical projects,
                tutorials, and resources. Whether youre a beginner or experienced,
                you’ll find something valuable here.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to make modern web development accessible and fun
                for everyone who dreams of building amazing applications.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-green-600 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-lg">
            Join thousands of developers learning MERN stack development today.
          </p>
          <a
            href="#"
            className="px-8 py-3 bg-white text-green-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Join Now
          </a>
        </section>
      </div>

    </div>
  );
}
