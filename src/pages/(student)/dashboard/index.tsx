'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, User, LineChart, GraduationCap } from 'lucide-react';
import { format } from 'date-fns';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SpinnerOverlay from '@/_compoents/SpinnerOverlay';

const performanceData = [
  { week: 'Week 1', score: 75 },
  { week: 'Week 2', score: 82 },
  { week: 'Week 3', score: 78 },
  { week: 'Week 4', score: 90 },
];

const dummyCohorts = [
  {
    id: 'FE-APR25',
    name: 'Frontend Engineering - April 2025',
    startDate: '2025-04-01',
    mentor: 'Mr. Adewale',
  },
  {
    id: 'BE-MAY25',
    name: 'Backend Engineering - May 2025',
    startDate: '2025-05-05',
    mentor: 'Mrs. Kemi',
  },
  {
    id: 'DS-JUN25',
    name: 'Data Science - June 2025',
    startDate: '2025-06-10',
    mentor: 'Dr. Smith',
  },
];

const StudentDashboardPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    id: 'Mands001',
    name: 'Seyi Johnson',
    email: 'seyi@example.com',
    phone: '08123456789',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    cohorts: dummyCohorts,
  });

  const [newCohort, setNewCohort] = useState({
    id: '',
    name: '',
    startDate: '',
    mentor: '',
  });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated!');
  };

  const handleCohortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCohort({ ...newCohort, [e.target.name]: e.target.value });
  };

  const handleRegisterCohort = () => {
    setStudent((prev) => ({
      ...prev,
      cohorts: [...prev.cohorts, newCohort],
    }));
    setNewCohort({ id: '', name: '', startDate: '', mentor: '' });
    alert('New cohort registered!');
  };

  return (
    <>
      <SpinnerOverlay isLoading={false} />
    <div className="px-4 md:px-6 py-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="text-2xl md:text-3xl font-bold text-gray-800">
        Hi {student.name.split(' ')[0]}, How are you doing? 👋
        <p className="text-base text-gray-600 mt-1">
          We’re glad to have you back today!
        </p>
      </div>

      {/* Student Profile */}
      <Card className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-md rounded-xl bg-white">
        <Avatar className="w-20 h-20 ring-2 ring-blue-500">
          <AvatarImage src={student.profileImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                {student.name}
              </h2>
              <span className="inline-block text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full mt-1">
                Student
              </span>
            </div>
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          </div>

          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>Name</Label>
                <Input name="name" value={student.name} onChange={handleEditChange} />
              </div>
              <div>
                <Label>Email</Label>
                <Input name="email" value={student.email} onChange={handleEditChange} />
              </div>
              <div>
                <Label>Phone</Label>
                <Input name="phone" value={student.phone} onChange={handleEditChange} />
              </div>
              <div className="md:col-span-2">
                <Button onClick={handleSave} className="w-full md:w-auto">
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-gray-600 mt-2 space-y-1">
              <p>
                <Mail className="inline w-4 h-4 mr-1" />
                {student.email}
              </p>
              <p>
                <Phone className="inline w-4 h-4 mr-1" />
                {student.phone}
              </p>
              <p>
                <span className="font-medium">Student ID:</span> {student.id}
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Latest Cohorts */}
      <Card className="p-4 md:p-6 shadow-md rounded-xl bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Your Cohorts
          </h3>
          <Button variant="link" className="text-sm text-blue-600 underline p-0 h-auto">
            View All Cohorts
          </Button>
        </div>

        <div className="space-y-4">
          {student.cohorts.slice(0, 2).map((cohort) => (
            <div key={cohort.id} className="border p-4 rounded-lg bg-gray-50">
              <p>
                <strong>Cohort ID:</strong> {cohort.id}
              </p>
              <p>
                <strong>Name:</strong> {cohort.name}
              </p>
              <p>
                <strong>Start Date:</strong> {format(new Date(cohort.startDate), 'MMM d, yyyy')}
              </p>
              <p>
                <strong>Mentor:</strong> {cohort.mentor}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Chart */}
      <Card className="p-4 md:p-6 shadow-md rounded-xl bg-white">
        <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
          <LineChart className="w-5 h-5" />
          Performance Overview
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <ReLineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
          </ReLineChart>
        </ResponsiveContainer>
      </Card>

      {/* Register Cohort Trigger & Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full sm:w-auto">Register for New Cohort</Button>
        </DialogTrigger>
        <DialogContent className="p-6 max-w-md w-full">
          <h3 className="text-lg font-semibold mb-4">Register New Cohort</h3>
          <div className="space-y-4">
            <div>
              <Label>Cohort ID</Label>
              <Input name="id" value={newCohort.id} onChange={handleCohortChange} />
            </div>
            <div>
              <Label>Cohort Name</Label>
              <Input name="name" value={newCohort.name} onChange={handleCohortChange} />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input name="startDate" type="date" value={newCohort.startDate} onChange={handleCohortChange} />
            </div>
            <div>
              <Label>Mentor</Label>
              <Input name="mentor" value={newCohort.mentor} onChange={handleCohortChange} />
            </div>
            <Button onClick={handleRegisterCohort} className="w-full mt-4">
              Register
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </>
  );
};

export default StudentDashboardPage;
