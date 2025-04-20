
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-xl text-center">
        <img
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?semt=ais_hybrid&w=740"
          alt="Page not found"
          className="w-full max-w-sm mx-auto mb-8"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Uh-oh! We couldn't find the page you’re looking for. It might have been removed, renamed, or it never existed.
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
