// import React from "react";

// function Header() {
//   return (
//     <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">لوحة تحكم الأدمن</h1>
//       <div className="flex items-center space-x-4">
//         <span>مرحبًا، أدمن</span>
//         <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
//           تسجيل الخروج
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // للتوجيه

  const handleLogout = () => {
    // هنا ممكن نضيف أي منطق لتسجيل الخروج (مثل مسح التوكن أو تحديث الحالة)
    navigate("/user/login"); // توجيه المستخدم لصفحة تسجيل الدخول
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">لوحة تحكم الأدمن</h1>
      <div className="flex items-center space-x-4">
        <span>مرحبًا، أدمن</span>
        <button
          onClick={handleLogout} // أضفت onClick لتسجيل الخروج
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}

export default Header;