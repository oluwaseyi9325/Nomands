import { useState } from 'react'
import Sidenav from './_components/Navbars';
import Header from './_components/Headers';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <Header toggleSidebar={toggleSidebar} />
                <div className="flex-1 ml-0 md:ml-64 pt-16 transition-all">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout
