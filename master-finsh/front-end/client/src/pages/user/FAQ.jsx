import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide reliable and up-to-date medical information from trusted sources like PubMed, supporting users in Amman and the region with accurate health knowledge.",
    },
    {
      question: "How can I access full articles?",
      answer:
        "Click on 'Read on PubMed' in the Articles page to visit the original article link. Some articles are available for free, while others may require a subscription.",
    },
    {
      question: "Can I request a medical consultation through the website?",
      answer:
        "No, the website does not offer direct medical consultations. However, you can contact us via the Contact page for general inquiries or support.",
    },
    {
      question: "How often is the information updated?",
      answer:
        "The articles are refreshed every 5 minutes to ensure you get the latest research and updates from PubMed.",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden"
        dir="rtl"
      >
        {/* Subtle Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4C6A]/10 via-[#00A896]/5 to-[#FF6F61]/10 opacity-50 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative w-full py-24 px-6 z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A4C6A] mb-6 animate-fade-in-down">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
              Find answers to common questions about our services and how we can
              assist you with your health inquiries.
            </p>
            <div className="absolute top-10 right-10 w-16 h-16 bg-[#00A896] rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-20 h-20 bg-[#FF6F61] rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white relative z-10">
          <div className="absolute top-0 right-0 w-full h-3 bg-[#00A896] shadow-md"></div>
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F5F6F5] rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-right flex justify-between items-center bg-[#F5F6F5] hover:bg-[#E8ECEF] transition-all duration-300 focus:outline-none flex-row-reverse"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[#0A4C6A]">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-[#00A896] transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 py-4 bg-white animate-fade-in-up">
                      <p className="text-gray-700 text-right">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
