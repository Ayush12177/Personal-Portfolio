function Education() {
  const education = [
    {
      type: "B.Tech",
      title: "Computer Science & Engineering",
      institution: "GNIOT",
      location: "Greater Noida, Uttar Pradesh",
      duration: "2023 – 2027",
      status: "Currently Pursuing",
      description:
        "Focused on software development, Data Structures & Algorithms, DBMS, computer networks, full-stack development and modern technologies.",
    },
    {
      type: "Schooling",
      title: "Senior Secondary Education",
      institution: "Saraswati Vidya Mandir",
      location: "Etah, Uttar Pradesh",
      duration: "2015 – 2021",
      status: "Completed",
      description:
        "Completed senior secondary education with a strong foundation in Mathematics, Science and Computer Science.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My academic journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My educational background and academic journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-700 sm:block" />

          <div className="space-y-8">

            {education.map((item) => (
              <div
                key={item.institution}
                className="relative sm:pl-16"
              >

                {/* Timeline dot */}
                <div className="absolute left-2 top-8 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-400 sm:flex" />

                {/* Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">

                  <div className="flex flex-col justify-between gap-5 sm:flex-row">

                    {/* Left */}
                    <div>

                      <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                        {item.type}
                      </span>

                      <h3 className="mt-4 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <h4 className="mt-2 text-lg font-semibold text-slate-300">
                        {item.institution}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.location}
                      </p>

                    </div>

                    {/* Right */}
                    <div className="text-left sm:text-right">

                      <p className="text-base font-semibold text-cyan-400">
                        {item.duration}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.status}
                      </p>

                    </div>

                  </div>

                  <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;