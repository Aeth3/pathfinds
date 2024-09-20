import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex items-center bg-gray-100">
      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar}/>
      ) : (
        <button onClick={() => setShowSidebar((show) => !show)}>
          <IoMenu />
        </button>
      )}
      <Outlet />
    </div>
  );
}

export default AppLayout;
