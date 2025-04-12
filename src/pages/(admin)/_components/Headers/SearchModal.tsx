import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"; // ShadCN dialog/modal components
import { CiSearch } from "react-icons/ci";

// Dummy student data with more details
const students = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Student" },
    { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", role: "Student" },
    { id: 4, name: "Emily Davis", email: "emily.davis@example.com", role: "Student" },
    { id: 5, name: "Chris Lee", email: "chris.lee@example.com", role: "Student" },
];

const SearchModal = () => {
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage modal visibility

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    // Filter students based on search query
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex justify-center items-center">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DialogTrigger>
                    {/* Search Input in the main layout */}
                    <div
                        className="border p-2 rounded-lg flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsSearchOpen(true)} // Open the modal on click
                    >
                        <CiSearch size={20} color="#A1A1A1" />
                        <input
                            className="border-0 border-transparent focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                            placeholder="Search for students..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </DialogTrigger>

                <DialogContent>
                    {/* Modal content */}
                    <div className="p-4">
                        {/* Input field inside the modal for searching */}
                        <input
                            className="w-full border p-2 rounded-lg mb-4"
                            placeholder="Search for students..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <h3 className="text-lg font-semibold">Search Results</h3>
                        {/* Display search results */}
                        <ul className="mt-2">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <li key={student.id} className="py-2 border-b">
                                        <div className="font-medium">{student.name}</div>
                                        <div className="text-sm text-gray-500">{student.email}</div>
                                        <div className="text-sm text-gray-600">{student.role}</div>
                                    </li>
                                ))
                            ) : (
                                <li>No students found</li>
                            )}
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SearchModal;
