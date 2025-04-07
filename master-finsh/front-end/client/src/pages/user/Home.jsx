import React from "react";

function Home() {
  return (
    <>


      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[#F5F6F5] flex items-center justify-center py-16 px-6 overflow-hidden">
        {/* Background Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#0A4C6A] to-transparent opacity-20"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
          {/* Video Container */}
          <div className="relative w-full max-w-[700px] mx-auto">
            <div className="relative bg-[#0A4C6A] rounded-3xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500">
              <video
                autoPlay
                loop
                muted
                className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md"
              >
                <source src="/videos/video (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-[#00A896] rounded-3xl opacity-0 hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 bg-[#FF6F61] rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#FF6F61] rounded-br-3xl"></div>
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-[#0A4C6A] px-6 py-2 rounded-full shadow-lg border-2 border-[#00A896]">
              <span className="text-base font-semibold">MediCare QR</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A4C6A] mb-6 leading-tight">
              Scan for Safety
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              MediCare’s QR Code—your medical lifeline, accessible in a
              heartbeat.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-10 py-4 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] hover:shadow-lg transition-all duration-300">
                Join Now
              </button>
              <button className="px-10 py-4 bg-[#0A4C6A] text-white font-semibold rounded-full shadow-md hover:bg-[#F5F6F5] hover:text-[#0A4C6A] transition-all duration-300 border-2 border-transparent hover:border-[#00A896]">
                Discover How
              </button>
            </div>
          </div>
        </div>

        {/* Floating Medical Elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
          <span className="text-white text-xl font-bold">✚</span>
        </div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
          <span className="text-white text-xl font-bold">❤</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#00A896]"></div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Built for Your Care
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              { title: "Quick", desc: "Instant data access." },
              { title: "Safe", desc: "Protected always." },
              { title: "Flexible", desc: "Update on the go." },
              { title: "Everywhere", desc: "Global coverage." },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Decorative Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF6F61] rounded-b group-hover:bg-[#00A896] transition-colors duration-300"></div>
                <h3 className="text-xl font-semibold text-[#0A4C6A] mt-6 mb-4 group-hover:text-[#00A896] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
                {/* Hover Icon */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#00A896] text-2xl">✚</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decorative Element */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF6F61] rounded-tl-full opacity-10 blur-2xl transform translate-x-1/4 translate-y-1/4"></div>
      </section>

      {/* Awareness Corner Section */}
      <section className="py-20 bg-white text-[#0A4C6A] relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#00A896]"></div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Awareness Corner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Preparedness",
                desc: "Learn how to stay ready for any situation with your QR Code.",
                img: "https://www.tahd.org/uploads/1/2/9/2/129247634/emergency-prepardness-banner-r1_orig.png",
              },
              {
                title: "Health Tips",
                desc: "Simple steps to keep your medical info up-to-date.",
                img: "https://www.careinsurance.com/upload_master/media/posts/September2019/7YkQN5bb2bFUfmjogk4x.jpg",
              },
              {
                title: "Why QR Matters",
                desc: "Discover the impact of quick access in critical moments.",
                img: "data:image/jpeg;base64,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",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="relative bg-[#F5F6F5] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0A4C6A] mb-3 group-hover:text-[#00A896] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-base">{article.desc}</p>
                  <button className="mt-4 text-[#00A896] font-semibold hover:text-[#FF6F61] transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decorative Element */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00A896] rounded-tr-full opacity-10 blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
      </section>
      <section className="py-20 bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://via.placeholder.com/1200x800?text=MediCare+QR+Scan')",
          }}
        ></div>
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-[#0A4C6A] opacity-10"></div>

        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#00A896]"></div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#0A4C6A] text-center">
              Your Health, One Scan Away
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                MediCare QR redefines how we protect ourselves and those we
                love. It’s more than just a code—it’s a gateway to your health
                history, ready at a moment’s notice. Whether you’re on a trip,
                at the gym, or simply out for a walk, a quick scan unlocks
                everything a doctor or paramedic needs to know to save your
                life.
              </p>
              <p>
                Imagine the relief of knowing that your allergies, medications,
                and emergency contacts are always accessible, no matter where
                you are. MediCare QR puts that power in your pocket, blending
                simplicity with security. It’s your health, streamlined and
                safeguarded, just one scan away from making a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#00A896] rounded-full opacity-30 flex items-center justify-center shadow-md animate-pulse">
          <span className="text-white text-2xl">✚</span>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF6F61] rounded-tl-full opacity-10 blur-2xl transform translate-x-1/4 translate-y-1/4"></div>
      </section>
    </>
  );
}

export default Home;
