const OtpPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Nomands</h2>
          <form>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default OtpPage;
  