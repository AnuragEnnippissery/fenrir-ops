
import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout() {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 text-black">
        <Header />
      </div>

      {/* Page Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;