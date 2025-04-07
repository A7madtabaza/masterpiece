// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import UserNavbar from "./components/UserNavbar";
// import UserFooter from "./components/UserFooter";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import DoctorSidebar from "./components/DoctorSidebar";
// import Login from "./pages/user/Login";
// import Register from "./pages/user/Register";
// import Home from "./pages/user/Home";
// import About from "./pages/user/About";
// import Articles from "./pages/user/Articles";
// import Cart from "./pages/user/Cart";
// import Checkout from "./pages/user/Checkout";
// import Contact from "./pages/user/Contact";
// import FAQ from "./pages/user/FAQ";
// import Pharmacy from "./pages/user/Pharmacy";
// import Statistics from "./pages/admin/Statistics";
// import DoctorApproval from "./pages/admin/DoctorApproval";
// import AddMedicine from "./pages/admin/AddMedicine";
// import MedicinesList from "./pages/admin/MedicinesList";
// import AddArticle from "./pages/admin/AddArticle";
// import ArticlesList from "./pages/admin/ArticlesList";
// import Dashboard from "./pages/doctor/Dashboard";
// import PatientsTable from "./pages/doctor/PatientsTable";
// import AddPatient from "./pages/doctor/AddPatient";

// const AppLayout = ({ children, cartItems }) => {
//   const location = useLocation();
//   const isUserRoute =
//     location.pathname.startsWith("/user") || location.pathname === "/";
//   const isAdminRoute = location.pathname.startsWith("/admin");
//   const isDoctorRoute = location.pathname.startsWith("/doctor");

//   return (
//     <div className="flex flex-col min-h-screen" dir="rtl">
//       {isAdminRoute && <Header />}
//       <div className="flex flex-1">
//         {isAdminRoute && <Sidebar />}
//         {isDoctorRoute && <DoctorSidebar />}
//         {isUserRoute && <UserNavbar cartItems={cartItems} />}
//         <main className={isUserRoute ? "flex-1" : "flex-1 p-6 overflow-auto"}>
//           {children}
//         </main>
//       </div>
//       {isUserRoute && <UserFooter />}
//     </div>
//   );
// };

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item._id === product._id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item._id !== productId)
//     );
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <Router>
//       <AppLayout cartItems={cartItems}>
//         <Routes>
//           {/* مسارات المستخدم */}
//           <Route path="/" element={<Home />} />
//           <Route path="/user/login" element={<Login />} />
//           <Route path="/user/register" element={<Register />} />
//           <Route path="/user/about" element={<About />} />
//           <Route path="/user/articles" element={<Articles />} />
//           <Route
//             path="/user/cart"
//             element={
//               <Cart
//                 cartItems={cartItems}
//                 removeFromCart={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             }
//           />
//           <Route
//             path="/user/checkout"
//             element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
//           />
//           <Route path="/user/contact" element={<Contact />} />
//           <Route path="/user/faq" element={<FAQ />} />
//           <Route
//             path="/user/pharmacy"
//             element={<Pharmacy addToCart={addToCart} />}
//           />

//           {/* مسارات الأدمن */}
//           <Route path="C" element={<Statistics />} />
//           <Route path="/admin/doctor-approval" element={<DoctorApproval />} />
//           <Route path="/admin/add-medicine" element={<AddMedicine />} />
//           <Route path="/admin/medicines" element={<MedicinesList />} />
//           <Route path="/admin/add-article" element={<AddArticle />} />
//           <Route path="/admin/articles" element={<ArticlesList />} />

//           {/* مسارات الطبيب */}
//           <Route path="/doctor/dashboard" element={<Dashboard />} />
//           <Route path="/doctor/patients" element={<PatientsTable />} />
//           <Route path="/doctor/add-patient" element={<AddPatient />} />
//         </Routes>
//       </AppLayout>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// استيراد مكونات المستخدم
import UserNavbar from "./components/UserNavbar";
import UserFooter from "./components/UserFooter";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Articles from "./pages/user/Articles";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import Contact from "./pages/user/Contact";
import FAQ from "./pages/user/FAQ";
import Pharmacy from "./pages/user/Pharmacy";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

// استيراد مكونات الأدمن
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Statistics from "./pages/admin/Statistics";
import DoctorApproval from "./pages/admin/DoctorApproval";
import AddMedicine from "./pages/admin/AddMedicine";
import MedicinesList from "./pages/admin/MedicinesList";
import AddArticle from "./pages/admin/AddArticle";
import ArticlesList from "./pages/admin/ArticlesList";

// استيراد مكونات الطبيب
import DoctorSidebar from "./components/DoctorSidebar";
import Dashboard from "./pages/doctor/Dashboard";
import PatientsTable from "./pages/doctor/PatientsTable";
import AddPatient from "./pages/doctor/AddPatient";

// مكون لحماية المسارات
const ProtectedRoute = ({
  children,
  allowedType,
  userType,
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }
  if (allowedType && userType !== allowedType) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppLayout = ({ children, cartItems, isAuthenticated, userType }) => {
  const location = useLocation();
  const isUserRoute =
    location.pathname.startsWith("/user") || location.pathname === "/";
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isDoctorRoute = location.pathname.startsWith("/doctor");

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      {isAdminRoute && isAuthenticated && userType === "admin" && <Header />}
      <div className="flex flex-1">
        {isAdminRoute && isAuthenticated && userType === "admin" && <Sidebar />}
        {isDoctorRoute && isAuthenticated && userType === "doctor" && (
          <DoctorSidebar />
        )}
        {isUserRoute && <UserNavbar cartItems={cartItems} />}
        <main className={isUserRoute ? "flex-1" : "flex-1 p-6 overflow-auto"}>
          {children}
        </main>
      </div>
      {isUserRoute && <UserFooter />}
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // حالة تسجيل الدخول
  const [userType, setUserType] = useState(null); // نوع المستخدم

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // دالة لتحديث حالة تسجيل الدخول ونوع المستخدم
  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  return (
    <Router>
      <AppLayout
        cartItems={cartItems}
        isAuthenticated={isAuthenticated}
        userType={userType}
      >
        <Routes>
          {/* مسارات المستخدم */}
          <Route path="/" element={<Home />} />
          <Route
            path="/user/login"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/about" element={<About />} />
          <Route path="/user/articles" element={<Articles />} />
          <Route
            path="/user/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route
            path="/user/checkout"
            element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
          />
          <Route path="/user/contact" element={<Contact />} />
          <Route path="/user/faq" element={<FAQ />} />
          <Route
            path="/user/pharmacy"
            element={<Pharmacy addToCart={addToCart} />}
          />

          {/* مسارات الأدمن (محمية) */}
          <Route
            path="/admin/statistics"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <Statistics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/doctor-approval"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <DoctorApproval />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-medicine"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <AddMedicine />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/medicines"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <MedicinesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-article"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <AddArticle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <ProtectedRoute
                allowedType="admin"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <ArticlesList />
              </ProtectedRoute>
            }
          />

          {/* مسارات الطبيب (محمية) */}
          <Route
            path="/doctor/dashboard"
            element={
              <ProtectedRoute
                allowedType="doctor"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/patients"
            element={
              <ProtectedRoute
                allowedType="doctor"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <PatientsTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/add-patient"
            element={
              <ProtectedRoute
                allowedType="doctor"
                userType={userType}
                isAuthenticated={isAuthenticated}
              >
                <AddPatient />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;