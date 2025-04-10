import AdminNavbars from "./AdminWrappers";





export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">

            <AdminNavbars />
           <div className="flex-1 ml-0 md:ml-64 pt-16 transition-all">
           {children}</div>
            
        </div>
    );
}
