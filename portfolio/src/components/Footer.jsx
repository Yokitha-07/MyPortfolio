// 

export default function Footer() {
  return (
    // <footer className="bg-gray-900 text-gray-400 py-10">
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name / Brand
        <h2 className="text-white text-2xl font-semibold">
          Yokitha R
        </h2>

        Short line
        <p className="mt-2 text-sm">
          AI/ML Enthusiast | Building intelligent solutions with data
        </p> */}

        

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Yokitha. All rights reserved.
        </p>

      </div>

      {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-lg">
          
          <a
            href="https://github.com/Yokitha-07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yokithar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rathinarasayokitha1953@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>

        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mt-2 text-sm">
          Portfolio designed & developed by Yokitha.
        </p>
        </div>



    </footer>
  );
}