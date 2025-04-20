function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact