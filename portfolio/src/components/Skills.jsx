// 

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python"],
  },
  {
    title: "AI/ML Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "FastAPI", "React.js", "Node.js", "Express.js", "Streamlit"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Git", "GitHub", "Google Cloud", "Docker", "AWS", "Netlify", "Render"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Vector Databases"],
  },
  {
  title: "AI Concepts",
  skills: ["NLP", "LLMs", "Prompt Engineering", "RAG"],
},
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      
      {/* Title */}
      <h2 className="text-3xl text-center mb-4 font-bold">
        Skills
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Modern technologies and tools I use to build AI/ML solutions
      </p>

      {/* Skill Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-purple-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}