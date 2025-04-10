import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { FaUserGraduate, FaLayerGroup, FaRegClipboard, FaClipboardCheck } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import UserLayout from "../Layoutt";

const performanceData = [
  { date: 'Fri', students: 78, exams: 18 },
  { date: 'Sat', students: 78, exams: 20 },
  { date: 'Sun', students: 54, exams: 14 },
  { date: 'Mon', students: 53, exams: 6 },
  { date: 'Tue', students: 65, exams: 13 },
  { date: 'Wed', students: 55, exams: 12 },
  { date: 'Thu', students: 38, exams: 7 },
];

function Dashboard() {
  return (
    <UserLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Nomands Admin Dashboard</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your application effectively!</p>
          </div>
          <Button className="bg-[#009033] text-white hover:bg-[#007a2b]">+ Create Cohort</Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <SummaryCard icon={<FaUserGraduate />} label="Total Students" value="1,256" color="bg-blue-100" />
          <SummaryCard icon={<FaLayerGroup />} label="Total Cohorts" value="34" color="bg-green-100" />
          <SummaryCard icon={<FaRegClipboard />} label="Active Exams" value="12" color="bg-yellow-100" />
          <SummaryCard icon={<FaClipboardCheck />} label="Completed Exams" value="85" color="bg-purple-100" />
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Weekly Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="students" stroke="#009033" strokeWidth={2} />
              <Line type="monotone" dataKey="exams" stroke="#FF9F40" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </UserLayout>
  );
}

const SummaryCard = ({ icon, label, value, color }: any) => (
  <div className={`rounded-lg shadow p-4 flex items-center gap-4 ${color}`}>
    <div className="text-3xl text-gray-700">{icon}</div>
    <div>
      <h4 className="text-sm font-semibold text-gray-600">{label}</h4>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

export default Dashboard;
