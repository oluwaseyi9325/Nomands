const StudentDashboardPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Student Dashboard</h2>
          {/* Upcoming Exams */}
          <h3 className="text-xl font-semibold mb-4">Upcoming Exams</h3>
          {/* List of upcoming exams with countdown */}
          <ul>
            <li>Math Exam - <span className="text-red-600">Tomorrow</span></li>
            {/* More exams */}
          </ul>
  
          {/* Stats */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Stats</h3>
            <p>Average Score: 85%</p>
            <p>Total Exams: 5</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default StudentDashboardPage;
  