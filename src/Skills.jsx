function Skills() {

  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Java",
    "MySQL",
    "VS Code",
    "Vercel",
    "Netlify",
    "Web Design"
  ]

  return (

<section
id="skills"
className="min-h-screen bg-[#AFC3D9] px-6 md:px-16 py-24 overflow-hidden relative">

<div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F6F1E8] opacity-30 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#E8D1C5] opacity-30 rounded-full blur-3xl"></div>

<div className="max-w-7xl mx-auto relative z-10">

<p
className="uppercase tracking-[5px] text-sm text-[#4E6175] mb-5">
Skills & Tools
</p>

<h1
className="text-[90px] md:text-[150px] font-black leading-[0.8] tracking-[-9px] text-black">
SKILL

SET
</h1>

<p
className="mt-8 text-lg leading-9 text-[#222] max-w-2xl">
Technologies and tools I use while building
modern websites, interfaces and full-stack
applications.
</p>

<div
className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{skills.map((skill, index) => (

<div
key={index}
className={`
p-8
rounded-[35px]
border-2
border-black
shadow-lg
hover:-translate-y-2
hover:rotate-0
transition
duration-300
cursor-default

${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}

${index % 4 === 0 ? "bg-[#F6F1E8]" : ""}
${index % 4 === 1 ? "bg-[#E8D1C5]" : ""}
${index % 4 === 2 ? "bg-[#D9D1A7]" : ""}
${index % 4 === 3 ? "bg-white" : ""}
`}
>

<p
className="text-[55px] font-black text-[#d6d0c7] leading-none">
{index + 1}
</p>

<h2
className={`
text-3xl
font-black
tracking-[-1px]
mt-3

${skill === "React.js" ? "!text-cyan-600" : ""}
${skill === "JavaScript" ? "!text-yellow-600" : ""}
${skill === "HTML" ? "!text-orange-600" : ""}
${skill === "CSS" ? "!text-blue-600" : ""}
${skill === "Tailwind CSS" ? "!text-sky-500" : ""}
${skill === "Node.js" ? "!text-green-700" : ""}
${skill === "Express.js" ? "!text-gray-700" : ""}
${skill === "MongoDB" ? "!text-green-600" : ""}
${skill === "Git & GitHub" ? "!text-black" : ""}
${skill === "Java" ? "!text-amber-700" : ""}
${skill === "MySQL" ? "!text-teal-700" : ""}
${skill === "VS Code" ? "!text-blue-700" : ""}
${skill === "Vercel" ? "!text-black" : ""}
${skill === "Netlify" ? "!text-emerald-600" : ""}
${skill === "Web Design" ? "!text-pink-600" : ""}
`}
>
{skill}
</h2>

<p
className="mt-4 leading-7 text-[#444]">
Experience working with {skill}
while building modern and responsive
web applications.
</p>

</div>

))}

</div>

</div>

</section>

)
}

export default Skills