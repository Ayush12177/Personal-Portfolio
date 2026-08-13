function About() {
  const cards = [
    {
      icon: "</>",
      title: "Full Stack Development",
      description:
        "Building responsive and scalable applications using modern web technologies.",
    },
    {
      icon: "DSA",
      title: "Problem Solving",
      description:
        "Strong foundation in Data Structures and Algorithms using Java.",
    },
    {
      icon: "🚀",
      title: "Real Projects",
      description:
        "Turning ideas into functional applications with practical development experience.",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description:
        "Comfortable working with teams, learning quickly and solving technical problems.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            A little about me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* About Text */}
          <div>

            <p className="text-lg leading-8 text-slate-400">
              I am a Computer Science student passionate about
              software development, problem solving and emerging
              technologies.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              My interests include Full Stack Development, Artificial
              Intelligence, Machine Learning and Data Structures &
              Algorithms. I enjoy building practical projects and
              continuously learning new technologies.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <h3 className="text-3xl font-black text-cyan-400">
                  250+
                </h3>

                <p className="mt-2 text-slate-400">
                  DSA Problems
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <h3 className="text-3xl font-black text-cyan-400">
                  5+
                </h3>

                <p className="mt-2 text-slate-400">
                  Projects
                </p>
              </div>

            </div>

          </div>

          {/* About Cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                {/* Icon / Symbol */}
                <div className="mb-5 inline-flex h-12 min-w-12 items-center justify-center rounded-xl bg-cyan-400/10 px-3 font-bold text-cyan-400">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {card.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;