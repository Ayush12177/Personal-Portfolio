import { useState } from "react";

function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "Data Structures and Algorithms Design",
      organization: "NPTEL - IIT Kanpur",
      date: "Jul – Oct 2025",
      image: "/certificates/nptel.jpg",
      description:
        "Completed a Data Structures and Algorithms course and strengthened algorithmic problem-solving skills.",
    },
    {
      title: "Build a Business Architecture Using AWS",
      organization: "AWS Academy",
      date: "April 2026",
      image: "/certificates/aws.jpg",
      description:
        "Learned fundamental concepts of AWS business architecture and cloud-based solutions.",
    },
    {
      title: "Cyber Job Simulation",
      organization: "Deloitte - Forage",
      date: "June 2025",
      image: "/certificates/cyber.jpg",
      description:
        "Completed a practical cyber job simulation focused on cybersecurity tasks and problem solving.",
    },
    {
      title: "GenAI-Powered Data Analytics Simulation",
      organization: "TATA - Forage",
      date: "July 2025",
      image: "/certificates/genai.jpg",
      description:
        "Completed a practical simulation involving generative AI and data analytics.",
    },
    {
      title: "DSA with Java",
      organization: "Apna College",
      date: "2025",
      image: "/certificates/dsa.jpg",
      description:
        "Completed a comprehensive course on Data Structures and Algorithms using Java.",
    },
  ];

  // Show only 3 initially, all 5 when View More is clicked
  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

  return (
    <section
      id="certifications"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Certifications and learning experiences that have
            helped me strengthen my technical skills.
          </p>

        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {visibleCertificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >

              {/* Image */}
              <div className="h-56 overflow-hidden bg-white">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <p className="text-sm font-medium text-cyan-400">
                  {certificate.organization}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-7">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {certificate.date}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {certificate.description}
                </p>

                {/* View Certificate */}
                <div className="mt-auto pt-6">

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    View Certificate →
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* View More / View Less */}
        <div className="mt-12 flex justify-center">

          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            {showAll ? "View Less ↑" : "View More ↓"}
          </button>

        </div>

      </div>
    </section>
  );
}

export default Certifications;