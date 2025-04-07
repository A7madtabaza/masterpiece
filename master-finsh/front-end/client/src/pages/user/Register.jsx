// // import React, { useState } from "react";
// // import axios from "axios";

// // const RegisterForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     userType: "user",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/register",
// //         formData,
// //         { withCredentials: true } // لدعم الكوكيز إذا كان مطلوب
// //       );
// //       alert(response.data.message);
// //       // هنا ممكن تعملي توجيه بعد التسجيل الناجح، مثلاً لصفحة تسجيل الدخول
// //     } catch (error) {
// //       alert(error.response?.data?.message || "خطأ في التسجيل");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             إنشاء حساب جديد
// //           </h2>
// //           <p className="mt-2 text-center text-sm text-gray-600">
// //             الرجاء إدخال بياناتك للتسجيل
// //           </p>
// //         </div>
// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           <div className="rounded-md shadow-sm space-y-4">
// //             <div>
// //               <label htmlFor="name" className="sr-only">
// //                 الاسم
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 placeholder="الاسم"
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="email" className="sr-only">
// //                 البريد الإلكتروني
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 placeholder="البريد الإلكتروني"
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="sr-only">
// //                 كلمة المرور
// //               </label>
// //               <input
// //                 id="password"
// //                 name="password"
// //                 type="password"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 placeholder="كلمة المرور"
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="userType"
// //                 className="block text-sm font-medium text-gray-700 text-right mb-1"
// //               >
// //                 نوع المستخدم
// //               </label>
// //               <select
// //                 id="userType"
// //                 name="userType"
// //                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               >
// //                 <option value="user">مستخدم</option>
// //                 <option value="doctor">طبيب</option>
// //                 <option value="admin">أدمن</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div>
// //             <button
// //               type="submit"
// //               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
// //             >
// //               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
// //                 <svg
// //                   className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 20 20"
// //                   fill="currentColor"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v2H8V6z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               </span>
// //               تسجيل
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterForm;
// // import React, { useState } from "react";
// // import axios from "axios";

// // const RegisterForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     userType: "user",
// //     // حقول إضافية للطبيب
// //     phone: "",
// //     jobNumber: "",
// //     specialization: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     // مسح رسالة الخطأ عند التعديل
// //     if (errors[name]) {
// //       setErrors({ ...errors, [name]: "" });
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};

// //     // التحقق من الحقول الأساسية
// //     if (!formData.name) newErrors.name = "الاسم مطلوب";
// //     if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
// //     if (!formData.password) newErrors.password = "كلمة المرور مطلوبة";

// //     // التحقق من حقول الطبيب إذا كان النوع طبيب
// //     if (formData.userType === "doctor") {
// //       if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
// //       if (!formData.jobNumber) newErrors.jobNumber = "رقم الوظيفة مطلوب";
// //       if (!formData.specialization) newErrors.specialization = "التخصص مطلوب";

// //       // تحقق من صحة رقم الهاتف
// //       const phoneRegex = /^[0-9]{10,15}$/;
// //       if (formData.phone && !phoneRegex.test(formData.phone)) {
// //         newErrors.phone = "رقم الهاتف غير صالح";
// //       }
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!validateForm()) return;

// //     try {
// //       // تحضير البيانات للإرسال
// //       const requestData = {
// //         ...formData,
// //         fullName: formData.name, // تحويل name إلى fullName
// //         // إذا كان مستخدم عادي، لا نرسل حقول الطبيب
// //         ...(formData.userType !== "doctor" && {
// //           phone: undefined,
// //           jobNumber: undefined,
// //           specialization: undefined,
// //         }),
// //       };

// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/register",
// //         requestData,
// //         { withCredentials: true }
// //       );

// //       alert(response.data.message);
// //       // يمكنك إضافة إعادة توجيه هنا بعد التسجيل الناجح
// //     } catch (error) {
// //       console.error("Registration error:", error);

// //       // معالجة أخطاء الخادم
// //       if (error.response?.data?.errors) {
// //         setErrors(error.response.data.errors);
// //       }

