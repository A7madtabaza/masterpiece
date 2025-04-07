import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCart, Search, Filter, X } from "lucide-react";


const Pharmacy = ({ addToCart }) => {
  const [medicines, setMedicines] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/medicines")
      .then((response) => setMedicines(response.data))
      .catch((error) => console.error("خطأ في جلب الأدوية:", error));
  }, []);

  const categories = ["all", ...new Set(medicines.map((med) => med.category))];

  const filteredMedications = medicines
    .filter((med) =>
      activeCategory === "all" ? true : med.category === activeCategory
    )
    .filter((med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);
  const paginatedMedications = filteredMedications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openProductPopup = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const closeProductPopup = () => {
    setSelectedMedicine(null);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
  
      <div className="min-h-screen bg-[#F5F6F5] font-sans" dir="rtl">
        <div className="container mx-auto px-4 pt-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-r-4 border-[#00A896] transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="relative w-full sm:w-2/3">
                <input
                  type="text"
                  placeholder="ابحث عن الأدوية بالاسم..."
                  className="w-full bg-gray-50 rounded-md py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#00A896] text-[#0A4C6A] text-sm shadow-sm transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <Search
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0A4C6A] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  size={20}
                />
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Filter size={20} className="text-[#0A4C6A] opacity-70" />
                <span className="text-sm text-[#0A4C6A] font-medium">
                  التصنيف:
                </span>
                <select
                  className="bg-gray-50 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896] border-none text-[#0A4C6A] shadow-sm"
                  value={activeCategory}
                  onChange={(e) => {
                    setActiveCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "جميع الأدوية" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <main>
            <h2 className="text-3xl font-bold text-[#0A4C6A] mb-8 text-center relative">
              {activeCategory === "all"
                ? "المنتجات المتوفرة"
                : `تصنيف: ${activeCategory}`}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#00A896] rounded-full opacity-80"></span>
            </h2>

            {paginatedMedications.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-700 text-lg font-medium">
                  لا توجد أدوية متاحة حاليًا
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  حاول تعديل البحث أو اختيار تصنيف آخر
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedMedications.map((med) => (
                  <div
                    key={med._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openProductPopup(med)}
                  >
                    {med.discount && (
                      <div className="absolute top-0 left-0 bg-[#FF6F61] text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
                        خصم
                      </div>
                    )}

                    <div className="relative mb-4">
                      <img
                        src={`http://localhost:5000${med.image}`}
                        alt={med.name}
                        className="w-48 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-[#0A4C6A] mb-2 px-4">
                      {med.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 px-4 line-clamp-2 leading-relaxed">
                      {med.description}
                    </p>
                    <div className="text-[#0A4C6A] font-medium px-4 pb-4">
                      {med.discount ? (
                        <>
                          <span className="line-through text-gray-500 mr-2">
                            {med.price} ريال
                          </span>
                          <span>
                            {(med.price * (1 - med.discount)).toFixed(2)} ريال
                          </span>
                        </>
                      ) : (
                        <span>{med.price} ريال</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="mx-1 px-4 py-2 bg-gray-200 text-[#0A4C6A] rounded-full disabled:opacity-50"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 px-4 py-2 rounded-full ${
                      currentPage === index + 1
                        ? "bg-[#00A896] text-white"
                        : "bg-gray-200 text-[#0A4C6A]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="mx-1 px-4 py-2 bg-gray-200 text-[#0A4C6A] rounded-full disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#0A4C6A]">
                  {selectedMedicine.name}
                </h2>
                <button
                  onClick={closeProductPopup}
                  className="text-gray-500 hover:text-[#FF6F61]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6 flex justify-center">
                <img
                  src={`http://localhost:5000${selectedMedicine.image}`}
                  alt={selectedMedicine.name}
                  className="max-h-64 object-contain"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#0A4C6A] mb-2">
                  الوصف الكامل:
                </h3>
                <p className="text-gray-700">{selectedMedicine.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    التصنيف:
                  </h4>
                  <p className="text-[#0A4C6A]">{selectedMedicine.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">الجرعة:</h4>
                  <p className="text-[#0A4C6A]">
                    {selectedMedicine.dosage || "غير محدد"}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">السعر:</h4>
                  <p className="text-[#0A4C6A] font-bold">
                    {selectedMedicine.discount ? (
                      <>
                        <span className="line-through text-gray-500 mr-2">
                          {selectedMedicine.price} ريال
                        </span>
                        <span>
                          {(
                            selectedMedicine.price *
                            (1 - selectedMedicine.discount)
                          ).toFixed(2)}{" "}
                          ريال
                        </span>
                      </>
                    ) : (
                      <span>{selectedMedicine.price} ريال</span>
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">التوفر:</h4>
                  <p className="text-[#00A896] font-medium">متوفر</p>
                </div>
              </div>

              <button
                className="w-full bg-[#00A896] text-white py-3 rounded-lg hover:bg-[#0A4C6A] transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  addToCart(selectedMedicine);
                  closeProductPopup();
                }}
              >
                <ShoppingCart size={20} />
                أضف إلى السلة
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pharmacy;
