import React from "react";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + item.price * (1 - (item.discount || 0)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F5] font-sans" dir="rtl">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A4C6A]">سلة التسوق</h1>
          <Link
            to="/pharmacy"
            className="text-[#00A896] hover:text-[#0A4C6A] transition-colors"
          >
            العودة إلى المتجر
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">
              سلة التسوق فارغة
            </h2>
            <p className="text-gray-500 mb-4">
              لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
            </p>
            <Link
              to="/pharmacy"
              className="inline-block bg-[#00A896] text-white px-6 py-2 rounded-lg hover:bg-[#0A4C6A] transition-colors"
            >
              تصفح المنتجات
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-[#0A4C6A]">
                  <div className="col-span-5">المنتج</div>
                  <div className="col-span-2 text-center">السعر</div>
                  <div className="col-span-3 text-center">الكمية</div>
                  <div className="col-span-2 text-center">المجموع</div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-12 p-4 border-b border-gray-100 items-center"
                  >
                    <div className="col-span-12 md:col-span-5 flex items-center">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-gray-400 hover:text-[#FF6F61] mr-2"
                      >
                        <X size={18} />
                      </button>
                      <img
                        src={`http://localhost:5000${item.image}`}
                        alt={item.name}
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-[#0A4C6A]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>

                    <div className="col-span-4 md:col-span-2 text-center mt-4 md:mt-0">
                      <span className="font-medium text-[#0A4C6A]">
                        {(item.price * (1 - (item.discount || 0))).toFixed(2)}{" "}
                        ر.س
                      </span>
                      {item.discount && (
                        <span className="block text-xs text-gray-400 line-through">
                          {item.price} ر.س
                        </span>
                      )}
                    </div>

                    <div className="col-span-4 md:col-span-3 flex justify-center mt-4 md:mt-0">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.quantity + 1)
                          }
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-4 md:col-span-2 text-center mt-4 md:mt-0">
                      <span className="font-medium text-[#0A4C6A]">
                        {(
                          item.price *
                          (1 - (item.discount || 0)) *
                          item.quantity
                        ).toFixed(2)}{" "}
                        ر.س
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#0A4C6A] mb-4">
                  ملخص الطلب
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي</span>
                    <span className="font-medium">{calculateTotal()} ر.س</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التوصيل</span>
                    <span className="font-medium">15.00 ر.س</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-[#0A4C6A]">الإجمالي</span>
                    <span className="font-bold text-[#00A896]">
                      {(parseFloat(calculateTotal()) + 15).toFixed(2)} ر.س
                    </span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="w-full bg-[#00A896] text-white py-3 rounded-lg hover:bg-[#0A4C6A] transition-colors block text-center"
                >
                  إتمام الشراء
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
