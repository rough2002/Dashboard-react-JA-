import { NavLink } from "react-router-dom";
import { navlinks } from "../data/navlinks";

const CollapsibleSidebar = ({ isDesktop, sidebarOpen, toggleSidebar }) => {
  // Closes sidebar
  const closeSidebar = () => {
    toggleSidebar(); // Call the parent function to toggle
  };

  return (
    <>
      <aside
        className={`bg-white pt-8 pl-8 h-full transition-transform duration-300 ease-in-out z-50 w-1/3
          ${isDesktop ? "w-64" : "fixed h-full"} 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-6 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-lg mr-2"></div>
            <span className="text-xl font-bold">AI CV</span>
          </div>
          {!isDesktop && (
            <button
              onClick={toggleSidebar}
              className="flex justify-center items-center lg:hidden"
            >
              <span className="w-6 h-6 hover:bg-gray-200 text-black font-medium rounded">
                ✕
              </span>
            </button>
          )}
        </div>
        <nav className="space-y-8 w-full">
          {navlinks.map((navlink) => {
            const IconComponent = navlink.icon; // Get the icon component
            return (
              <NavLink
                key={navlink.label}
                to={navlink.slug}
                className="flex items-center space-x-6 py-2 rounded font-medium text-gray-700 hover:text-blue-500"
                onClick={() => !isDesktop && toggleSidebar()}
              >
                <IconComponent className="w-6 h-6" />
                <span>{navlink.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
      {!isDesktop && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Overlay when sidebar is open on mobile */}
      {!isDesktop && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default CollapsibleSidebar;
