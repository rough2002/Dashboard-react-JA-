import UserAvatar from "./UserAvatar"; // Adjust the import path
import { Menu } from "lucide-react"; // Adjust based on how you're importing icons

const Header = ({ isDesktop, toggleSidebar }) => {
  return (
    <header
      className={`flex items-center pt-8 px-6 bg-gray-200 ${isDesktop ? "justify-end" : "justify-between"}`}
    >
      {!isDesktop && (
        <button
          onClick={toggleSidebar}
          className="bg-white h-12 w-12 flex justify-center items-center rounded"
        >
          <Menu className="my-icon" />
        </button>
      )}
      <UserAvatar />
    </header>
  );
};

export default Header;
