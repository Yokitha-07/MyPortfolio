import houseImg from "../assets/HousePricePrediction.png";
import sentimentImg from "../assets/SentimentImg.png";
import mernImg from "../assets/ecommerce.png";
import semanticSearchImg from "../assets/Semantic.png";
import chatbot from "../assets/chatbot.png";
import studentRegImg from "../assets/registration.png"

const projects =  [
    {
  title: "MERN E-Commerce Platform",
  desc: "Full-featured e-commerce marketplace built using the MERN stack. Includes product variants, 3D product viewer, AR try-on, promo codes, secure payments via PayHere, and a role-based admin dashboard for managing products and orders.",
  tech: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "TailwindCSS",
    "JWT Authentication",
    "PayHere API",
    "TensorFlow BodyPix",
    "Model Viewer"
  ],
  image: mernImg,
  github: "https://github.com/Yokitha-07/ecommerce-mern-app",
  demo: "https://main.d3dw11vyw3a8cq.amplifyapp.com/"
},
  {
  title: "AI Chatbot",
  desc: "AI chatbot built with LangChain, Streamlit, and Ollama (Gemma3). Runs locally and demonstrates LLM integration.",
  tech: ["Python", "LangChain", "Streamlit", "Ollama"],
  image: chatbot,
  github: "https://github.com/Yokitha-07/AI-Chatbot",
  demo: null
},
  {
    title: "House Price Prediction Web App",
    desc: "End-to-end ML app using Linear Regression with FastAPI backend and deployed frontend.",
    tech: ["Python", "FastAPI", "Scikit-learn", "JavaScript"],
    image: houseImg,
    github: "https://github.com/Yokitha-07/house-price-deploy",
    demo: "https://main.dztk3kh4peeu8.amplifyapp.com/",
  },
  {
    title: "Text Sentiment Analyzer (AI Web App)",
    desc: "Full-stack AI application that analyzes user text and returns sentiment with confidence scores. Built using React and FastAPI, integrated with Cohere API, and deployed on AWS S3 and Render.",
    tech: ["React", "FastAPI", "Python", "Cohere API", "JavaScript", "Pydantic", "Uvicorn"],
    image: sentimentImg,
    github: "https://github.com/Yokitha-07/sentiment-analysis-app",
    demo: "http://yokitha-sentiment-analyzer.s3-website.eu-north-1.amazonaws.com/"
 },
 {
  title: "Semantic Search Engine (BM25 vs Dense Retrieval)",
  desc: "AI-powered semantic search application that compares traditional keyword-based retrieval (BM25) with modern transformer-based dense retrieval (Sentence Transformers). Users can input queries and see how different retrieval methods rank documents based on relevance and meaning. Deployed on Hugging Face Spaces with an interactive Gradio interface.",
  
  tech: [
    "Python",
    "Gradio",
    "Sentence Transformers",
    "Rank-BM25",
    "NumPy",
    "Hugging Face Spaces",
    "Machine Learning",
    "NLP"
  ],

  features: [
    "BM25 keyword-based retrieval",
    "Dense semantic retrieval using transformer embeddings",
    "Real-time query processing",
    "Side-by-side comparison of ranking methods",
    "Interactive web UI with Gradio"
  ],

  image: semanticSearchImg,

  github: "https://github.com/Yokitha-07/RAG",

  demo: "https://yokitha-semantic-search-demo.hf.space/"
},
{
  title: "Student Registration System (MERN Stack)",
  desc: "End-to-end MERN stack application enabling student registration with file upload support, REST API integration, and MongoDB cloud storage. Deployed using Netlify and Render.",
  tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Multer", "REST API"],
  image: studentRegImg,
  github: "https://github.com/Yokitha-07/student-registration-form",
  demo: "https://studentregistrationform123.netlify.app/",
}
];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white">
//       <h2 className="text-3xl text-center mb-10">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-6 px-10">
//         {projects.map((p, i) => (
//           <div key={i} className="bg-gray-800 p-6 rounded-xl hover:shadow-lg">
//             <h3 className="text-xl font-bold">{p.title}</h3>
//             <p className="mt-2">{p.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center mb-12 font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm"
                >
                  GitHub
                </a>
                {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-500 py-2 rounded-lg text-sm"
                >
                  Live Demo
                </a>
                ) : (
                <span className="flex-1 text-center bg-gray-700 py-2 rounded-lg text-sm cursor-not-allowed">
                    Runs Locally
                </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}