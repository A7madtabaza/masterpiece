// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DoctorApproval() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/doctors/pending")
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleApprove = (id) => {
//     axios
//       .put(`http://localhost:5000/api/doctors/approve/${id}`)
//       .then(() => setDoctors(doctors.filter((doc) => doc._id !== id)))
//       .catch((error) => console.error(error));
//   };

//   const handleReject = (id) => {
//     axios
//       .put(`http://localhost:5000/api/doctors/reject/${id}`)
//       .then(() => setDoctors(doctors.filter((doc) => doc._id !== id)))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">الموافقة على الأطباء</h1>
//       <table className="w-full text-left border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">الاسم</th>
//             <th className="p-2">التخصص</th>
//             <th className="p-2">الإجراء</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor) => (
//             <tr key={doctor._id}>
//               <td className="p-2 border-t">{doctor.name}</td>
//               <td className="p-2 border-t">{doctor.specialty}</td>
//               <td className="p-2 border-t">
//                 <button
//                   onClick={() => handleApprove(doctor._id)}
//                   className="bg-green-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   موافقة
//                 </button>
//                 <button
//                   onClick={() => handleReject(doctor._id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   رفض
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DoctorApproval;
// src/pages/admin/DoctorApproval.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorApproval = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPendingDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors/pending", {
          withCredentials: true,
        });
        setDoctors(response.data);
      } catch (err) {
        setError("فشل في جلب طلبات الأطباء.",err);
      }
    };
    fetchPendingDoctors();
  }, []);

  const handleAction = async (doctorId, action) => {
    try {
      await axios.post(
        `http://localhost:5000/api/doctors/${action}/${doctorId}`,
        {},
        { withCredentials: true }
      );
      setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
      alert(`تم ${action === "approve" ? "الموافقة" : "الرفض"} بنجاح`);
    } catch (err) {
      setError("حدث خطأ أثناء معالجة الطلب.",err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-right">طلبات الأطباء المعلقة</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {doctors.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد طلبات معلقة</p>
      ) : (
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div className="text-right">
                <p><strong>الاسم:</strong> {doctor.fullName}</p>
                <p><strong>البريد:</strong> {doctor.email}</p>
                <p><strong>الهاتف:</strong> {doctor.phone}</p>
                <p><strong>رقم الوظيفة:</strong> {doctor.jobNumber}</p>
                <p><strong>التخصص:</strong> {doctor.specialization}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleAction(doctor._id, "approve")}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  موافقة
                </button>
                <button
                  onClick={() => handleAction(doctor._id, "reject")}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  رفض
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorApproval;