import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CollapsibleSidebar from "./CollapsibleSidebar";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const checkScreenSize = () => {
    const isCurrentDesktop = window.innerWidth >= 1024;
    setIsDesktop(isCurrentDesktop);
    if (isCurrentDesktop) {
      setSidebarOpen(false); // Close sidebar automatically if on desktop
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize);

    // on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {isDesktop ? (
        <Sidebar />
      ) : (
        <CollapsibleSidebar
          isDesktop={isDesktop}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isDesktop={isDesktop} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
