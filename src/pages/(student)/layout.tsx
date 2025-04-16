import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '@/_compoents/Sidebar';
import Header from '@/_compoents/Header';

function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
                <Sidebar role={"user"} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                <Header role={"user"} toggleSidebar={toggleSidebar} />
                <div className="flex-1 ml-0 md:ml-64 pt-16 transition-all">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout
