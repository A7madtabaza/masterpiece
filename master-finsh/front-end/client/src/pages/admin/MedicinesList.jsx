import React, { useState, useEffect } from "react";
import axios from "axios";

function MedicinesList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/medicines")
      .then((response) => setMedicines(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">قائمة الأدوية</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <div
            key={medicine._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={`http://localhost:5000${medicine.image}`}
              alt={medicine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{medicine.name}</h2>
              <p className="text-gray-600">{medicine.description}</p>
              <p className="text-lg font-bold mt-2">{medicine.price} ريال</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicinesList;
