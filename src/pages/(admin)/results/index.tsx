import { FaTools } from "react-icons/fa";

function ExamsResults() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <FaTools size={50} className="text-blue-600 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Exam Results Page</h2>
      <p className="text-gray-500 mb-6">
        We’re currently working on this page. Check back soon for updates!
      </p>
      <div className="animate-pulse w-48 h-4 bg-gray-200 rounded mb-2" />
      <div className="animate-pulse w-64 h-4 bg-gray-200 rounded mb-2" />
      <div className="animate-pulse w-40 h-4 bg-gray-200 rounded" />
    </div>
  );
}

export default ExamsResults;
