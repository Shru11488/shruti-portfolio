export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h1>

      <form className="space-y-6">

        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows={5}
            placeholder="Write your message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}