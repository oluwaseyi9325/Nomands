// import { Link, useLocation } from 'react-router-dom';
// import { MdExitToApp, MdPeopleAlt } from 'react-icons/md';
// import { CiShoppingBasket } from 'react-icons/ci';
// import { RiDashboardLine } from 'react-icons/ri';
// import { FaPlus, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
// import { BsUiChecks } from 'react-icons/bs';
// import { ScrollArea } from '@/components/ui/scroll-area';

// const Sidenav = ({ isOpen = true, toggleSidebar }: any) => {
//   const { pathname } = useLocation();

//   return (
//     <div
//       className={`fixed flex justify-between flex-col top-0 left-0 h-full w-64 bg-white p-3 shadow-lg transition-transform transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 z-50`}
//     >
//       <div className="flex items-center pt-10 justify-center my-6">
//         <div className="p-4 text-2xl font-extrabold text-[#009033] tracking-wide">
//           Nomands
//         </div>
//       </div>

//       <ScrollArea className="h-full">
//         <nav className="flex flex-col items-center justify-center">
//           <ul className="space-y-4 w-full">
//             <SidebarItem
//               icon={<RiDashboardLine color={getColor(pathname, '/admin')} size={20} />}
//               path="/admin"
//               text="Overview"
//               currentPath={pathname}
//             />
//             <SidebarItem
//               icon={<CiShoppingBasket color={getColor(pathname, '/admin/manage_menus')} size={20} />}
//               path="/admin/manage_menus"
//               text="Product Management"
//               currentPath={pathname}
//             />
//             <SidebarItem
//               icon={<MdPeopleAlt color={getColor(pathname, '/admin/students')} size={20} />}
//               path="/admin/students"
//               text="Students"
//               currentPath={pathname}
//             />
//             <SidebarItem
//               icon={<FaChalkboardTeacher color={getColor(pathname, '/admin/instructors')} size={20} />}
//               path="/admin/instructors"
//               text="Instructors"
//               currentPath={pathname}
//             />
//             <SidebarItem
//               icon={<BsUiChecks color={getColor(pathname, '/admin/courses')} size={20} />}
//               path="/admin/courses"
//               text="Courses"
//               currentPath={pathname}
//             />
//             <SidebarItem
//               icon={<FaChartLine color={getColor(pathname, '/admin/analytics')} size={20} />}
//               path="/admin/analytics"
//               text="Analytics"
//               currentPath={pathname}
//             />
//           </ul>
//         </nav>

//         <div className="bg-[#009033] mt-5 p-4 rounded-lg">
//           <p className="text-white text-[13px] text-center my-2">
//             Please, organize your menus through the button below!
//           </p>
//           <Link to="/vendor/add-product">
//             <button className="bg-white flex items-center p-2 rounded-lg w-full text-[#000000] text-sm gap-2">
//               <FaPlus /> Add Menus
//             </button>
//           </Link>
//         </div>

//         <div className="flex mt-4 justify-center">
//           <SidebarItem
//             icon={<MdExitToApp color="#999999" size={20} />}
//             path="/signin"
//             text="Logout"
//             currentPath={pathname}
//           />
//         </div>
//       </ScrollArea>

//       <button onClick={toggleSidebar} className="absolute top-8 right-4 md:hidden text-black">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// const SidebarItem = ({ icon, text, path, currentPath }: any) => {
//   const isActive = currentPath === path || currentPath.startsWith(path);
//   return (
//     <li
//       className={`flex items-center gap-2 py-2 px-3 rounded-lg w-full transition-colors duration-200 ${
//         isActive ? 'bg-[#009033] text-white' : 'hover:bg-gray-100'
//       }`}
//     >
//       {icon}
//       <Link className={`flex-1 ${isActive ? 'text-white' : 'text-[#999999]'}`} to={path}>
//         {text}
//       </Link>
//     </li>
//   );
// };

// // Helper to conditionally apply icon color
// function getColor(currentPath: string, itemPath: string) {
//   return currentPath.startsWith(itemPath) ? 'white' : '#999999';
// }

// export default Sidenav;



import { Link, useLocation } from 'react-router-dom';
import { MdExitToApp, MdGroups } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { FaRegListAlt, FaChartBar } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { ScrollArea } from '@/components/ui/scroll-area';

const Sidenav = ({ isOpen = true, toggleSidebar }: any) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`fixed flex justify-between flex-col top-0 left-0 h-full w-64 bg-white p-3 shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 z-50`}
    >
      <div className="flex items-center pt-10 justify-center my-6">
        <div className="p-4 text-2xl font-extrabold text-[#009033] tracking-wide">
          Nomands
        </div>
      </div>

      <ScrollArea className="h-full">
        <nav className="flex flex-col items-center justify-center">
          <ul className="space-y-4 w-full">
            <SidebarItem
              icon={<RiDashboardLine color={getColor(pathname, '/admin')} size={20} />}
              path="/admin"
              text="Dashboard"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<MdGroups color={getColor(pathname, '/admin/cohorts')} size={20} />}
              path="/admin/cohorts"
              text="Cohorts"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<FaRegListAlt color={getColor(pathname, '/admin/students')} size={20} />}
              path="/admin/students"
              text="Students"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<HiOutlineClipboardList color={getColor(pathname, '/admin/exams')} size={20} />}
              path="/admin/exams"
              text="Exams"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<BsQuestionSquare color={getColor(pathname, '/admin/questions')} size={20} />}
              path="/admin/questions"
              text="Questions"
              currentPath={pathname}
            />
            <SidebarItem
              icon={<FaChartBar color={getColor(pathname, '/admin/results')} size={20} />}
              path="/admin/results"
              text="Results"
              currentPath={pathname}
            />
          </ul>
        </nav>

        <div className="flex mt-4 justify-center">
          <SidebarItem
            icon={<MdExitToApp color="#999999" size={20} />}
            path="/signin"
            text="Logout"
            currentPath={pathname}
          />
        </div>
      </ScrollArea>

      <button onClick={toggleSidebar} className="absolute top-8 right-4 md:hidden text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, text, path, currentPath }: any) => {
  const isActive = currentPath === path || currentPath.startsWith(path);
  return (
    <li
      className={`flex items-center gap-2 py-2 px-3 rounded-lg w-full transition-colors duration-200 ${
        isActive ? 'bg-[#009033] text-white' : 'hover:bg-gray-100'
      }`}
    >
      {icon}
      <Link className={`flex-1 ${isActive ? 'text-white' : 'text-[#999999]'}`} to={path}>
        {text}
      </Link>
    </li>
  );
};

function getColor(currentPath: string, itemPath: string) {
  return currentPath.startsWith(itemPath) ? 'white' : '#999999';
}

export default Sidenav;
