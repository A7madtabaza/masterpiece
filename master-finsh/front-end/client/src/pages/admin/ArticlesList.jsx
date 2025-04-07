import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">قائمة المقالات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={`http://localhost:5000${article.image}`}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">
                {article.content.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
