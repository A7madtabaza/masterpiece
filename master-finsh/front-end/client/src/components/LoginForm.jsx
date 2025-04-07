// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//     userType: "user",
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         credentials,
//         { withCredentials: true }
//       );
//       alert(response.data.message);
//       // هنا ممكن تضيفي توجيه بناءً على userType بعد تسجيل الدخول
//     } catch (error) {
//       alert(error.response?.data?.message || "خطأ في تسجيل الدخول");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             تسجيل الدخول
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             الرجاء إدخال بيانات الاعتماد الخاصة بك
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 البريد الإلكتروني
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="البريد الإلكتروني"
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 كلمة المرور
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="كلمة المرور"
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="userType"
//                 className="block text-sm font-medium text-gray-700 text-right mb-1"
//               >
//                 نوع المستخدم
//               </label>
//               <select
//                 id="userType"
//                 name="userType"
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 onChange={handleChange}
//                 dir="rtl"
//               >
//                 <option value="user">مستخدم</option>
//                 <option value="doctor">طبيب</option>
//                 <option value="admin">أدمن</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
//             >
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                 <svg
//                   className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//               تسجيل الدخول
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
// src/components/LoginForm.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginForm = ({ handleLogin }) => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//     userType: "user",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         credentials,
//         { withCredentials: true }
//       );

//       if (credentials.userType === "doctor" && response.data.status !== "approved") {
//         setError("حسابك في انتظار الموافقة أو تم رفضه.");
//         return;
//       }

//       handleLogin(credentials.userType);
//       if (credentials.userType === "user") navigate("/");
//       else if (credentials.userType === "doctor") navigate("/doctor/dashboard");
//       else if (credentials.userType === "admin") navigate("/admin/statistics");
//     } catch (error) {
//       setError(error.response?.data?.message || "خطأ في تسجيل الدخول");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             تسجيل الدخول
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             الرجاء إدخال بياناتك
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 البريد الإلكتروني
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="البريد الإلكتروني"
//                 value={credentials.email}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 كلمة المرور
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="كلمة المرور"
//                 value={credentials.password}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label htmlFor="userType" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 نوع المستخدم
//               </label>
//               <select
//                 id="userType"
//                 name="userType"
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 value={credentials.userType}
//                 onChange={handleChange}
//                 dir="rtl"
//               >
//                 <option value="user">مستخدم</option>
//                 <option value="doctor">طبيب</option>
//                 <option value="admin">أدمن</option>
//               </select>
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               تسجيل الدخول
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
// src/components/LoginForm.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginForm = ({ handleLogin }) => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//     userType: "user",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         credentials,
//         { withCredentials: true }
//       );

//       console.log("Login response:", response.data); // للتأكد من الـ response

//       if (credentials.userType === "doctor" && response.data.status !== "approved") {
//         setError("حسابك في انتظار الموافقة أو تم رفضه.");
//         return;
//       }

