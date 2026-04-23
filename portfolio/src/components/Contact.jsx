export default function Contact() {
  return (
    <div id="contact">

      {/* Contact Info */}
      {/* <section className="bg-slate-950 text-gray-300 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-white mb-4">Contact Info</h2>

          <p className="text-gray-400 mb-10">
            Feel free to reach out for collaboration opportunities, project discussions,
            or any inquiries about my work in AI/ML and data science.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left"> */}

            {/* Location */}
            {/* <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
              <h3 className="text-xl font-semibold text-white mb-2">📍 Location</h3>
              <p>
                No.164, Thambagalla Estate <br />
                Panirendawa, Madampe 60260 <br />
                Sri Lanka
              </p>
            </div> */}

            {/* Phone */}
            {/* <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
              <h3 className="text-xl font-semibold text-white mb-2">📞 Phone Number</h3>
              <p>
                <a href="tel:+94761035090" className="hover:text-purple-400">
                  +94 76 103 5090
                </a>
              </p>
            </div> */}

            {/* Email */}
            {/* <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
              <h3 className="text-xl font-semibold text-white mb-2">📧 Email Address</h3>
              <p>
                <a
                  href="mailto:dasininirmani@gmail.com"
                  className="hover:text-purple-400"
                >
                  dasininirmani@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl mb-6">Contact</h2>

        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Name"
          />
          <input
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Email"
          />
          <textarea
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Message"
            rows="4"
          ></textarea>
          <button className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}