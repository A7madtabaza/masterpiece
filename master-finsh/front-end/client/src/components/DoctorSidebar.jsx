import React from "react";
import { HomeIcon, UsersIcon, UserPlusIcon, LogOutIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DoctorSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <HomeIcon size={20} />,
      path: "/doctor/dashboard",
    },
    {
      title: "Patients",
      icon: <UsersIcon size={20} />,
      path: "/doctor/patients",
    },
    {
      title: "Add Patient",
      icon: <UserPlusIcon size={20} />,
      path: "/doctor/add-patient",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="h-screen w-64 bg-[#0A4C6A] text-white p-5 fixed left-0 flex flex-col border-r border-[#00A896]">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold">MediCare</h1>
        <p className="text-[#00A896] mt-2">Doctor Portal</p>
      </div>

      <div className="flex flex-col flex-grow">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-[#00A896] text-white shadow-md"
                  : "hover:bg-[#0a4c6a90]"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FF6F61] transition-colors"
        >
          <LogOutIcon size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorSidebar;