// //       alert(
// //         error.response?.data?.message ||
// //           "حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             إنشاء حساب جديد
// //           </h2>
// //           <p className="mt-2 text-center text-sm text-gray-600">
// //             الرجاء إدخال بياناتك للتسجيل
// //           </p>
// //         </div>

// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           <div className="rounded-md shadow-sm space-y-4">
// //             {/* حقل الاسم */}
// //             <div>
// //               <label
// //                 htmlFor="name"
// //                 className="block text-sm font-medium text-gray-700 text-right mb-1"
// //               >
// //                 الاسم الكامل
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 className={`appearance-none relative block w-full px-3 py-3 border ${
// //                   errors.name ? "border-red-500" : "border-gray-300"
// //                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                 placeholder="الاسم الكامل"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //               {errors.name && (
// //                 <p className="mt-1 text-sm text-red-600 text-right">
// //                   {errors.name}
// //                 </p>
// //               )}
// //             </div>

// //             {/* حقل البريد الإلكتروني */}
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700 text-right mb-1"
// //               >
// //                 البريد الإلكتروني
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 className={`appearance-none relative block w-full px-3 py-3 border ${
// //                   errors.email ? "border-red-500" : "border-gray-300"
// //                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                 placeholder="البريد الإلكتروني"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //               {errors.email && (
// //                 <p className="mt-1 text-sm text-red-600 text-right">
// //                   {errors.email}
// //                 </p>
// //               )}
// //             </div>

// //             {/* حقل كلمة المرور */}
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700 text-right mb-1"
// //               >
// //                 كلمة المرور
// //               </label>
// //               <input
// //                 id="password"
// //                 name="password"
// //                 type="password"
// //                 className={`appearance-none relative block w-full px-3 py-3 border ${
// //                   errors.password ? "border-red-500" : "border-gray-300"
// //                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                 placeholder="كلمة المرور"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               />
// //               {errors.password && (
// //                 <p className="mt-1 text-sm text-red-600 text-right">
// //                   {errors.password}
// //                 </p>
// //               )}
// //             </div>

// //             {/* حقل نوع المستخدم */}
// //             <div>
// //               <label
// //                 htmlFor="userType"
// //                 className="block text-sm font-medium text-gray-700 text-right mb-1"
// //               >
// //                 نوع المستخدم
// //               </label>
// //               <select
// //                 id="userType"
// //                 name="userType"
// //                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 value={formData.userType}
// //                 onChange={handleChange}
// //                 dir="rtl"
// //               >
// //                 <option value="user">مستخدم عادي</option>
// //                 <option value="doctor">طبيب</option>
// //                 <option value="admin">مسؤول</option>
// //               </select>
// //             </div>

// //             {/* حقول إضافية للطبيب */}
// //             {formData.userType === "doctor" && (
// //               <>
// //                 {/* حقل رقم الهاتف */}
// //                 <div>
// //                   <label
// //                     htmlFor="phone"
// //                     className="block text-sm font-medium text-gray-700 text-right mb-1"
// //                   >
// //                     رقم الهاتف
// //                   </label>
// //                   <input
// //                     id="phone"
// //                     name="phone"
// //                     type="tel"
// //                     className={`appearance-none relative block w-full px-3 py-3 border ${
// //                       errors.phone ? "border-red-500" : "border-gray-300"
// //                     } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                     placeholder="رقم الهاتف (10-15 رقم)"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     dir="rtl"
// //                   />
// //                   {errors.phone && (
// //                     <p className="mt-1 text-sm text-red-600 text-right">
// //                       {errors.phone}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* حقل رقم الوظيفة */}
// //                 <div>
// //                   <label
// //                     htmlFor="jobNumber"
// //                     className="block text-sm font-medium text-gray-700 text-right mb-1"
// //                   >
// //                     رقم الوظيفة
// //                   </label>
// //                   <input
// //                     id="jobNumber"
// //                     name="jobNumber"
// //                     type="text"
// //                     className={`appearance-none relative block w-full px-3 py-3 border ${
// //                       errors.jobNumber ? "border-red-500" : "border-gray-300"
// //                     } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                     placeholder="رقم الوظيفة"
// //                     value={formData.jobNumber}
// //                     onChange={handleChange}
// //                     dir="rtl"
// //                   />
// //                   {errors.jobNumber && (
// //                     <p className="mt-1 text-sm text-red-600 text-right">
// //                       {errors.jobNumber}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* حقل التخصص */}
// //                 <div>
// //                   <label
// //                     htmlFor="specialization"
// //                     className="block text-sm font-medium text-gray-700 text-right mb-1"
// //                   >
// //                     التخصص الطبي
// //                   </label>
// //                   <input
// //                     id="specialization"
// //                     name="specialization"
// //                     type="text"
// //                     className={`appearance-none relative block w-full px-3 py-3 border ${
// //                       errors.specialization
// //                         ? "border-red-500"
// //                         : "border-gray-300"
// //                     } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
// //                     placeholder="التخصص الطبي"
// //                     value={formData.specialization}
// //                     onChange={handleChange}
// //                     dir="rtl"
// //                   />
// //                   {errors.specialization && (
// //                     <p className="mt-1 text-sm text-red-600 text-right">
// //                       {errors.specialization}
// //                     </p>
// //                   )}
// //                 </div>
// //               </>
// //             )}
// //           </div>

// //           <div>
// //             <button
// //               type="submit"
// //               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
// //             >
// //               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
// //                 <svg
// //                   className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 20 20"
// //                   fill="currentColor"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v2H8V6z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               </span>
// //               تسجيل
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterForm;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // أضفت useNavigate للتوجيه بعد التسجيل

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "", // غيرت name إلى fullName
//     email: "",
//     password: "",
//     phone: "", // أضفت phone كحقل أساسي
//     userType: "user",
//     // حقول إضافية للطبيب
//     jobNumber: "",
//     specialization: "",
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // للتوجيه بعد التسجيل

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // مسح رسالة الخطأ عند التعديل
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // التحقق من الحقول الأساسية لكل المستخدمين
//     if (!formData.fullName) newErrors.fullName = "الاسم الكامل مطلوب";
//     if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
//     if (!formData.password) newErrors.password = "كلمة المرور مطلوبة";
//     if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
//     else {
//       const phoneRegex = /^[0-9]{10,15}$/;
//       if (!phoneRegex.test(formData.phone)) {
//         newErrors.phone = "رقم الهاتف غير صالح (10-15 رقم)";
//       }
//     }

//     // التحقق من حقول الطبيب إذا كان النوع طبيب
//     if (formData.userType === "doctor") {
//       if (!formData.jobNumber) newErrors.jobNumber = "رقم الوظيفة مطلوب";
//       if (!formData.specialization) newErrors.specialization = "التخصص مطلوب";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       // تحضير البيانات للإرسال
//       const requestData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         password: formData.password,
//         phone: formData.phone,
//         userType: formData.userType,
//         // إضافة حقول الطبيب فقط إذا كان النوع doctor
//         ...(formData.userType === "doctor" && {
//           jobNumber: formData.jobNumber,
//           specialization: formData.specialization,
//         }),
//       };

//       console.log("البيانات المرسلة:", requestData); // للتحقق

//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         requestData,
//         { withCredentials: true }
//       );

//       alert(response.data.message);
//       // توجيه المستخدم لصفحة تسجيل الدخول بعد التسجيل الناجح
//       navigate("/user/login");
//     } catch (error) {
//       console.error("Registration error:", error.response);
//       // معالجة أخطاء الخادم
//       if (error.response?.data?.errors) {
//         setErrors(error.response.data.errors);
//       }
//       alert(
//         error.response?.data?.message ||
//           "حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             إنشاء حساب جديد
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             الرجاء إدخال بياناتك للتسجيل
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             {/* حقل الاسم الكامل */}
//             <div>
//               <label
//                 htmlFor="fullName"
//                 className="block text-sm font-medium text-gray-700 text-right mb-1"
//               >
//                 الاسم الكامل
//               </label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 className={`appearance-none relative block w-full px-3 py-3 border ${
//                   errors.fullName ? "border-red-500" : "border-gray-300"
//                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                 placeholder="الاسم الكامل"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//               {errors.fullName && (
//                 <p className="mt-1 text-sm text-red-600 text-right">
//                   {errors.fullName}
//                 </p>
//               )}
//             </div>

//             {/* حقل البريد الإلكتروني */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 text-right mb-1"
//               >
//                 البريد الإلكتروني
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 className={`appearance-none relative block w-full px-3 py-3 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                 placeholder="البريد الإلكتروني"
//                 value={formData.email}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600 text-right">
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             {/* حقل كلمة المرور */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700 text-right mb-1"
//               >
//                 كلمة المرور
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 className={`appearance-none relative block w-full px-3 py-3 border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                 placeholder="كلمة المرور"
//                 value={formData.password}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-600 text-right">
//                   {errors.password}
//                 </p>
//               )}
//             </div>

//             {/* حقل رقم الهاتف (أساسي للكل) */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 text-right mb-1"
//               >
//                 رقم الهاتف
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 className={`appearance-none relative block w-full px-3 py-3 border ${
//                   errors.phone ? "border-red-500" : "border-gray-300"
//                 } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                 placeholder="رقم الهاتف (10-15 رقم)"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 dir="rtl"
//               />
//               {errors.phone && (
//                 <p className="mt-1 text-sm text-red-600 text-right">
//                   {errors.phone}
//                 </p>
//               )}
//             </div>

//             {/* حقل نوع المستخدم */}
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
//                 value={formData.userType}
//                 onChange={handleChange}
//                 dir="rtl"
//               >
//                 <option value="user">مستخدم عادي</option>
//                 <option value="doctor">طبيب</option>
//                 <option value="admin">مسؤول</option>
//               </select>
//             </div>

//             {/* حقول إضافية للطبيب */}
//             {formData.userType === "doctor" && (
//               <>
//                 {/* حقل رقم الوظيفة */}
//                 <div>
//                   <label
//                     htmlFor="jobNumber"
//                     className="block text-sm font-medium text-gray-700 text-right mb-1"
//                   >
//                     رقم الوظيفة
//                   </label>
//                   <input
//                     id="jobNumber"
//                     name="jobNumber"
//                     type="text"
//                     className={`appearance-none relative block w-full px-3 py-3 border ${
//                       errors.jobNumber ? "border-red-500" : "border-gray-300"
//                     } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                     placeholder="رقم الوظيفة"
//                     value={formData.jobNumber}
//                     onChange={handleChange}
//                     dir="rtl"
//                   />
//                   {errors.jobNumber && (
//                     <p className="mt-1 text-sm text-red-600 text-right">
//                       {errors.jobNumber}
//                     </p>
//                   )}
//                 </div>

//                 {/* حقل التخصص */}
//                 <div>
//                   <label
//                     htmlFor="specialization"
//                     className="block text-sm font-medium text-gray-700 text-right mb-1"
//                   >
//                     التخصص الطبي
//                   </label>
//                   <input
//                     id="specialization"
//                     name="specialization"
//                     type="text"
//                     className={`appearance-none relative block w-full px-3 py-3 border ${
//                       errors.specialization
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                     placeholder="التخصص الطبي"
//                     value={formData.specialization}
//                     onChange={handleChange}
//                     dir="rtl"
//                   />
//                   {errors.specialization && (
//                     <p className="mt-1 text-sm text-red-600 text-right">
//                       {errors.specialization}
//                     </p>
//                   )}
//                 </div>
//               </>
//             )}
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
//                     d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v2H8V6z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//               تسجيل
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

// src/components/RegisterForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    jobNumber: "",
    specialization: "",
    userType: "user",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (formData.userType === "user" && !formData.address)
      newErrors.address = "Address is required";
    if (formData.userType === "doctor") {
      if (!formData.jobNumber) newErrors.jobNumber = "Job number is required";
      if (!formData.specialization)
        newErrors.specialization = "Specialization is required";
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10-15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        { withCredentials: true }
      );

      if (formData.userType === "doctor") {
        alert("Registration request sent. Waiting for admin approval.");
      } else {
        alert(response.data.message);
      }
      navigate("/user/login");
    } catch (error) {
      console.error("Registration error:", error.response);
      if (error.response?.data?.errors) setErrors(error.response.data.errors);
      alert(error.response?.data?.message || "Registration error occurred.");
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

      {/* Left Section - Illustration */}
      <div
        className={`w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden ${
          animateIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* SVG Illustration */}
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

              {/* Registration illustration */}
              <g transform="translate(400, 300) scale(0.8)">
                <circle cx="0" cy="0" r="80" fill="#4f46e5" opacity="0.7" />
                <g fill="white" transform="translate(-50, -50) scale(0.5)">
                  {/* User profile */}
                  <circle cx="0" cy="-30" r="30" />
                  <path d="M-30,20 L30,20 L30,60 C30,75 15,85 0,85 C-15,85 -30,75 -30,60 Z" />

                  {/* Plus sign for registration */}
                  <rect x="-5" y="20" width="10" height="40" fill="#4f46e5" />
                  <rect x="-20" y="35" width="40" height="10" fill="#4f46e5" />
                </g>
              </g>

              {/* Icons around */}
              <g transform="translate(250, 180)">
                <circle cx="0" cy="0" r="25" fill="#4f46e5" opacity="0.7" />
                <path
                  d="M-15,-5 L15,-5 L0,25 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              <g transform="translate(550, 180)">
                <circle cx="0" cy="0" r="25" fill="#06b6d4" opacity="0.7" />
                <path
                  d="M-12,0 L0,-12 L12,0 L0,12 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              <g transform="translate(250, 420)">
                <circle cx="0" cy="0" r="25" fill="#06b6d4" opacity="0.7" />
                <path
                  d="M-15,-5 L15,-5 L0,25 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              <g transform="translate(550, 420)">
                <circle cx="0" cy="0" r="25" fill="#4f46e5" opacity="0.7" />
                <path
                  d="M-12,0 L0,-12 L12,0 L0,12 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Text overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-900 to-transparent p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            Join Our Healthcare Community
          </h2>
          <p className="text-sm md:text-base font-light opacity-90">
            Register now to access personalized medical services and connect
            with healthcare professionals
          </p>
        </div>
      </div>

      {/* Right Section - Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative z-10">
        <div
          className={`w-full max-w-md ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-1000 delay-300`}
        >
          {/* Brand Logo */}
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
              <h2 className="text-2xl font-bold text-gray-800">
                Create Account
              </h2>
              <p className="text-gray-600 mt-1">
                Fill in your details to register
              </p>
            </div>

            {/* User Type Tabs */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    formData.userType === "user"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, userType: "user" });
                    setErrors({});
                  }}
                >
                  Patient
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    formData.userType === "doctor"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, userType: "doctor" });
                    setErrors({});
                  }}
                >
                  Doctor
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    formData.userType === "admin"
                      ? "bg-white text-indigo-600 shadow"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, userType: "admin" });
                    setErrors({});
                  }}
                >
                  Admin
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
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
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password */}
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
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Address (for users) */}
              {formData.userType === "user" && (
                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                        errors.address ? "border-red-500" : "border-gray-300"
                      } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.address}
                    </p>
                  )}
                </div>
              )}

              {/* Doctor-specific fields */}
              {formData.userType === "doctor" && (
                <>
                  <div className="space-y-2">
                    <label
                      htmlFor="jobNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Number
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </div>
                      <input
                        id="jobNumber"
                        name="jobNumber"
                        type="text"
                        required
                        className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                          errors.jobNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                        placeholder="Enter your job number"
                        value={formData.jobNumber}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.jobNumber && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.jobNumber}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="specialization"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Specialization
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <input
                        id="specialization"
                        name="specialization"
                        type="text"
                        required
                        className={`block w-full pl-10 py-3 text-gray-900 bg-transparent border-b-2 ${
                          errors.specialization
                            ? "border-red-500"
                            : "border-gray-300"
                        } appearance-none focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-500`}
                        placeholder="Enter your specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.specialization && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.specialization}
                      </p>
                    )}
                  </div>
                </>
              )}

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
                    {isLoading ? "Registering..." : "Register"}
                  </span>
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/user/login"
                  className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;