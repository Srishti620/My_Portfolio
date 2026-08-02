import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="backdrop-blur-xl bg-white/40 border border-pink-200 shadow-xl rounded-full px-8 py-4 flex items-center gap-8">

        <div className="font-semibold tracking-[0.3em] text-[#E75480]">
          SS
        </div>

        <a
          href="#home"
          className="text-[#444] hover:text-[#EC4899] transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-[#444] hover:text-[#EC4899] transition"
        >
          About
        </a>

        <a
          href="#skills"
          className="text-[#444] hover:text-[#EC4899] transition"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="text-[#444] hover:text-[#EC4899] transition"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-[#444] hover:text-[#EC4899] transition"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;