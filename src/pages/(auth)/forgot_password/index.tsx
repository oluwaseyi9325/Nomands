import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Example: Here, you could call your API to send OTP
    if (email) {
      setMessage("OTP sent to your email! Please check your inbox.");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <>
      <p className="text-sm text-gray-700 mb-4 text-center">
          Please enter the email you used to register to receive the OTP for password reset.
        </p>

        {/* Success/Error Message */}
        {message && (
          <div className={`p-4 mb-4 text-center rounded-lg ${message.includes("OTP") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="inputLabel">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="btn"
          >
            Send OTP
          </button>
      </form>
      
      <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:text-blue-700 focus:outline-none"
          >
            Back to Login
          </Link>
        </div>
    </>
  );
};

export default ForgotPasswordPage;
