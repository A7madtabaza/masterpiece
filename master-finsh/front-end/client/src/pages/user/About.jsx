import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F5F6F5] text-[#0A4C6A]" dir="rtl">
        {/* Hero Section */}
        <section className="relative w-full py-20 px-6 overflow-hidden">
          {/* Background Gradient Accent */}
          <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-[#0A4C6A] to-transparent opacity-20"></div>

          {/* Main Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A4C6A] mb-6">
              About MediCare
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              At MediCare, we’re revolutionizing how medical information is
              accessed in emergencies. Our mission is simple: to save lives by
              making critical health data available with a single scan.
            </p>
            {/* Floating Decorative Elements */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
              <span className="text-white text-xl font-bold">✚</span>
            </div>
            <div className="absolute bottom-0 left-10 w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
              <span className="text-white text-xl font-bold">❤</span>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-white text-[#0A4C6A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Mission
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-xl shadow-md"
                >
                  <source src="/videos/video (3).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex-1 text-center md:text-right">
                <p className="text-lg text-gray-700 mb-6">
                  We believe everyone deserves peace of mind knowing their
                  medical history is accessible when it matters most. MediCare’s
                  QR technology empowers individuals and healthcare providers
                  with instant, secure access to vital information—anytime,
                  anywhere.
                </p>
                <button className="px-8 py-3 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section (Commented Out) */}
        {/* <section className="py-20 bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Ahmed",
                  role: "Founder & CEO",
                  img: "https://via.placeholder.com/150?text=Sarah",
                },
                {
                  name: "John Doe",
                  role: "Chief Technology Officer",
                  img: "https://via.placeholder.com/150?text=John",
                },
                {
                  name: "Emily Carter",
                  role: "Head of Design",
                  img: "https://via.placeholder.com/150?text=Emily",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#0A4C6A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section */}
        <section className="py-20 bg-white text-[#0A4C6A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the MediCare Movement
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Be part of a community dedicated to safety, innovation, and care.
              Sign up today and take the first step toward a healthier, more
              secure future.
            </p>
            <Link
              to="/signup"
              className="px-10 py-4 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transition-all duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
