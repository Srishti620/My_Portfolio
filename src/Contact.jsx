import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import useReveal from "./useReveal";


function Contact() {
  const [headerRef, headerVisible] = useReveal();
  const [linksRef, linksVisible] = useReveal();
  const [resumeRef, resumeVisible] = useReveal();

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen overflow-hidden bg-[#FDF2F7]/95 px-6 py-28 md:px-16"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f8dce8_1px,transparent_1px),linear-gradient(to_bottom,#f8dce8_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-200 opacity-30 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-200 opacity-40 blur-[140px] pointer-events-none"></div>

      <div className="absolute right-24 top-24 text-2xl text-pink-400 pointer-events-none">
        ✦
      </div>
      <div className="absolute left-16 bottom-40 text-lg text-pink-300 pointer-events-none">
        ✧
      </div>
      <div className="absolute right-1/3 bottom-24 text-xl text-purple-300 pointer-events-none">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 uppercase tracking-[5px] text-[#EC4899]">
            Contact
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] text-[#1b1b1b] md:text-[100px]">
            Let&apos;s <span className="text-[#EC4899]">Talk</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            Got a cute idea, a project, or just wanna collab? My inbox is always
            open, let&apos;s create something magical together.
          </p>
        </div>

        <div
          ref={linksRef}
          className={`mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
            linksVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Email */}
          <a
            href="mailto:srishtisehgal2801@gmail.com"
            className="group flex flex-col items-center gap-3 rounded-[28px] border border-pink-200 bg-white/60 px-6 py-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(214,106,150,.1)] transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(214,106,150,.2)]"
          >
            <FaEnvelope className="text-3xl text-[#EC4899] transition group-hover:scale-110" />
            <p className="text-sm uppercase tracking-[3px] text-[#8C5B72]">
              Email
            </p>
            <p className="break-all text-base text-[#1b1b1b]">
              srishtisehgal2801@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919057479018"
            className="group flex flex-col items-center gap-3 rounded-[28px] border border-pink-200 bg-white/60 px-6 py-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(214,106,150,.1)] transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(214,106,150,.2)]"
          >
            <FaPhone className="text-3xl text-[#EC4899] transition group-hover:scale-110" />
            <p className="text-sm uppercase tracking-[3px] text-[#8C5B72]">
              Phone
            </p>
            <p className="text-base text-[#1b1b1b]">+91 9057479018</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/srishti-sehgal-73726a320"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-[28px] border border-pink-200 bg-white/60 px-6 py-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(214,106,150,.1)] transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(214,106,150,.2)]"
          >
            <FaLinkedin className="text-3xl text-[#EC4899] transition group-hover:scale-110" />
            <p className="text-sm uppercase tracking-[3px] text-[#8C5B72]">
              LinkedIn
            </p>
            <p className="text-base text-[#1b1b1b]">Let&apos;s connect</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Srishti620"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-[28px] border border-pink-200 bg-white/60 px-6 py-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(214,106,150,.1)] transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(214,106,150,.2)]"
          >
            <FaGithub className="text-3xl text-[#EC4899] transition group-hover:scale-110" />
            <p className="text-sm uppercase tracking-[3px] text-[#8C5B72]">
              GitHub
            </p>
            <p className="text-base text-[#1b1b1b]">Peek my projects</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sri.sehgal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-[28px] border border-pink-200 bg-white/60 px-6 py-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(214,106,150,.1)] transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(214,106,150,.2)]"
          >
            <FaInstagram className="text-3xl text-[#EC4899] transition group-hover:scale-110" />
            <p className="text-sm uppercase tracking-[3px] text-[#8C5B72]">
              Instagram
            </p>
            <p className="text-base text-[#1b1b1b]">Say hi</p>
          </a>
        </div>

        <div
          ref={resumeRef}
          className={`mt-16 transition-all duration-700 ease-out ${
            resumeVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-5 leading-7 text-[#5a5560]">
            Curious about my journey so far? Take a peek at my resume.
          </p>

          
<a
  href="/Srishti_Sehgal_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full bg-[#EC4899] px-10 py-3 text-white shadow-[0_10px_30px_rgba(236,72,153,.35)] transition hover:scale-105 hover:bg-[#D66A96]"
>
  View Resume
</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;