import { Link } from "react-router-dom"

function Banner() {
    return (
        <section className="bg-blue-600 text-white text-center pt-[250px] pb-[200px] sm:pb-[200px]">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Nomands</h1>
                <p className="text-lg sm:text-xl mb-6">The best cohort-based exam management platform for students and admins.</p>
                <div className="space-x-2 sm:space-x-4">
                    <Link to="/signin" className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg hover:bg-gray-100">Get Started</Link>
                    <Link to="/about" className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg hover:bg-gray-100">Learn More</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner