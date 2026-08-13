function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center sm:p-16">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to software development opportunities,
            internships, collaborations and interesting projects.
            Feel free to reach out.
          </p>

          {/* Email */}
          <a
            href="mailto:ayushgupta96396@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>

          {/* Social */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/Ayush12177"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ayushgupta-fsd"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;