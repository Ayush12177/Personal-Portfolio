function Skills() {
  const skills = [
    {
      icon: "</>",
      title: "Languages",
      items: ["Java", "Python", "JavaScript"],
    },
    {
      icon: "WEB",
      title: "Frontend",
      items: ["React", "HTML", "Tailwind CSS"],
    },
    {
      icon: "API",
      title: "Backend",
      items: ["Node.js", "Express.js", "REST API", "JWT"],
    },
    {
      icon: "DB",
      title: "Database",
      items: ["MongoDB", "Mongoose", "SQL"],
    },
    {
      icon: "Git",
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      icon: "DSA",
      title: "Computer Science",
      items: ["DSA", "OOP", "DBMS", "Networks"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Technologies I use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My technical skills across programming, frontend,
            backend, databases and computer science fundamentals.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >

              {/* Title */}
              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-cyan-400/10 px-2 font-bold text-cyan-400">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {skill.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;