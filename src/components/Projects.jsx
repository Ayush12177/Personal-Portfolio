import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "HireMeAI",
      description:
        "HireMeAI is an AI-powered recruitment platform that helps HRs explore and understand a My resume, including projects, education, skills, experience, certifications, and achievements, in a structured and easy-to-review format.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Python",
        "AI",
      ],
      github: "https://github.com/Ayush12177/hireMeAi-Ayush-AI",
      live: "https://hiremeai-sand.vercel.app/",
    },

    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing my skills, certifications, coding experience and projects.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
      ],
      github: "https://github.com/Ayush12177/Personal-Portfolio",
      live: "#",
    },

    {
      title: "Kaamkaaj - Blue Collar Connect",
      description:
        "A blue-collar job platform connecting job seekers with suitable employment opportunities. Includes job search, filtering and user profiles.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Tailwind CSS",
      ],
      github: "https://github.com/Ayush12177/Kaamkaaj",
      live: "https://kaamkaaj-help.onrender.com/",
    },

    {
      title: "kow-your-taste",
      description:
        "A MERN-based food delivery application with food discovery features and Instagram-style reels for an engaging user experience.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/Ayush12177/know-your-taste",
      live: "#",
    },
  ];

  // Show only 2 initially, all 4 after clicking View More
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Here are some of the projects I have built using
            modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >

              {/* Project title */}
              <div className="flex items-start justify-between gap-4">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="text-3xl font-bold text-cyan-400/20">
                  #
                </span>

              </div>

              {/* Description */}
              <p className="mt-5 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-7 flex gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub →
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo →
                </a>

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

export default Projects;