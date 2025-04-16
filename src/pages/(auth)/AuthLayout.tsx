

const AuthLayout = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Nomands</h2>
          <form>
            <div className="mb-4">
              <label className="inputLabel">Email address</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="input"
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
          </form>
        </div>
      </div>
    );
  };
  
  export default AuthLayout
  