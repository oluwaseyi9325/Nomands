import Footer from '@/_compoents/Footer';
import Teams from '@/_compoents/Teams';
import Banner from '@/_compoents/Banner.tsx';
import Navbar from '@/_compoents/Navbar';
import { useTanstackCustom } from '@/api/useTanstackCustom';

const LandingPage = () => {

  const { data, isLoading, error } = useTanstackCustom({
    key: 'users',
    url: 'post',
  })

  console.log('data', data, error?.message, isLoading);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <Navbar />



      {/* Banner Section */}
      <Banner />

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Cohort Management</h3>
              <p className="text-gray-600 text-sm sm:text-base">Easily manage cohorts, track progress, and assign exams.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Exam Builder</h3>
              <p className="text-gray-600 text-sm sm:text-base">Create custom exams for your cohorts with a flexible builder.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Results Overview</h3>
              <p className="text-gray-600 text-sm sm:text-base">Get detailed insights into student performance and exam results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Nomands</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600">
            Nomands is a cohort-based exam management platform designed for admins and students.
            With intuitive features, admins can create exams, track students' progress, and analyze results in real-time.
            Students can easily access their exams, track their performance, and manage their schedules.
          </p>
        </div>
      </section>

      {/* Why Nomands Section */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1675664533677-2f3479b85c20?w=900&auto=format&fit=crop&q=60"
            alt="Why Nomands"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Nomands?</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Nomands is built with efficiency, transparency, and performance in mind.
              Admins can manage cohorts and exams seamlessly, while students get a stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* Students Perks Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎓 Hey Students, We Got You!</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Focus more on studying and less on the hassle.
              Easy access to exams, automatic scoring, and a dashboard tailored just for you.
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
      <Teams />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

// http://meet.google.com/gyf-ncbp-oaf
