import useReveal from "./useReveal";

const cards = [
  {
    n: "01",
    title: "Who I Am",
    text: "Hello! I'm Srishti, a passionate and dedicated B.Tech Computer Science student with a deep interest in web development, design, and technology. I enjoy transforming ideas into interactive digital experiences and love creating websites that are modern, responsive, and user-friendly.",
  },
  {
    n: "02",
    title: "My Journey",
    text: "My journey into technology started with curiosity about how websites and applications work behind the scenes. Over time, that curiosity turned into a strong passion for frontend development and software creation. I enjoy learning new technologies, experimenting with ideas and improving my skills through real-world practice.",
  },
  {
    n: "03",
    title: "My Vision",
    text: "I believe great development combines both creativity and logic. My goal is to build impactful digital products, create meaningful user experiences and continue evolving as a developer who can blend technical skill with creativity to craft modern solutions.",
  },
];

function AboutCard({ card, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
      className={`
        relative rounded-[35px] border border-pink-200 bg-white/60
        px-8 py-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(214,106,150,.1)]
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <p className="absolute right-7 top-6 font-serif text-6xl text-pink-100">
        {card.n}
      </p>

      <h2 className="relative font-serif text-3xl text-[#1b1b1b] md:text-4xl">
        {card.title}
      </h2>

      <div className="mt-4 h-[3px] w-14 rounded-full bg-[#EC4899]"></div>

      <p className="relative mt-6 max-w-2xl text-lg leading-8 text-[#5a5560]">
        {card.text}
      </p>
    </div>
  );
}

function About() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section
      id="about"
      className="relative z-10 min-h-screen overflow-hidden bg-[#FFF3F8]/95 px-6 py-28 md:px-16"
    >
      {/* Background Grid, matching Home */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f8dce8_1px,transparent_1px),linear-gradient(to_bottom,#f8dce8_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-pink-200 blur-[140px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-purple-200 blur-[150px] opacity-30 pointer-events-none"></div>

      {/* Decorative Stars */}
      <div className="absolute left-16 top-16 text-2xl text-pink-400 pointer-events-none">✦</div>
      <div className="absolute right-24 top-40 text-lg text-pink-300 pointer-events-none">✦</div>
      <div className="absolute bottom-24 left-1/2 text-xl text-pink-400 pointer-events-none">✦</div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 uppercase tracking-[0.45em] text-[#EC4899]">About</p>
          <h1 className="font-serif text-6xl leading-none text-[#1b1b1b] md:text-7xl">
            About <span className="text-[#EC4899]">Me</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#666]">
            A little more about the person behind the code — my story, how I
            got here, and where I'm headed. ✦
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {cards.map((card, i) => (
            <AboutCard key={card.n} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
