import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';

const LandingPage = () => {
  const developers = [
    {
      name: "Jane Doe",
      role: "Frontend Dev",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Smith",
      role: "Backend Dev",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Aisha Bello",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "Carlos Diaz",
      role: "Fullstack Engineer",
      img: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      name: "Sara Lee",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">
            <Link to="/" className="flex items-center space-x-2">
              <BsFillHouseDoorFill size={24} />
              <span>Nomands</span>
            </Link>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">Sign In</Link>
            <Link to="/signup" className="bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
            <Link to="/support" className="hover:text-gray-300">Support</Link>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="bg-blue-600 text-white text-center py-36">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Nomands</h1>
          <p className="text-xl mb-6">The best cohort-based exam management platform for students and admins.</p>
          <div className="space-x-4">
            <Link to="/signin" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg hover:bg-gray-100">Get Started</Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg hover:bg-gray-100">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Cohort Management</h3>
              <p className="text-gray-600">Easily manage cohorts, track progress, and assign exams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Exam Builder</h3>
              <p className="text-gray-600">Create custom exams for your cohorts with a flexible builder.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Results Overview</h3>
              <p className="text-gray-600">Get detailed insights into student performance and exam results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">About Nomands</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Nomands is a cohort-based exam management platform designed for admins and students. With intuitive features, admins can create exams, track students' progress, and analyze results in real-time. Students can easily access their exams, track their performance, and manage their schedules.
          </p>
        </div>
      </section>

      {/* Why Nomands Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://images.unsplash.com/photo-1675664533677-2f3479b85c20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHVzaW5nJTIwbGFwdG9wJTIwaW4lMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D"
            alt="Why Nomands"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nomands?</h2>
            <p className="text-gray-600 text-lg">
              Nomands is built with efficiency, transparency, and performance in mind. Admins can manage cohorts and exams seamlessly, while students get a stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* Students Perks Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">🎓 Hey Students, We Got You!</h2>
            <p className="text-gray-600 text-lg">
              Focus more on studying and less on the hassle. Easy access to exams, automatic scoring, and a dashboard tailored just for you.
            </p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1414982482/photo/cheerful-multi-ethnic-group-of-students-on-the-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=v_oueRspWdtatfy81l91SlEK3vyl9JcogGKCnaBCygE="
            alt="Students"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Developers Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet The Developers</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={dev.img}
                alt={dev.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{dev.name}</h3>
              <p className="text-sm text-gray-500">{dev.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2025 Nomands. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
