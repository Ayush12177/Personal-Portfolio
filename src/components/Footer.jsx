function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center text-base text-slate-400">

        <p>
          © 2026 <span className="font-semibold text-white">Ayush Gupta</span>.
          All rights reserved.
        </p>

        <p className="text-slate-500">
          Built with{" "}
          <span className="font-medium text-cyan-400">
            React + Tailwind CSS
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;