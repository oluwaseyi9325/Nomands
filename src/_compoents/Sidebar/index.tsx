import { Link, useLocation } from 'react-router-dom';
import { MdExitToApp, MdGroups, MdAdd, MdSettings } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { FaRegListAlt, FaChartBar, FaUserGraduate } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs';
import { ScrollArea } from '@/components/ui/scroll-area';

const Sidebar = ({ isOpen, role }: any) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`fixed flex flex-col bg-white top-0 left-0 h-full w-64 bg-blue-10 p-3 shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 z-50`}
    >
      {/* Brand */}
      <div className="flex i pt-20 lg:pt-10 justify-center mb-10">
      <img src='/public/logo.png' className='w-[140px] rounded bg-white p-2' alt='logo image'/>
      </div>

      {/* Scrollable Navigation */}
      <ScrollArea className="flex-1">
        {role === "admin" ? (
          <>
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

            {/* Create Cohort CTA */}
            <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
              <p className="text-sm text-blue-700 font-medium mb-2">
                You can create a new cohort
              </p>
              <Link
                to="/admin/create_cohort"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <MdAdd size={18} />
                Create Cohort
              </Link>
            </div>
          </>
        ) : (
          <>
            <nav className="flex flex-col items-center justify-center">
              <ul className="space-y-4 w-full">
                <SidebarItem
                  icon={<RiDashboardLine color={getColor(pathname, '/student')} size={20} />}
                  path="/student"
                  text="Dashboard"
                  currentPath={pathname}
                />
                <SidebarItem
                  icon={<FaUserGraduate color={getColor(pathname, '/student/my-cohort')} size={20} />}
                  path="/student/mycohort"
                  text="My Cohort"
                  currentPath={pathname}
                />
                <SidebarItem
                  icon={<MdSettings color={getColor(pathname, '/student/settings')} size={20} />}
                  path="/student/settings"
                  text="Settings"
                  currentPath={pathname}
                />
              </ul>
            </nav>
          </>
        )}
      </ScrollArea>

      {/* Logout */}
      <div className="mt-auto mb-4">
        <SidebarItem
          icon={<MdExitToApp color="#ef4444" size={20} />}
          path="/signin"
          text="Logout"
          currentPath={pathname}
          customStyle="bg-red-100 text-red-600 hover:bg-red-200"
        />
      </div>

      {/* Close Button (Mobile) */}
      {/* <button onClick={toggleSidebar} className="absolute top-8 right-4 md:hidden text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button> */}
    </div>
  );
};

const SidebarItem = ({ icon, text, path, currentPath, customStyle = '' }: any) => {
  const isExactDashboard = path === "/admin" && currentPath === "/admin";
  const isExactStudentDashboard = path === "/student" && currentPath === "/student";
  const isOtherMatch = path !== "/admin" && path !== "/student" && currentPath.startsWith(path);
  const isActive = isExactDashboard || isExactStudentDashboard || isOtherMatch;

  return (
    <li
      className={`flex items-center gap-2 py-2 px-3 rounded-lg w-full transition-colors duration-200 ${
        isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
      } ${customStyle}`}
    >
      {icon}
      <Link className={`flex-1 ${isActive ? 'text-white' : 'text-[#999999]'}`} to={path}>
        {text}
      </Link>
    </li>
  );
};

function getColor(currentPath: string, itemPath: string) {
  const isDashboard = (itemPath === "/admin" && currentPath === "/admin") || (itemPath === "/student" && currentPath === "/student");
  return isDashboard ? 'white' : currentPath.startsWith(itemPath) && itemPath !== "/admin" && itemPath !== "/student" ? 'white' : '#999999';
}

export default Sidebar;
