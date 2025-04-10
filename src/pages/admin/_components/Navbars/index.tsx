// import { usePathname } from "next/navigation";
// import { MdShoppingCart, MdFavorite, MdRateReview, MdAttachMoney, MdSettings, MdExitToApp } from "react-icons/md";
// import { CiShoppingBasket } from "react-icons/ci";
// import { IoIosStarOutline } from "react-icons/io";
// import { RiDashboardLine } from "react-icons/ri";
// import { MdAddCard } from "react-icons/md";
// import { IoPersonOutline } from "react-icons/io5";
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdPeopleOutline } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { TbBrandBlogger } from "react-icons/tb";


// const Sidenav = ({ isOpen, toggleSidebar }: any) => {
//     const pathName = usePathname();
//     console.log(pathName)
//     return (
//         <div className={`fixed flex justify-between flex-col top-0 left-0 h-full w-64 bg-[white] text-white p-3 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-50`}>

//             <div className="flex items-center lg:pt-1 pt-10 justify-center my-6">
//                 <Link href={"/"}> <Image width={150} src={require("../../../../../assets/logo.png")} alt="Logo" className="" /></Link>
//             </div>
//             <ScrollArea className="h-full ">
//                 <nav className="flex flex-col items-center justify-center">
//                     <ul className="space-y-4">
//                         <SidebarItem icon={<RiDashboardLine color={`${(pathName === "/admin") ? "white" : "#999999"}`} size={20} />} path="/admin" text="Overview" currentPath={pathName} />

//                         <SidebarItem icon={<CiShoppingBasket color={`${(pathName === "/admin/manage_menus") ? "white" : "#999999"}`} size={20} />} path="/admin/manage_menus" text="Product Management" currentPath={pathName} />

//                         <SidebarItem icon={<MdPeopleOutline color={`${(pathName === "/admin/manage_vendors") ? "white" : "#999999"}`} size={20} />} path="/admin/manage_vendors" text="Vendor Management" currentPath={pathName} />

//                         <SidebarItem icon={<IoPersonOutline color={`${(pathName === "/admin/manage_users") ? "white" : "#999999"}`} size={20} />} path="/admin/manage_users" text="User Management" currentPath={pathName} />

//                         <SidebarItem icon={<CiShoppingBasket color={`${(pathName === "/admin/manage_orders") ? "white" : "#999999"}`} size={20} />} path="/admin/manage_orders" text="Order Management" currentPath={pathName} />

//                         <SidebarItem icon={<CiCreditCard1 color={`${(pathName === "/admin/manage_payments") ? "white" : "#999999"}`} size={18} />} path="/admin/manage_payments" text="Payment Management" currentPath={pathName} />
//                         <SidebarItem icon={<TbBrandBlogger color={`${(pathName === "/admin/blog") ? "white" : "#999999"}`} size={18} />} path="/admin/blog" text="Blog Management" currentPath={pathName} />

//                         {/* <SidebarItem icon={<CiCreditCard1 color={`${(pathName === "/admin/orders") ? "white" : "#999999"}`} size={18} />} path="/admin/orders" text="Rider Management" currentPath={pathName} /> */}


//                         {/* <SidebarItem icon={<IoIosStarOutline color={`${(pathName === "/admin/complains") ? "white" : "#999999"}`} size={24} />} path="/admin/complains" text="Complains" currentPath={pathName} /> */}
//                         <SidebarItem icon={<MdSettings color={`${(pathName === "/admin/setting") ? "white" : "#999999"}`} size={20} />} path="/admin/setting" text="Settings" currentPath={pathName} />
//                     </ul>
//                 </nav>


//                 <div className="bg-[#009033] mt-5 p-4 rounded-lg">
//                     <div className="flex items-center gap-3">
//                         <div>
//                             <p className="text-white  text-[13px] text-cente my-2">Please, organize your
//                                 menus through button
//                                 bellow!</p>
//                             <Link href={"/vendor/add-product"}> <button className="bg-white flex items-center  p-2 rounded-lg w-full text-[#000000] text-sm gap-2"><FaPlus />Add Menus</button></Link>
//                         </div>
//                         <div className="flex justify-center"> <Image width={130} src={require("../../../../../assets/addmenu.png")} alt="" /></div>
//                     </div>

//                 </div>
//                 <div className="flex mt-4 justify-center">
//                     <SidebarItem icon={<MdExitToApp color="#999999" size={20} />} path="/signin" text="Logout" currentPath={pathName} />
//                 </div>
//             </ScrollArea>
//             <div>

