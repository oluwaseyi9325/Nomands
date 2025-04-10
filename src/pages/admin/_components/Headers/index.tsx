
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { useState } from "react";


const Header = ({ toggleSidebar, IsNotfullNav }: any) => {
// State to track dropdown status
    const [searchQuery, setSearchQuery] = useState(""); // State to track the search input value



    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: any) => {
        event.preventDefault();
        // Add your search logic here. For now, we'll just log the search query.
        console.log("Search submitted for:", searchQuery);
        // Example: Perform search and update searchResults
        // setSearchResults(performSearch(searchQuery));
    };
  

    return (
        <div
            className={`fixed top-0 left-0 ${IsNotfullNav ? "" : "md:left-64"} right-0 py-3 bg-[green] items-center lg:px-20 px-3 shadow-md flex justify-between z-50`}
        >
            <button onClick={toggleSidebar} className="md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
            {/* {IsNotfullNav && (
                <div className="lg:flex items-center hidden">
                    <Image
                        width={150}
                        src={require("../../../assets/logo.png")}
                        alt="Logo"
                    />
                </div>
            )} */}

            {/* <Link href={"/"} className="lg:flex items-center">
                <Image
                    width={150}
                    src={require("../../../assets/logo.png")}
                    alt="Logo"
                />
            </Link> */}

            {/* Search Section */}
            <div className="border p-2 rounded-lg lg:flex gap-2 items-center hidden">
                <CiSearch size={20} color="#A1A1A1" />
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                        className="border-0 border-transparent focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className="flex items-center justify-between gap-2">
                
                <a href="/carts" className="relative inline-block">
                    <span className="absolute top-0 right-0 bg-[#FF3231] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform -translate-y-1/2 translate-x-1/2">
                        45
                    </span>
                    <MdOutlineShoppingCart color="#777777" size={30} />
                </a>
            </div>
        </div>
    );
};

export default Header;
