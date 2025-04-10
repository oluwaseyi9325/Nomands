
import { useLocation } from "react-router-dom"; // for accessing the active route
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa"; // Avatar icon, you can use your own image if needed
import { Avatar } from "@/components/ui/avatar";
// ShadCN dialog/modal components
import SearchModal from "./SearchModal";

const Header = ({ IsNotfullNav }: any) => {
   
    const location = useLocation(); // Get current route in React




   

    return (
        <div
            className={`fixed top-0 left-0 ${IsNotfullNav ? "" : "md:left-64"} right-0 py-3 bg-[white] items-center lg:px-20 px-3 shadow-md flex justify-between z-50`}
        >
            {/* Active Route Name on the Left */}
            <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">{location.pathname}</h3> {/* Display current route */}
            </div>

            {/* Search Section - Centered */}
            {/* <div className="flex-1 flex justify-center items-center">
                <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                    <DialogTrigger>
                        <div className="border p-2 rounded-lg flex items-center gap-2 cursor-pointer">
                            <CiSearch size={20} color="#A1A1A1" />
                            <input
                                className="border-0 border-transparent focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onClick={() => setIsSearchOpen(true)} 
                            />
                        </div>
                    </DialogTrigger>

                    <DialogContent>
                       
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Search Suggestions</h3>
                            <ul className="mt-2">
                                {searchSuggestions
                                    .filter((suggestion) =>
                                        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((suggestion, index) => (
                                        <li key={index} className="py-2">
                                            {suggestion}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </DialogContent>
                </Dialog>
            </div> */}
            <SearchModal/>

            {/* Profile Avatar with Dropdown */}
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
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
