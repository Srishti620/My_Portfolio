import { FaCode, FaReact, FaServer, FaDatabase, FaSearch, FaTools, FaUsers } from "react-icons/fa";
import useReveal from "./useReveal";

const skillGroups = [
  {
    icon: FaCode,
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
  },
  {
    icon: FaReact,
    title: "Frontend Engineering",
    items: ["React.js", "Responsive Design", "Component-Based Architecture"],
  },
  {
    icon: FaServer,
    title: "Backend Engineering",
    items: ["Node.js", "Express.js", "REST API Development", "JWT Authentication"],
  },
  {
    icon: FaDatabase,
    title: "Databases",
    items: ["MongoDB", "MySQL", "Schema Design & Normalization"],
  },
  {
    icon: FaSearch,
    title: "Web Auditing & Automation",
    items: ["Lighthouse", "Puppeteer", "Cheerio", "SEO Analysis", "Accessibility Testing", "Core Web Vitals"],
  },
  {
    icon: FaTools,
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Render"],
  },
  {
    icon: FaUsers,
    title: "Practices",
    items: ["Agile / Scrum", "Debugging", "Software Testing", "SDLC"],
  },
];

function SkillCard({ group, index }) {
  const [ref, visible] = useReveal();
  const Icon = group.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`
        rounded-[30px] border border-pink-200 bg-white/60 p-8
        backdrop-blur-xl shadow-[0_20px_60px_rgba(214,106,150,.1)]
        transition-all duration-700 ease-out hover:-translate-y-2 hover:border-pink-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-200 bg-[#FFF5FA]">
        <Icon className="text-2xl text-[#EC4899]" />
      </div>

      <h2 className="font-serif text-2xl text-[#1b1b1b]">{group.title}</h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-pink-100 bg-[#FFF8FC] px-3 py-1.5 text-sm text-[#8C5B72]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section
      id="skills"
      className="relative z-10 min-h-screen overflow-hidden bg-[#FDF2F7]/95 px-6 py-28 md:px-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f8dce8_1px,transparent_1px),linear-gradient(to_bottom,#f8dce8_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-20 left-0 h-[350px] w-[350px] rounded-full bg-purple-200 blur-[140px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-pink-200 blur-[140px] opacity-40 pointer-events-none"></div>

      {/* Decorative Stars */}
      <div className="absolute right-16 top-20 text-2xl text-pink-400 pointer-events-none">✦</div>
      <div className="absolute left-24 bottom-32 text-lg text-pink-300 pointer-events-none">✦</div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 uppercase tracking-[0.45em] text-[#EC4899]">Skills</p>
          <h1 className="font-serif text-6xl leading-none text-[#1b1b1b] md:text-7xl">
            Skills &amp; <span className="text-[#EC4899]">Tools</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            A full-stack skill set spanning frontend, backend, databases and
            web auditing &amp; automation — built through real projects and a
            software engineering internship.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
