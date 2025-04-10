

import React, { useState } from 'react'
import Sidenav from './_components/Navbars';



function AdminNavbars() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {/* <Header toggleSidebar={toggleSidebar} /> */}
        </>
    )
}

export default AdminNavbars
