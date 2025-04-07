import React, { useState, useEffect } from "react";
import { UsersIcon, UserPlusIcon, UserCheckIcon } from "lucide-react";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 flex items-center transition-transform hover:scale-105 ${color}`}
    >
      <div className="p-4 rounded-full mr-4 bg-gradient-to-br from-opacity-20 to-opacity-40">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    newPatients: 0,
    activePatients: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/patients");
        const patients = await response.json();
        if (response.ok) {
          const total = patients.length;
          const newPatients = patients.filter(
            (p) => new Date(p.createdAt).getMonth() === new Date().getMonth()
          ).length;
          const activePatients = patients.filter((p) => p.diagnosis).length;
          setStats({
            totalPatients: total,
            newPatients: newPatients,
            activePatients: activePatients,
          });
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-cairo">
      <div className="max-w-6xl mx-auto">
        {/* <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-600 mt-2">مرحباً بك مجدداً، د. أحمد</p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="إجمالي المرضى"
            value={stats.totalPatients}
            icon={<UsersIcon size={28} className="text-blue-600" />}
            color="hover:shadow-blue-200"
          />
          <StatCard
            title="مرضى جدد (هذا الشهر)"
            value={stats.newPatients}
            icon={<UserPlusIcon size={28} className="text-green-600" />}
            color="hover:shadow-green-200"
          />
          <StatCard
            title="مرضى نشطون"
            value={stats.activePatients}
            icon={<UserCheckIcon size={28} className="text-purple-600" />}
            color="hover:shadow-purple-200"
          />
        </div>
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ملخص النشاط
          </h2>
          <div className="border-t pt-4">
            <p className="text-gray-600 leading-relaxed">
              لقد قمت بإدارة{" "}
              <span className="font-bold">{stats.totalPatients}</span> مريضاً،
              وتمت إضافة <span className="font-bold">{stats.newPatients}</span>{" "}
              مرضى جدد هذا الشهر.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
