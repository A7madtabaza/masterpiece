import React, { useState, useEffect } from "react";
import axios from "axios";

function Statistics() {
  const [stats, setStats] = useState({ doctors: 0, medicines: 0, articles: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [doctorsRes, medicinesRes, articlesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/doctors/pending"),
          axios.get("http://localhost:5000/api/medicines"),
          axios.get("http://localhost:5000/api/articles"),
        ]);
        setStats({
          doctors: doctorsRes.data.length,
          medicines: medicinesRes.data.length,
          articles: articlesRes.data.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">الإحصائيات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">عدد الأطباء المعلقين</h3>
          <p className="text-2xl">{stats.doctors}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">عدد الأدوية</h3>
          <p className="text-2xl">{stats.medicines}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">عدد المقالات</h3>
          <p className="text-2xl">{stats.articles}</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
