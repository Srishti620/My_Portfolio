function Navbar() {
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50

      flex
      items-center
      gap-8

      px-7
      py-3

      bg-[#2b283d]/80
      backdrop-blur-md

      border
      border-white/10

      rounded-2xl

      shadow-lg
      "
    >

      <a
        href="#about"
        className="
        text-[#d4d4d8]
        hover:text-[#f9a8d4]
        transition
        duration-300
        text-sm
        font-medium
        "
      >
        About
      </a>


      <a
        href="#skills"
        className="
        text-[#d4d4d8]
        hover:text-[#f9a8d4]
        transition
        duration-300
        text-sm
        font-medium
        "
      >
        Skills
      </a>


      <a
        href="#projects"
        className="
        text-[#d4d4d8]
        hover:text-[#f9a8d4]
        transition
        duration-300
        text-sm
        font-medium
        "
      >
        Projects
      </a>


      <a
        href="#contact"
        className="
        text-[#d4d4d8]
        hover:text-[#f9a8d4]
        transition
        duration-300
        text-sm
        font-medium
        "
      >
        Contact
      </a>

    </nav>
  )
}

export default Navbar