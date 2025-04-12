const SignupPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Nomands</h2>
          <form>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-blue-600 mt-4">
              Already have an account? <span className="cursor-pointer hover:underline">Login</span>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupPage;
  