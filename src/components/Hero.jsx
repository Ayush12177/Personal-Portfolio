function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 px-6 pb-20 pt-32 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-3 text-lg text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold sm:text-6xl">
            Ayush Gupta
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300">
            Software Engineer & Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB. I also enjoy
            Data Structures & Algorithms and exploring AI/ML.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Ayush12177"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <span aria-hidden="true">GH</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayushgupta-fsd/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <span aria-hidden="true">in</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/aayshh2105/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <span aria-hidden="true">LC</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ayushgupta96396@gmail.com"
              title="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <span aria-hidden="true">@</span>
            </a>

          </div>

        </div>

        {/* RIGHT - PROFILE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-8 animate-pulse rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Rotating Ring */}
            <div className="absolute -inset-4 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-cyan-400/40" />

            {/* Profile */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/40 bg-slate-800 shadow-2xl shadow-cyan-400/20 transition duration-500 hover:scale-105 hover:border-cyan-400 sm:h-96 sm:w-96">

              <img
                src="/profile.jpg"
                alt="Ayush Gupta"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />

            </div>

            {/* Floating dots */}
            <span className="absolute -right-3 top-10 h-4 w-4 animate-bounce rounded-full bg-cyan-400" />

            <span className="absolute -bottom-2 left-10 h-3 w-3 animate-pulse rounded-full bg-cyan-300" />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;