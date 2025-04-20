const ResetPasswordPage = () => {
    return (
      <>
       <>
            <div className="mb-4">
              <label className="inputLabel">New Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-4">
              <label className="inputLabel">Confirm Password</label>
              <input
                type="password"
                className="input"
                placeholder="Confirm your new password"
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Reset Password
            </button>
          </>
      </>
    );
  };
  
  export default ResetPasswordPage;
  