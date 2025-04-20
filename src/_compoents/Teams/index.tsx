
export default function Teams() {
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
        <section className="bg-gray-100 px-3 py-12 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Meet The Developers</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {developers.map((dev, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-4">
                        <img
                            src={dev.img}
                            alt={dev.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full mb-3 object-cover"
                        />
                        <h3 className="text-base sm:text-lg font-semibold">{dev.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{dev.role}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
