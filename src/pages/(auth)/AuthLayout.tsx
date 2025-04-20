import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          {/* <h2 className="text-2xl font-semibold text-center mb-6">Nomands</h2> */}
          <div className="flex justify-center">
          <img src='/public/logo.png' className='w-[150px] mb-6  rounded bg-white p-2' alt='logo image'/>
          </div>
          <form>
            <Outlet/>
          </form>
        </div>
      </div>
    );
  };
  
  export default AuthLayout
  