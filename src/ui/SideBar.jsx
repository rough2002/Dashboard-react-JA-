import { navlinks } from "../data/navlinks";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bbg-gray-0 pt-8 pl-8 border-r bg-white grid-row-1 md:block flex flex-col gap-8 w-[20rem] h-full">
      <div className="flex items-center mb-14">
        <div className="w-8 h-8 bg-blue-500 rounded-lg mr-2"></div>
        <span className="text-xl font-bold">AI CV</span>
      </div>
      <nav className="space-y-8 w-full">
        {navlinks.map((navlink) => {
          const IconComponent = navlink.icon; // Get the icon component
          return (
            <NavLink
              key={navlink.label}
              to={navlink.slug}
              className={({ isActive }) =>
                `flex items-center space-x-6 py-2 rounded font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-r-8 border-blue-600" : "text-gray-700"}`
              }
            >
              <IconComponent className="w-6 h-6" />
              <span>{navlink.label}</span>
            </NavLink>
          );
        })}
      </nav>
      {/* <div className="mt-auto pt-4">
      <NavItem icon={<LogOut className="w-5 h-5" />} label="Sign Out" />
    </div> */}
    </aside>
  );
};

export default Sidebar;
