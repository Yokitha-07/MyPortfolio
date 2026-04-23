export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        About Me
      </h2>

      {/* About Text */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
        <p className="text-gray-300 leading-relaxed">
          Motivated graduate with a strong interest in Artificial Intelligence and Machine Learning. 
          Passionate about learning new technologies and solving real-world problems through data-driven solutions. 
          Eager to gain practical industry experience, contribute to innovative projects, and continuously expand 
          technical knowledge by taking on new challenges.
        </p>
      </div>

      {/* Education + Experience Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Education
          </h3>

          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-semibold text-white">
                University of Peradeniya, Kandy
              </p>
              <p>BSc in Computation and Management (2021 - 2025)</p>
              <p className="text-sm text-gray-400">
                Second Class Upper Division (GPA: 3.45/4.00)
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                University of Colombo School
              </p>
              <p className="text-sm text-gray-400">
                Bachelor of Information Technology(2022-2026)
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Experience
          </h3>

          <div className="text-gray-300 space-y-3">
            <p className="font-semibold text-white">
              Web Developer Intern
            </p>

            <p className="text-sm text-gray-400">
              Sri Lanka IT Training Foundation / SoftwarePlus Pvt Ltd  
              <br /> Nov 2025 – Present
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                Developed MERN stack web applications for e-commerce systems
              </li>
              <li>
                Built responsive UI using React.js and integrated backend APIs with Node.js & Express
              </li>
              <li>
                Integrated PayHere payment gateway and implemented order workflows
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}