//       handleLogin(credentials.userType);
//       if (credentials.userType === "user") navigate("/");
//       else if (credentials.userType === "doctor") navigate("/doctor/dashboard");
//       else if (credentials.userType === "admin") navigate("/admin/statistics");
//     } catch (error) {
//       setError(error.response?.data?.message || "خطأ في تسجيل الدخول");
//       console.error("Login error:", error.response?.data); // لمعرفة الخطأ
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             تسجيل الدخول
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             الرجاء إدخال بياناتك
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 البريد الإلكتروني
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="البريد الإلكتروني"
//                 value={credentials.email}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 كلمة المرور
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="كلمة المرور"
//                 value={credentials.password}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//             </div>
//             <div>
//               <label htmlFor="userType" className="block text-sm font-medium text-gray-700 text-right mb-1">
//                 نوع المستخدم
//               </label>
//               <select
//                 id="userType"
//                 name="userType"
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 value={credentials.userType}
//                 onChange={handleChange}
//                 dir="rtl"
//               >
//                 <option value="user">مستخدم</option>
//                 <option value="doctor">طبيب</option>
//                 <option value="admin">أدمن</option>
//               </select>
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               تسجيل الدخول
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    userType: "user",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (credentials.email && credentials.password) {
        handleLogin(credentials.userType);
        if (credentials.userType === "user") navigate("/");
        else if (credentials.userType === "doctor")
          navigate("/doctor/dashboard");
        else if (credentials.userType === "admin")
          navigate("/admin/statistics");
      } else {
        setError("Please enter all required information");
      }
    } catch (error) {
      setError("Login error, please try again",error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Shapes Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Left Section - 3D Medical Illustration */}
      <div
        className={`w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden ${
          animateIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* SVG Medical Illustration */}
          <div className="relative w-full max-w-lg h-full max-h-96">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <defs>
                <linearGradient
                  id="bgGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient
                  id="pulseGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4f46e5">
                    <animate
                      attributeName="stop-color"
                      values="#4f46e5;#06b6d4;#4f46e5"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#06b6d4">
                    <animate
                      attributeName="stop-color"
                      values="#06b6d4;#4f46e5;#06b6d4"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>

              {/* Base circle */}
              <circle
                cx="400"
                cy="300"
                r="200"
                fill="url(#bgGradient)"
                opacity="0.1"
              />

              {/* Pulse animation */}
              <circle
                cx="400"
                cy="300"
                r="150"
                fill="none"
                stroke="url(#pulseGradient)"
                strokeWidth="6"
              >
                <animate
                  attributeName="r"
                  values="140;180;140"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.3;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* QR Code replacing the medical cross */}
              <g transform="translate(400, 300) scale(0.8)">
                <circle cx="0" cy="0" r="80" fill="#4f46e5" opacity="0.7" />
                {/* QR Code Pattern (Simplified) */}
                <g fill="white" transform="translate(-50, -50) scale(0.5)">
                  {/* QR Code Frame */}
                  <rect x="-90" y="-90" width="180" height="180" fill="white" />

                  {/* QR Code Blocks - Pattern representing a QR code */}
                  <rect x="-80" y="-80" width="40" height="40" />
                  <rect x="40" y="-80" width="40" height="40" />
                  <rect x="-80" y="40" width="40" height="40" />

                  {/* Position detection patterns - corners */}
                  <rect x="-70" y="-70" width="20" height="20" fill="white" />
                  <rect x="50" y="-70" width="20" height="20" fill="white" />
                  <rect x="-70" y="50" width="20" height="20" fill="white" />

                  {/* QR Code data pattern - simplified representation */}
                  <rect x="-30" y="-80" width="10" height="10" />
                  <rect x="-10" y="-80" width="20" height="10" />
                  <rect x="20" y="-80" width="10" height="10" />

                  <rect x="-80" y="-30" width="10" height="20" />
                  <rect x="-60" y="-20" width="20" height="10" />

                  <rect x="-20" y="-30" width="40" height="10" />
                  <rect x="-20" y="-10" width="10" height="20" />
                  <rect x="0" y="-10" width="20" height="10" />
                  <rect x="30" y="-30" width="10" height="30" />

                  <rect x="50" y="-20" width="20" height="10" />
                  <rect x="60" y="0" width="10" height="20" />

                  <rect x="-80" y="10" width="20" height="10" />
                  <rect x="-50" y="10" width="30" height="10" />
                  <rect x="-10" y="10" width="40" height="10" />
                  <rect x="40" y="10" width="30" height="10" />

                  <rect x="-30" y="30" width="10" height="20" />
                  <rect x="-10" y="30" width="20" height="10" />
                  <rect x="20" y="30" width="10" height="20" />
                  <rect x="40" y="40" width="20" height="10" />
                </g>
              </g>

              {/* Heartbeat line */}
              <path
                d="M250,300 L330,300 L350,250 L370,350 L390,250 L410,350 L430,250 L450,300 L550,300"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="6"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;1000,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Medical symbols - changed to different icons */}
              <g transform="translate(250, 180)">
                <circle cx="0" cy="0" r="25" fill="#4f46e5" opacity="0.7" />
                <path
                  d="M-10,0 L10,0 M0,-10 L0,10"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <g transform="translate(550, 180)">
                <circle cx="0" cy="0" r="25" fill="#06b6d4" opacity="0.7" />
                <path
                  d="M-12,-5 L0,7 L12,-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <g transform="translate(250, 420)">
                <circle cx="0" cy="0" r="25" fill="#06b6d4" opacity="0.7" />
                <path
                  d="M-8,0 A8,8 0 0 0 8,0 A8,8 0 0 0 -8,0"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>

              <g transform="translate(550, 420)">
                <circle cx="0" cy="0" r="25" fill="#4f46e5" opacity="0.7" />
                <path
                  d="M-10,-10 L10,10 M-10,10 L10,-10"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Text overlay - Changed to English */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-900 to-transparent p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            Your Healthcare in One Place
          </h2>
          <p className="text-sm md:text-base font-light opacity-90">
            An integrated medical platform connecting doctors and patients
            easily and securely
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative z-10">
        <div
          className={`w-full max-w-md ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-1000 delay-300`}
        >
          {/* Brand Logo - Changed */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12h6M12 9v6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
              <p className="text-gray-600 mt-1">
                Log in to access our medical services
              </p>
            </div>

            {/* Added QR Code */}
            <div className="mb-6 flex justify-center">
              <div className="bg-white p-2 rounded-lg shadow">
                <svg viewBox="0 0 200 200" width="80" height="80">
                  {/* Simple QR code SVG */}
                  <rect x="0" y="0" width="200" height="200" fill="white" />
                  <g fill="#000000">
                    {/* QR code pattern - simplified representation */}
                    <rect x="20" y="20" width="40" height="40" />
                    <rect x="140" y="20" width="40" height="40" />
                    <rect x="20" y="140" width="40" height="40" />
                    <rect x="70" y="70" width="60" height="60" />
                    <rect x="70" y="20" width="10" height="40" />
                    <rect x="90" y="20" width="10" height="10" />
                    <rect x="110" y="20" width="20" height="10" />
                    <rect x="20" y="70" width="10" height="10" />
                    <rect x="40" y="70" width="20" height="20" />
                    <rect x="20" y="90" width="40" height="10" />
                    <rect x="20" y="110" width="10" height="20" />
                    <rect x="40" y="120" width="20" height="10" />
                    <rect x="140" y="70" width="40" height="10" />
                    <rect x="140" y="90" width="10" height="20" />
                    <rect x="160" y="90" width="20" height="10" />
                    <rect x="170" y="110" width="10" height="30" />
                    <rect x="140" y="140" width="20" height="20" />
                    <rect x="70" y="140" width="10" height="40" />
                    <rect x="90" y="140" width="20" height="10" />
                    <rect x="90" y="160" width="10" height="20" />
                    <rect x="110" y="170" width="20" height="10" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    credentials.userType === "user"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() =>
                    setCredentials({ ...credentials, userType: "user" })
                  }
                >
                  Patient
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    credentials.userType === "doctor"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() =>
                    setCredentials({ ...credentials, userType: "doctor" })
                  }
                >
                  Doctor
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    credentials.userType === "admin"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() =>
                    setCredentials({ ...credentials, userType: "admin" })
                  }
                >
                  Admin
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.34998 9.6499V11.3499C4.34998 15.5699 7.77998 18.9999 12 18.9999C16.22 18.9999 19.65 15.5699 19.65 11.3499V9.6499"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19V22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="16" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <span className="absolute left-0 w-12 h-full bg-gradient-to-l from-indigo-600 to-indigo-600/0 group-hover:scale-x-150 transition-all duration-500 origin-left"></span>
                  {isLoading && (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  )}
                  <span className="relative">
                    {isLoading ? "Logging in..." : "Login"}
                  </span>
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Create new account
                </a>
              </p>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-8 text-center">
            <button className="inline-flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              <svg
                className="w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <span className="ml-1">Need help? Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;