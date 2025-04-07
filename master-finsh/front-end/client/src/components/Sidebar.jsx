import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/statistics" className="hover:text-gray-300">
            الإحصائيات
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/doctor-approval" className="hover:text-gray-300">
            الموافقة على الأطباء
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/add-medicine" className="hover:text-gray-300">
            إضافة دواء
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/medicines" className="hover:text-gray-300">
            قائمة الأدوية
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/add-article" className="hover:text-gray-300">
            إضافة مقالة
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/articles" className="hover:text-gray-300">
            قائمة المقالات
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
