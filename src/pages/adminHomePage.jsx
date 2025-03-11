import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage";


export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="bg-blue-600 w-[20%] h-screen flex flex-col items-center py-8 shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col space-y-4 w-full">
          <Link
            className="flex items-center space-x-3 text-white py-2 px-4 w-full hover:bg-blue-500 transition rounded-md"
            to="/admin/dashboard"
          >
            <BsGraphUp className="text-xl" />
            <span>Dashboard</span>
          </Link>

          <Link
            className="flex items-center space-x-3 text-white py-2 px-4 w-full hover:bg-blue-500 transition rounded-md"
            to="/admin/products"
          >
            <FaBox className="text-xl" />
            <span>Products</span>
          </Link>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] h-screen">
        <Routes>
          {/* Corrected paths (relative to /admin) */}
          <Route path="dashboard" element={<h1 className="text-3xl font-semibold">Dashboard</h1>} />
          <Route path="products" element={<AdminProductPage/>} />

          {/* Default Home Page (when no sub-route is selected) */}
          <Route path="*" element={
           <h1>404 not found the admin page</h1>
          } />
        </Routes>
      </div>
    </div>
  );
}
