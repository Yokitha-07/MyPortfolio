import DS from "../assets/whatisdatascience.jpeg";
import DSAI from "../assets/pythonforaidatascience.jpeg";
import DBSQL from "../assets/databasesand sql.jpeg";
import tools from "../assets/tools.jpeg"

// 1. Add state



import { useState } from "react";

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
const [selectedCert, setSelectedCert] = useState(null);
const placeholderImg = "https://via.placeholder.com/600x400?text=Certificate+Not+Available";

    const certs = [
    {
      title: "What is Data Science?",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/EMSSVJ5VQW33",
      image: DS,
    },
    {
      title: "Diploma in Information Technology",
      issuer: "University of Colombo",
      link: "https://ucsc.cmb.ac.lk/verify/",
      image: null,
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/6E1LL6E5QSB8",
      image: DSAI,
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/I3YYV3M5KVSG",
      image: DBSQL,
    },
    {
      title: "Diploma in ICT & English",
      issuer: "ICBT Campus",
      link: null,
      image: null,
    },
    {
      title: "Tools for Data Science",
      issuer: "IBM, Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/ZFGX4S5AOOZW",
      image: tools,
    },
  ];

  return (
    <section id="certifications" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        {/* <div className="grid md:grid-cols-3 gap-8">

          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-purple-500/30 transition"
            > */}

              {/* Image */}
              {/* <div className="overflow-hidden">
                    {cert.image ? (
                        <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-52 object-cover hover:scale-110 transition duration-500 cursor-pointer"
                        onClick={() => cert.image && setSelectedCert(cert)}
                        />
                    ) : (
                        <div className="w-full h-52 flex items-center justify-center bg-gray-800 text-gray-400">
                        Certificate not uploaded yet
                        </div>
                    )}
                    </div> */}

              {/* Content */}
              {/* <div className="p-6 text-left">

                <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">
                  {cert.issuer}
                </span>

                <h3 className="text-lg font-semibold mt-3">
                  {cert.title}
                </h3>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="mt-4 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  View Certificate
                </button>

              </div>
            </div>
          ))}

        </div> */}

        <div className="max-w-4xl mx-auto">

  {/* Featured Certificate */}
  <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

    <img
      src={certs[activeIndex].image || placeholderImg}
      alt={certs[activeIndex].title}
      className="w-full h-[400px] object-cover"
    />

    {/* Left Arrow */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === 0 ? certs.length - 1 : prev - 1
        )
      }
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
    >
      ◀
    </button>

    {/* Right Arrow */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === certs.length - 1 ? 0 : prev + 1
        )
      }
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
    >
      ▶
    </button>

    {/* Info */}
    <div className="p-6 text-left">
      <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">
        {certs[activeIndex].issuer}
      </span>

      <h3 className="text-xl font-semibold mt-3">
        {certs[activeIndex].title}
      </h3>

      <button
        onClick={() => setSelectedCert(certs[activeIndex])}
        className="mt-4 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
      >
        View Certificate
      </button>
    </div>
  </div>

  {/* Thumbnails */}
  <div className="flex gap-4 mt-6 overflow-x-auto">

    {certs.map((cert, index) => (
      <div
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`min-w-[120px] cursor-pointer border rounded-lg overflow-hidden ${
          activeIndex === index
            ? "border-purple-500"
            : "border-white/10"
        }`}
      >
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="h-24 w-full object-cover"
          />
        ) : (
          <div className="h-24 flex items-center justify-center bg-gray-800 text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>
    ))}

  </div>
</div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-slate-900 p-4 rounded-xl max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-white text-xl"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedCert.image || placeholderImg}
              alt={selectedCert.title}
              className="w-full rounded-lg"
            />

            {/* Info */}
            <h3 className="text-white mt-4 text-lg font-semibold">
              {selectedCert.title}
            </h3>

            <p className="text-gray-400">{selectedCert.issuer}</p>

            {selectedCert.link && (
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Open Original
              </a>
            )}

          </div>
        </div>
      )}
    </section>
  );
}