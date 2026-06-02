function Projects() {

  return (

    <section
      id="projects"
      className="
      min-h-screen
      bg-[#D9D1A7]
      px-6
      md:px-16
      py-24
      overflow-hidden
      relative">
    
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#E8D1C5] opacity-40 rounded-full blur-3xl"></div>
     <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F6F1E8] opacity-30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">

   <p
     className="
     uppercase
     tracking-[5px]
     text-sm
     text-[#5A4D44]
      mb-5">     Projects  </p>

  <h1
    className="
   text-[80px]
   md:text-[140px]
   font-black
   leading-[0.85]
   tracking-[-8px]
   text-black">   MY WORK  </h1>

  <p
  className="
   mt-8
   text-lg
   leading-9
  text-[#333]
   max-w-2xl">  A collection of projects where I explore
                full stack development, modern UI design
                and interactive web experiences.    </p>
   <div
    className="
   mt-24
   grid
  lg:grid-cols-3
   gap-8">
  
   <div
     className="
     bg-[#F6F1E8]
      rounded-[35px]
      p-8
     shadow-xl  border-2
     border-black
      hover:-translate-y-2
      transition
      duration-300
      flex flex-col
      justify-between">
  <div>

    <p
    className="
    uppercase
     tracking-[4px]
     text-xs
     text-[#666]
     mb-4"> Full Stack Project  </p>
  <h2
   className="
     text-4xl
      font-black
    leading-tight"> Tasknova </h2>
  <p
   className="
   mt-6
   text-[#444]
   leading-8"> A full-stack task management system
                with authentication, Kanban dashboard,
                reminders and progress tracking. </p>
 <div className="flex flex-wrap gap-3 mt-8">
 <span className="bg-[#E8D1C5] px-4 py-2 rounded-full text-sm">  React </span>
 <span className="bg-[#AFC3D9] px-4 py-2 rounded-full text-sm">  Node  </span>
<span className="bg-[#D9D1A7] px-4 py-2 rounded-full text-sm">  MongoDB </span>

</div>

  </div>
    <div className="flex gap-4 mt-10">
      <a href="https://github.com/Srishti620/tasknova"
         className="
         bg-black
         text-white
           px-5
           py-3
         rounded-full
         hover:scale-105
         transition ">  GitHub </a>
 <a
  href="https://tasknova-zeta.vercel.app"
  className="
  bg-[#AFC3D9]
  text-black
    px-5
    py-3
    rounded-full
    hover:scale-105
    transition "> Live </a>

</div>

  </div>
     <div
       className="
       bg-[#E8D1C5]
       rounded-[35px]
        p-8
       shadow-xl
        border-2
       border-black
       hover:-translate-y-2
       transition
       duration-300
       flex
      flex-col
     justify-between ">
  <div>
<p
 className="
 uppercase
 tracking-[4px]
 text-xs
text-[#666]
 mb-4 "> Web Application </p>

<h2
className="
text-4xl
font-black
leading-tight ">  Smart Meal Planner </h2>
  <p
    className="
    mt-6
   text-[#444]
    leading-8"> Generates personalized meal plans
                based on calorie needs and
                user preferences. </p>
 <div className="flex flex-wrap gap-3 mt-8">
 <span className="bg-white px-4 py-2 rounded-full text-sm"> Flask </span>
<span className="bg-[#AFC3D9] px-4 py-2 rounded-full text-sm"> JavaScript </span>
<span className="bg-[#D9D1A7] px-4 py-2 rounded-full text-sm"> MySQL </span>

     </div>
 </div>
  <div className="flex gap-4 mt-10">
     <a
       href="https://github.com/Srishti620/smart-meal-planner"
      className="
       bg-black
       text-white
       px-5
       py-3
       rounded-full
       hover:scale-105
        transition"> GitHub </a>
  <a
    href="https://ai-based-smart-meal-planner.netlify.app"
    className="
    bg-white
     text-black
    px-5
    py-3
    rounded-full
   transition"> Live </a>

</div>
   </div>

<div
className="
bg-[#AFC3D9]
rounded-[35px]
p-8
shadow-xl
border-2
border-black
hover:-translate-y-2
transition
duration-300
flex
flex-col
justify-between">
  
  <div>
     <p
      className="
      uppercase
      tracking-[4px]
     text-xs
    text-[#666]
     mb-4 "> CRUD Application </p>
<h2
className="
text-4xl
font-black
leading-tight "> Student  Management </h2>

<p
className="
mt-6
text-[#444]
leading-8 "> CRUD-based system for managing
                student records and maintaining
                structured data efficiently.  </p>
<div className="flex flex-wrap gap-3 mt-8">
<span className="bg-white px-4 py-2 rounded-full text-sm"> HTML </span>
<span className="bg-[#F6F1E8] px-4 py-2 rounded-full text-sm"> CSS </span>
<span className="bg-[#E8D1C5] px-4 py-2 rounded-full text-sm"> MySQL </span>

</div>
</div>
<div className="flex gap-4 mt-10">
<a
href="https://github.com/Srishti620"
className="bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition ">  GitHub </a>
<a
href="#"
className="bg-white text-black px-5 py-3 rounded-full hover:scale-105 transition">
                Live
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Projects