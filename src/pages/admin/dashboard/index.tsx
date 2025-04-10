// const AdminDashboardPage = () => {
//     return (
//       <div className="flex">
//         <div className="w-64 bg-gray-800 text-white p-6">
//           {/* Sidebar */}
//           <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
//           <ul>
//             <li className="mb-4"><a href="/admin/dashboard">Dashboard</a></li>
//             <li className="mb-4"><a href="/admin/cohorts">Cohorts</a></li>
//             <li className="mb-4"><a href="/admin/students">Students</a></li>
//             <li className="mb-4"><a href="/admin/exams">Exams</a></li>
//             <li className="mb-4"><a href="/admin/questions">Questions</a></li>
//             <li className="mb-4"><a href="/admin/results">Results</a></li>
//           </ul>
//         </div>

import UserLayout from "../layout"

  
//         <div className="flex-1 p-6">
//           {/* Dashboard Summary Cards */}
//           <div className="grid grid-cols-3 gap-6 mb-6">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="font-semibold">Total Cohorts</h3>
//               <p>20</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="font-semibold">Active Exams</h3>
//               <p>5</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="font-semibold">Number of Students</h3>
//               <p>120</p>
//             </div>
//           </div>
  
//           {/* Performance Overview Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="font-semibold">Performance Overview</h3>
//             {/* Here you can add a chart, such as a bar chart or line chart */}
//             <div className="bg-gray-300 h-64 mt-4">[Chart Goes Here]</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AdminDashboardPage;
  



function Dashboard() {
  return (
    <UserLayout>
      <div>Dashboard</div>
    </UserLayout>
  )
}

export default Dashboard