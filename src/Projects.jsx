import {
  FaSearchengin,
  FaBookOpen,
  FaTasks,
  FaUtensils,
  FaGraduationCap,
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
} from "react-icons/fa";
import useReveal from "./useReveal";

const projects = [
  {
    icon: FaSearchengin,
    badge: "Industry Project · Internship",
    title: "Website Audit Tool",
    blurb:
      "A full-stack auditing platform that scores a website's SEO, accessibility, performance and security in one tidy dashboard — plus an AI Visibility Score that checks how easily AI search engines can actually understand a site.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Lighthouse", "Puppeteer", "Cheerio"],
    links: { note: "Built during my internship — code belongs to the client" },
  },
  {
    icon: FaBookOpen,
    badge: "AI-Powered Reading Companion",
    title: "Book Buddy",
    blurb:
      "Upload a book, skip the 300 pages — get neat chapter-wise summaries and auto-generated MCQs to test yourself, powered by an LLM under the hood.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "LLM API"],
    links: { github: "https://github.com/Srishti620" },
  },
  {
    icon: FaTasks,
    badge: "Full Stack Project",
    title: "TaskNova",
    blurb:
      "A Kanban-style task manager for students, with JWT auth, a priority-scoring system for deadlines, and reminders so nothing sneaky slips through the cracks.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    links: {
      github: "https://github.com/Srishti620/tasknova",
      live: "https://tasknova-zeta.vercel.app",
    },
  },
  {
    icon: FaUtensils,
    badge: "Web Application",
    title: "Smart Meal Planner",
    blurb:
      "Calculates your BMR & TDEE from your lifestyle inputs, then serves up a personalized meal plan built around your actual calorie needs — no generic diet charts.",
    tech: ["Flask", "Python", "JavaScript", "MongoDB", "MySQL"],
    links: {
      github: "https://github.com/Srishti620/smart-meal-planner",
      live: "https://ai-based-smart-meal-planner.netlify.app",
    },
  },
  {
    icon: FaGraduationCap,
    badge: "CRUD Application",
    title: "Student Management System",
    blurb:
      "A clean CRUD app for student records with a normalized MySQL schema, quick search-by-ID lookup, and validated update/delete flows so bad data never sneaks in.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    links: { github: "https://github.com/Srishti620" },
  },
];

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`
        flex flex-col justify-between rounded-[30px] border border-pink-200
        bg-white/60 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(214,106,150,.1)]
        transition-all duration-700 ease-out hover:-translate-y-2 hover:border-pink-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-200 bg-[#FFF5FA]">
          <Icon className="text-xl text-[#EC4899]" />
        </div>

        <p className="mb-3 text-xs uppercase tracking-[4px] text-[#B06B93]">
          {project.badge}
        </p>

        <h2 className="font-serif text-3xl leading-tight text-[#1b1b1b]">
          {project.title}
        </h2>

        <p className="mt-5 leading-7 text-[#5a5560]">{project.blurb}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-pink-100 bg-[#FFF8FC] px-4 py-2 text-sm text-[#8C5B72]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#EC4899] px-5 py-3 text-white transition hover:scale-105 hover:bg-[#D66A96]"
          >
            <FaGithub /> GitHub
          </a>
        )}

        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-pink-300 bg-white px-5 py-3 text-[#1b1b1b] transition hover:scale-105"
          >
            <FaExternalLinkAlt className="text-xs" /> Live
          </a>
        )}

        {project.links.note && (
          <p className="flex items-center gap-2 text-sm text-[#8C5B72]">
            <FaLock className="text-xs" /> {project.links.note}
          </p>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen overflow-hidden bg-[#FFF3F8]/95 px-6 py-28 md:px-16"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f8dce8_1px,transparent_1px),linear-gradient(to_bottom,#f8dce8_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-pink-200 opacity-40 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-200 opacity-30 blur-[140px] pointer-events-none"></div>

      <div className="absolute left-20 top-24 text-2xl text-pink-400 pointer-events-none">✦</div>
      <div className="absolute right-28 bottom-40 text-lg text-pink-300 pointer-events-none">✦</div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 uppercase tracking-[5px] text-[#EC4899]">Projects</p>

          <h1 className="font-serif text-6xl leading-[0.95] text-[#1b1b1b] md:text-[100px]">
            My <span className="text-[#EC4899]">Work</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            Five projects, one recurring theme — turning a slightly annoying
            real-world problem into something that just works, end to end.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
