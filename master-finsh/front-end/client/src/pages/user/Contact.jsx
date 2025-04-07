import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      dir="ltr"
      className="min-h-screen bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden"
    >
      {/* Subtle Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A4C6A]/10 via-[#00A896]/5 to-[#FF6F61]/10 opacity-50 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A4C6A] mb-6 animate-fade-in-down">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
            Have questions or need assistance? Contact us today—we’re here to
            help you with trusted medical insights.
          </p>
          <div className="absolute top-10 right-10 w-16 h-16 bg-[#00A896] rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-10 w-20 h-20 bg-[#FF6F61] rounded-full opacity-30 animate-pulse delay-300"></div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="absolute top-0 left-0 w-full h-3 bg-[#00A896] shadow-md"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form (Left Side as in Screenshot) */}
          <div className="bg-[#F5F6F5] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A4C6A] mb-6 text-left">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="text-left text-[#00A896] animate-fade-in-up">
                <svg
                  className="w-16 h-16 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 text-left"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A896] transition-all duration-300 text-left"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 text-left"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A896] transition-all duration-300 text-left"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-left"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A896] transition-all duration-300 text-left"
                    placeholder="Write your message here"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information (Right Side as in Screenshot) */}
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A4C6A] mb-6 text-left">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <svg
                  className="w-8 h-8 text-[#00A896] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A4C6A] text-left">
                    Email
                  </h3>
                  <p className="text-gray-700 text-left">
                    support@medicalsite.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-8 h-8 text-[#00A896] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A4C6A] text-left">
                    Phone
                  </h3>
                  <p className="text-gray-700 text-left">+0962 0000000</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-8 h-8 text-[#00A896] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 12.414a1 1 0 00-1.414 0l-4.243 4.243M4 20h16M12 4v8"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A4C6A] text-left">
                    Address
                  </h3>
                  <p className="text-gray-700 text-left">Amman-Jordan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
