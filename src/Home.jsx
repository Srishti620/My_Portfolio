function Home() {
  return (

<section
id="home"
className=" min-h-screen bg-[#D9B8A7] px-6 md:px-16
py-20 overflow-hidden relative flex items-center"> 

<div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#B7C9A8] opacity-30 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#C78F84] opacity-40 rounded-full blur-3xl"></div>

<div
className=" max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10
items-center relative z-10"> 
<div className="relative flex justify-center lg:justify-start">

<div
className="relative bg-[#B7C9A8] p-3 rounded-[40px] shadow-2xl">
<h1
className="absolute text-[130px] font-black opacity-10 top-2 left-1/2 -translate-x-1/2
select-none text-black "> DEV  </h1>

<img
src="/srishti.jpeg"
alt="Srishti"
className="relative z-10 w-[300px] md:w-[340px] h-[500px] object-cover object-center rounded-[30px]"/>

<div
className="absolute bottom-5 left-5 bg-white px-5 py-3 rounded-2xl shadow-lg z-20">
<p
className="text-sm uppercase tracking-[3px] text-[#666]">
Creative Developer
</p>

</div>

</div>

</div>

<div>

<p
className="uppercase tracking-[5px] text-sm text-[#5C6B5F] mb-5">
Full Stack Developer
</p>

<h1
className="text-[80px] md:text-[140px] font-black leading-[0.85] tracking-[-8px] text-black">
SRISHTI
<br />
SEHGAL
</h1>

<p
className="mt-8 text-lg leading-9 text-[#333] max-w-xl">
I design and build modern websites with
clean interfaces, creative layouts and
smooth user experiences that feel both
aesthetic and functional.
</p>

<div className="flex flex-wrap gap-5 mt-12">

<a href="#projects">

<button
className="
bg-black
text-white
px-8
py-4
rounded-full
hover:scale-105
transition
duration-300
"
>
View Projects
</button>

</a>
<a href="#contact">

<button
className="
bg-[#B7C9A8]
text-black
px-8
py-4
rounded-full
hover:scale-105
transition
duration-300
"
>
Contact Me
</button>

</a>

</div>

</div>

</div>

</section>

)
}

export default Home