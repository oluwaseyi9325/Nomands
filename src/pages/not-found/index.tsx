// src/pages/NotFound.js
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/400x300" // Replace with your custom illustration
            alt="Lost or broken"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
