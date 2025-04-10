

import  { useState } from 'react'
import Sidenav from './_components/Navbars';
import Header from './_components/Headers';



function AdminNavbars() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Header toggleSidebar={toggleSidebar} />
        </>
    )
}

export default AdminNavbars
