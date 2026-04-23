// Navbar.jsx
export default function Navbar() {
  return (
    // <nav className="fixed w-full bg-black/80 backdrop-blur z-50">
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <ul className="flex justify-center gap-8 p-4 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </nav>
  );
}