// 
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const roles = ["Web Developer", "ML Enthusiast", "Data Science Explorer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = roles[roleIndex];

      const nextChar = charIndex + 1;
      setText(currentRole.slice(0, nextChar));
      setCharIndex(nextChar);

      if (nextChar > currentRole.length) {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
        setText("");
      }
    }, 150);

    return () => clearInterval(interval);
  }, [roleIndex, charIndex]);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-black text-white"
    >
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
  
  <h1 className="text-5xl font-bold">Hi, I'm Yokitha 👋</h1>

  <h2 className="text-2xl text-purple-400">
    {text}
    <span className="animate-pulse">|</span>
  </h2>

  <p className="max-w-xl">
    AI/ML enthusiast passionate about building intelligent systems.
  </p>

  {/* <a
    href="#projects"
    className="mt-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-800"
  >
    View Projects
  </a> */}

  <div className="flex justify-center gap-6 mt-6 text-lg">
          
          <a
            href="https://github.com/Yokitha-07"
            className="mt-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-800"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yokithar/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-800"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rathinarasayokitha1953@gmail.com"
            className="mt-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-800"
          >
            Email
          </a>
</div>
</div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Yokitha"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
}