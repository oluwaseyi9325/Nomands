import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';  // Assuming you have a custom Avatar component
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Pencil, Trash2, User, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentListPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      avatar: 'path/to/avatar.jpg', // Example avatar path
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      avatar: 'path/to/avatar2.jpg', // Example avatar path
      status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        avatar: 'path/to/avatar2.jpg', // Example avatar path
        status: 'Suspended',
      },
  ]);

  const handleSuspend = (id: number) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'Active' ? 'Suspended' : 'Active' }
          : student
      )
    );
  };

  const handleViewDetails = (student: any) => {
    // Open modal to view details
    console.log(student);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Avatar</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-2">
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" onClick={() => handleViewDetails(student)}>
                        <User className="w-4 h-4 mr-1" /> View
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Student Details</DialogTitle>
                      </DialogHeader>
                      <div>
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>Email:</strong> {student.email}</p>
                        <p><strong>Phone:</strong> {student.phone}</p>
                        <p><strong>Status:</strong> {student.status}</p>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => handleSuspend(student.id)}>
                          {student.status === 'Active' ? (
                            <>
                              <XCircle className="w-4 h-4 mr-2" /> Suspend
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" /> Activate
                            </>
                          )}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleSuspend(student.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListPage;
