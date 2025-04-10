import AdminNavbars from "./AdminWrappers";





export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">

            <AdminNavbars />
            {children}
        </div>
    );
}