//                 <button onClick={toggleSidebar} className="absolute  top-8 right-4 md:hidden text-black">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// const SidebarItem = ({ icon, text, path, currentPath }: any) => {
//     const isActive = currentPath === path || currentPath.includes(path);
//     return (
//         <li className={`flex items-center gap-1 py-2 px-3 rounded-lg ${isActive ? 'bg-[#009033] text-white' : 'hover:text-gray-500'}`}>
//             {icon}
//             <Link className={` ${isActive ? 'text-white' : 'text-[#999999]'} hover:text-gray-500`} href={path}>
//                 {text}
//             </Link>
//         </li>
//     );
// };

// export default Sidenav;



import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use React Router
import { MdShoppingCart, MdFavorite, MdRateReview, MdAttachMoney, MdSettings, MdExitToApp } from 'react-icons/md';
import { CiShoppingBasket } from 'react-icons/ci';
import { IoIosStarOutline } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { MdAddCard } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { CiCreditCard1 } from 'react-icons/ci';
import { MdPeopleOutline } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa'; // Assuming ScrollArea is a custom component
import { TbBrandBlogger } from 'react-icons/tb';
import { LazyLoadImage } from 'react-lazy-load-image-component'; // For lazy loading images
import { ScrollArea } from '@/components/ui/scroll-area';

const Sidenav = ({ isOpen=true, toggleSidebar }:any) => {
  const { pathname } = useLocation(); // Use React Router's useLocation hook

  return (
    <div
      className={`fixed flex justify-between flex-col top-0 left-0 h-full w-64 bg-[white] text-white p-3 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-50`}
    >
      <div className="flex items-center lg:pt-1 pt-10 justify-center my-6">
        <Link to="/">
          {/* <LazyLoadImage
            width={150}
            src={require("../../../../../assets/logo.png")}
            alt="Logo"
            className=""
            effect="blur" // This adds a blur effect while the image is loading
          /> */}
        </Link>
      </div>
      <ScrollArea className="h-full">
        <nav className="flex flex-col items-center justify-center">
          <ul className="space-y-4">
            <SidebarItem
              icon={<RiDashboardLine color={`${pathname === '/admin' ? 'white' : '#999999'}`} size={20} />}
              path="/admin"
              text="Overview"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<CiShoppingBasket color={`${pathname === '/admin/manage_menus' ? 'white' : '#999999'}`} size={20} />}
              path="/admin/manage_menus"
              text="Product Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<MdPeopleOutline color={`${pathname === '/admin/manage_vendors' ? 'white' : '#999999'}`} size={20} />}
              path="/admin/manage_vendors"
              text="Vendor Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<IoPersonOutline color={`${pathname === '/admin/manage_users' ? 'white' : '#999999'}`} size={20} />}
              path="/admin/manage_users"
              text="User Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<CiShoppingBasket color={`${pathname === '/admin/manage_orders' ? 'white' : '#999999'}`} size={20} />}
              path="/admin/manage_orders"
              text="Order Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<CiCreditCard1 color={`${pathname === '/admin/manage_payments' ? 'white' : '#999999'}`} size={18} />}
              path="/admin/manage_payments"
              text="Payment Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<TbBrandBlogger color={`${pathname === '/admin/blog' ? 'white' : '#999999'}`} size={18} />}
              path="/admin/blog"
              text="Blog Management"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<MdSettings color={`${pathname === '/admin/setting' ? 'white' : '#999999'}`} size={20} />}
              path="/admin/setting"
              text="Settings"
              currentPath={pathname}
            />
          </ul>
        </nav>

        <div className="bg-[#009033] mt-5 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white text-[13px] text-center my-2">
                Please, organize your menus through the button below!
              </p>
              <Link to="/vendor/add-product">
                <button className="bg-white flex items-center p-2 rounded-lg w-full text-[#000000] text-sm gap-2">
                  <FaPlus /> Add Menus
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              {/* <LazyLoadImage width={130} src={require("../../../../../assets/addmenu.png")} alt="" effect="blur" /> */}
            </div>
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <SidebarItem
            icon={<MdExitToApp color="#999999" size={20} />}
            path="/signin"
            text="Logout"
            currentPath={pathname}
          />
        </div>
      </ScrollArea>

      <div>
        <button onClick={toggleSidebar} className="absolute top-8 right-4 md:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, path, currentPath }:any) => {
  const isActive = currentPath === path || currentPath.includes(path);
  return (
    <li className={`flex items-center gap-1 py-2 px-3 rounded-lg ${isActive ? 'bg-[#009033] text-white' : 'hover:text-gray-500'}`}>
      {icon}
      <Link className={` ${isActive ? 'text-white' : 'text-[#999999]'} hover:text-gray-500`} to={path}>
        {text}
      </Link>
    </li>
  );
};

export default Sidenav;
