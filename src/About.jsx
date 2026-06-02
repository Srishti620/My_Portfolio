function About() {
  return (
    <section
      id="about"
      className="
      min-h-screen
      bg-[#B7C9A8]
      px-6
      md:px-16
      py-24
      overflow-hidden
      relative">
<div
className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-20
items-center
"
>

<div>

  <p
    className="
    uppercase
    tracking-[5px]
    text-sm
    text-[#4A5A40]
    mb-5
    "
  >
    About Me
  </p>
<h1
  className="
  text-[90px]
  md:text-[140px]
  font-black
  leading-[0.78]
  tracking-[-8px]
  text-black
  "
>
  ABOUT
  <br />
  ME
</h1>
<div
  className="
  mt-10
  bg-[#F6F1E8]
  p-8
  rounded-[35px]
  rotate-[-2deg]
  border-2
  border-black
  shadow-xl">
<p className="text-lg leading-9 text-[#222]">
  I’m a Computer Science student passionate
  about building visually appealing and
  user-friendly web experiences.
</p>

</div>
   </div>
<div className="space-y-8">
 <div
    className="
    bg-[#F6F1E8]
    p-8
    rounded-[35px]
    border-2
    border-black
    rotate-[2deg]">

<h2
  className="
  text-3xl
  font-black
  mb-5
  tracking-[-2px]">
  Design Philosophy
</h2>

<p className="text-lg leading-9 text-[#333]">
  I enjoy creating clean, minimal and modern
  interfaces that feel balanced, aesthetic
  and easy to use.
</p>

</div>
<div
className="
bg-[#AFC3D9]
p-8
rounded-[35px]
border-2
border-black
rotate-[-2deg]">
  <h2
  className="
  text-3xl
  font-black
  mb-5
  tracking-[-2px]
  "
>
  Currently Exploring
</h2>

<p className="text-lg leading-9 text-[#222]">
  React, JavaScript, backend technologies,
  UI/UX design systems and full-stack
  development.
</p>

</div>
<div
className="
bg-[#E8D1C5]
p-8
rounded-[35px]
border-2
border-black
rotate-[1deg]">

<h2
className="
text-3xl
font-black
mb-5
tracking-[-2px]">
Goal
</h2>

<p className="text-lg leading-9 text-[#222]">
  To become a creative developer who can
  combine functionality with visually strong
  digital experiences.
</p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About