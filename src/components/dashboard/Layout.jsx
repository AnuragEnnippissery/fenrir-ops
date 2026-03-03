import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="<div className=flex min-h-screen overflow-hidden bg-gray-100">

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-64 bg-gray-200
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Header />
      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 p-6 bg-gray-100 overflow-x-auto">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;