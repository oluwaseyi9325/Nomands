

const LoginPage = () => {
  return (
    <>
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
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
    >
      Login
    </button>
    <p className="text-center text-sm text-blue-600 mt-4 cursor-pointer hover:underline">
      Forgot password?
    </p>
  </>
  );
};

export default LoginPage;
