import { useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa";
import { Avatar } from "@/components/ui/avatar";
import SearchModal from "./SearchModal";

// Route title mapping
const routeTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/cohorts": "Cohorts",
  "/admin/students": "Students",
  "/admin/questions": "Questions",
  "/admin/results": "Results",
  "/admin/settings": "Settings",
};

const Header = ({ IsNotfullNav, toggleSidebar }: any) => {
  const location = useLocation();
  const { pathname } = location;

  // Find the title from the route mapping
  const getTitle = (path: string) => {
    // Exact match
    if (routeTitles[path]) return routeTitles[path];
    // Partial match fallback (in case of dynamic routes in future)
    const matched = Object.keys(routeTitles).find(key => path.startsWith(key));
    return matched ? routeTitles[matched] : "Page";
  };

  return (
    <div
      className={`fixed top-0 left-0 ${IsNotfullNav ? "" : "md:left-64"} right-0 py-3 bg-blue-10 items-center lg:px-20 px-3 shadow-md flex justify-between z-50`}
    >
      <button onClick={toggleSidebar} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {/* Left side: Page Title */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800">{getTitle(pathname)}</h3>
      </div>

      {/* Middle: Search */}
      {/* <SearchModal /> */}

      {/* Right side: Avatar Dropdown */}
      <div className="flex items-center justify-between gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <FaUserCircle size={30} color="#4B5563" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
