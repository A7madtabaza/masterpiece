import React, { useState } from "react";
import { CreditCard, Lock, Check, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, clearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + item.price * (1 - (item.discount || 0)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 15.0;
    return (subtotal + shipping).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق معالجة الدفع الحقيقي
    clearCart(); // تفريغ السلة بعد التأكيد
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-[#F5F6F5] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-2xl font-bold text-[#0A4C6A] mb-4">
            تم تأكيد طلبك بنجاح!
          </h2>
          <p className="text-gray-600 mb-6">
            سنقوم بإرسال تفاصيل الشحن إلى بريدك الإلكتروني خلال دقائق
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-500">المبلغ المدفوع</p>
            <p className="font-medium text-[#0A4C6A]">{calculateTotal()} ر.س</p>
          </div>
          <Link
            to="/pharmacy"
            className="inline-block bg-[#00A896] text-white px-6 py-3 rounded-lg hover:bg-[#0A4C6A] transition-colors w-full"
          >
            العودة إلى المتجر
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F6F5] font-sans" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* تفاصيل الطلب */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0A4C6A] mb-6 border-b pb-3">
                تفاصيل الدفع
              </h2>

              {/* طرق الدفع */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#0A4C6A] mb-4">
                  اختر طريقة الدفع
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("credit")}
                    className={`p-4 border rounded-xl flex items-center justify-center transition-all ${
                      paymentMethod === "credit"
                        ? "border-[#00A896] bg-[#F0F9F8]"
                        : "border-gray-200 hover:border-[#00A896]"
                    }`}
                  >
                    <CreditCard className="mr-2 text-[#0A4C6A]" />
                    <span>بطاقة ائتمان</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 border rounded-xl flex items-center justify-center transition-all ${
                      paymentMethod === "paypal"
                        ? "border-[#00A896] bg-[#F0F9F8]"
                        : "border-gray-200 hover:border-[#00A896]"
                    }`}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2504/2504801.png"
                      alt="PayPal"
                      className="h-6 mr-2"
                    />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* نموذج الدفع */}
              {paymentMethod === "credit" && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0A4C6A] mb-1">
                        اسم صاحب البطاقة
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00A896] border border-gray-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0A4C6A] mb-1">
                        رقم البطاقة
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value.length <= 16) {
                              const formattedValue = value.replace(
                                /(\d{4})(?=\d)/g,
                                "$1 "
                              );
                              handleInputChange({
                                target: {
                                  name: "cardNumber",
                                  value: formattedValue,
                                },
                              });
                            }
                          }}
                          className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00A896] border border-gray-200"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <CreditCard className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0A4C6A] mb-1">
                          تاريخ الانتهاء
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 2) {
                              value =
                                value.substring(0, 2) +
                                "/" +
                                value.substring(2);
                            }
                            if (value.length <= 5) {
                              handleInputChange({
                                target: {
                                  name: "expiry",
                                  value: value.substring(0, 5),
                                },
                              });
                            }
                          }}
                          className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00A896] border border-gray-200"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0A4C6A] mb-1">
                          رمز الأمان (CVV)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              if (value.length <= 4) {
                                handleInputChange({
                                  target: {
                                    name: "cvv",
                                    value: value,
                                  },
                                });
                              }
                            }}
                            className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00A896] border border-gray-200"
                            maxLength={4}
                            required
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Lock className="text-gray-400" size={16} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0A4C6A] mb-1">
                        عنوان الشحن
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#00A896] border border-gray-200"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod === "paypal" && (
                <div className="text-center py-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504801.png"
                    alt="PayPal"
                    className="h-16 mx-auto mb-6"
                  />
                  <p className="text-gray-600 mb-6">
                    سيتم توجيهك إلى موقع PayPal لإتمام عملية الدفع
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#003087] text-white px-6 py-3 rounded-lg hover:bg-[#00256E] transition-colors"
                  >
                    الدفع عبر PayPal
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ملخص الطلب */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#0A4C6A] mb-6 border-b pb-3">
                ملخص الطلب
              </h2>

              {/* المنتجات */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-start"
                  >
                    <div className="flex items-center">
                      <img
                        src={`http://localhost:5000${item.image}`}
                        alt={item.name}
                        className="w-12 h-12 object-contain mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-[#0A4C6A]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {item.quantity} ×{" "}
                          {(item.price * (1 - (item.discount || 0))).toFixed(2)}{" "}
                          ر.س
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">
                      {(
                        item.price *
                        (1 - (item.discount || 0)) *
                        item.quantity
                      ).toFixed(2)}{" "}
                      ر.س
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي</span>
                  <span className="font-medium">{calculateSubtotal()} ر.س</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">التوصيل</span>
                  <span className="font-medium">15.00 ر.س</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-lg text-[#0A4C6A]">
                    الإجمالي
                  </span>
                  <span className="font-bold text-lg text-[#00A896]">
                    {calculateTotal()} ر.س
                  </span>
                </div>
              </div>

              <div className="bg-[#F0F9F8] p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="bg-[#00A896] text-white p-1 rounded-full mr-3">
                    <Lock size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-[#0A4C6A] font-medium">
                      دفع آمن ومشفّر
                    </p>
                    <p className="text-xs text-gray-500">
                      جميع بياناتك محمية بتقنيات التشفير الحديثة
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#00A896] text-white py-4 rounded-xl hover:bg-[#0A4C6A] transition-colors flex items-center justify-center gap-2 text-lg font-medium shadow-md"
              >
                <ShoppingCart className="mr-2" />
                تأكيد الطلب والدفع
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                بالنقر على الزر أعلاه، فإنك توافق على شروط وأحكام المتجر
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
