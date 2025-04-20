const SignupPage = () => {
    return (
      <>
       <form>
            <div className="mb-4">
              <label className="inoutLabel">First Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="inputLabel">Last Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label className="inputLabel">Email address</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="inputLabel">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="inputLabel">Confirm Password</label>
              <input
                type="password"
                className="input"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-blue-600 mt-4">
              Already have an account? <span className="cursor-pointer hover:underline">Login</span>
            </p>
          </form>
      </>
    );
  };
  
  export default SignupPage;
  