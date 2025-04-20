import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs'; // Using lucide-react for icons (or any alternative)
import { HiMenuAlt3, HiX } from 'react-icons/hi';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);;
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-6 py-4 shadow-md z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="">
        {/* <BsFillHouseDoorFill size={24} />
        <span>Nomands</span> */}
            <img src='/public/logo.png' className='w-[110px] rounded bg-white p-2' alt='logo image'/>
      </Link>
    

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/support" className="hover:text-gray-300">Contact Us</Link>
        <Link to="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">Sign In</Link>
        <Link to="/signup" className="bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <HiMenuAlt3 size={28} />
        </button>
      </div>
    </div>

    {/* Mobile drawer menu */}
    <div
      className={`fixed top-0 right-0 w-64 bg-white text-blue-800 shadow-lg transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      style={{ height: 'auto', minHeight: '100vh' }}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <span className="font-bold text-xl">Menu</span>
        <button onClick={() => setMenuOpen(false)}>
          <HiX size={26} />
        </button>
      </div>
      <div className="flex flex-col space-y-4 p-6">
        <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/signin" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Sign In</Link>
        <Link to="/signup" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        <Link to="/support" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Support</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar