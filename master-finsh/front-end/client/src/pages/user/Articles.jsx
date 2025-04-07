import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const query = "emergency medicine";
      const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(
        query
      )}&retmax=6&retmode=json&sort=date`;

      const searchResponse = await axios.get(searchUrl);
      const ids = searchResponse.data.esearchresult.idlist.join(",");

      const detailsUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json`;
      const detailsResponse = await axios.get(detailsUrl);
      const detailsData = detailsResponse.data.result;

      const formattedArticles = Object.keys(detailsData)
        .filter((key) => key !== "uids")
        .map((id) => {
          const article = detailsData[id];
          return {
            id,
            title: article.title || "Untitled Article",
            summary:
              article.source && article.lastauthor
                ? `Published in ${article.source} by ${article.lastauthor} et al. Click to read the full article on PubMed.`
                : "Click to read the full article on PubMed.",
            date: article.pubdate
              ? article.pubdate.split(" ")[0]
              : "Unknown Date",
            link: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
          };
        });

      setArticles(formattedArticles);
    } catch (error) {
      console.error("Error fetching articles from PubMed:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
    const interval = setInterval(fetchArticles, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
      <div className="min-h-screen bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4C6A]/10 via-[#00A896]/5 to-[#FF6F61]/10 opacity-50 pointer-events-none"></div>

        <section className="relative w-full py-24 px-6 z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A4C6A] mb-6 animate-fade-in-down">
              Explore Real Medical Articles
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
              Dive into the latest research from PubMed, a trusted source for
              medical knowledge, updated in real-time.
            </p>
            <div className="absolute top-10 left-10 w-16 h-16 bg-[#00A896] rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-10 w-20 h-20 bg-[#FF6F61] rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </section>

        <section className="py-20 bg-white relative z-10">
          <div className="absolute top-0 left-0 w-full h-3 bg-[#00A896] shadow-md"></div>
          <div className="max-w-6xl mx-auto px-6">
            {loading ? (
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-[#00A896] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-700 text-lg">Loading...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <div
                    key={article.id}
                    className="bg-[#F5F6F5] rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6">
                      {/* Medical Icon */}
                      <div className="flex justify-center mb-4">
                        <svg
                          className="w-16 h-16 text-[#00A896]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 11H5m14 0a8 8 0 11-16 0 8 8 0 0116 0zM13 7v4a2 2 0 01-2 2H9"
                          />
                        </svg>
                      </div>
                      <h2 className="text-xl font-semibold text-[#0A4C6A] mb-3 line-clamp-2 text-center">
                        {article.title}
                      </h2>
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {article.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {article.date}
                        </span>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transition-all duration-300"
                        >
                          Read on PubMed
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-24 bg-[#F5F6F5] text-[#0A4C6A] relative z-10">
          <div className="absolute top-0 left-0 w-full h-3 bg-[#00A896] shadow-md"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-down">
              Stay Informed with Real Insights
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up">
              Sign up to get the latest PubMed articles and health tips
              delivered to your inbox.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-12 py-4 bg-[#00A896] text-white font-semibold rounded-full shadow-lg hover:bg-[#FF6F61] transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
            >
              Sign Up Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Articles;
