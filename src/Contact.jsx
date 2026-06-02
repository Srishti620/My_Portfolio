import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaInstagram
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#AFC3D9] px-6
      md:px-16 py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#E8D1C5] opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F6F1E8] opacity-30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        <p
          className=" uppercase tracking-[5px]
          text-sm  text-[#4E6175]   mb-5"> Contact
        </p>

        <h1
          className="  text-[85px] md:text-[150px]  font-black
          leading-[0.8] tracking-[-9px]  text-black ">
          LET’S
       
          TALK
        </h1>
        <p
          className=" mt-8  text-lg leading-9
          text-[#222] max-w-2xl">  Have an idea, project or collaboration in mind?
                                     Feel free to reach out — I’d love to connect
                                     and create something meaningful together.
        </p>

    <div
          className="  mt-24  grid lg:grid-cols-2
          gap-12  items-center">
<div
className="
bg-[#F6F1E8]
p-10
rounded-[45px]
border-2
border-black
shadow-xl
relative">

<p
    className="
    text-[120px]
    font-black
    leading-none
    text-[#d6d0c7]
    absolute
    top-5
    right-6">
        04
  </p>
<h2
    className="
    text-5xl
    font-black
    tracking-[-3px]
    relative
    z-10
    text-black">  Connect
  </h2>

<div className="mt-10 space-y-6 relative z-10">

<a
href="mailto:srishtisehgal2801@gmail.com"
className="
bg-white
px-6
py-5
rounded-[25px]
border-2
border-black
flex
items-center
gap-5
hover:scale-[1.02]
transition">
<FaEnvelope className="text-2xl text-red-500" />

  <div>
    <p className="text-sm text-[#666]">
      Email
    </p>

    <p className="text-lg text-[#222] break-all">
      srishtisehgal2801@gmail.com
    </p>
  </div>

</a>

<a
href="tel:+919057479018"
className="
bg-[#E8D1C5]
px-6
py-5
rounded-[25px]
border-2
border-black
flex
items-center
gap-5
hover:scale-[1.02]
transition">

<FaPhone className="text-2xl text-green-600" />

<div>
<p className="text-sm text-[#666]">
Phone
</p>

<p className="text-lg text-[#222]">
+91 9057479018
</p>
</div>

</a>

<div
  className="
  bg-[#D9D1A7]
  px-6
  py-6
  rounded-[25px]
  border-2
  border-black" >

  <p
    className="
    uppercase
    text-sm
    tracking-[4px]
    mb-5
    text-[#444]"> Socials
                </p>

<div className="flex gap-5 text-2xl mb-6">

<a
  href="https://www.linkedin.com/in/srishti-sehgal-73726a320"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <FaLinkedin />
</a>
<a
href="https://github.com/Srishti620"
target="_blank"
rel="noopener noreferrer"
className="hover:scale-110 transition"
>
<FaGithub />
</a>
<a
href="https://instagram.com/sri.sehgal"
target="_blank"
rel="noopener noreferrer"
className="hover:scale-110 transition"
>
<FaInstagram />
</a>

</div>

<div className="grid md:grid-cols-2 gap-4">
<a
href="https://www.linkedin.com/in/srishti-sehgal-73726a320"
target="_blank"
rel="noopener noreferrer"
className="
bg-[#0077B5]
text-white
p-5
rounded-[20px]
border-2
border-black
hover:scale-[1.02]
transition"> 
  <p className="text-sm opacity-80">
  LinkedIn
</p>

<h3
  className="
  text-2xl
  font-black
  mt-2">  Connect
</h3>

<p className="mt-2 text-sm opacity-90">
  Let’s connect professionally.
</p>

</a>

<a
href="https://github.com/Srishti620"
      target="_blank"
      rel="noopener noreferrer"
      className="
      bg-black
      text-white
      p-5
      rounded-[20px]
      border-2
      border-black
      hover:scale-[1.02]
      transition">
      <p className="text-sm opacity-80">
        GitHub
      </p>

<h3
className="
text-2xl
font-black
mt-2"> Projects
</h3>

<p className="mt-2 text-sm opacity-90">
Explore my development work.
</p>

                  </a>

                </div>

              </div>

            </div>

          </div>

<div className="relative">

<div
className="
bg-[#D9D1A7]
h-[500px]
rounded-[50px]
border-2
border-black
flex
items-center
justify-center
relative
overflow-hidden">
<h1
className="
text-[120px]
font-black
opacity-10
absolute"> HELLO
</h1>
<div
className="
bg-white
p-10
rounded-[35px]
border-2
border-black
shadow-xl
relative
z-10
text-center" >
<p
className="
text-4xl
font-black
tracking-[-2px]"> Let’s Build
</p>

<p
className="
mt-4
text-[#444]
leading-8">   Creative websites &
modern digital experiences.
</p>
<a
href="/Srishti_Sehgal_Resume.pdf"
className="
inline-block
mt-8
bg-black
text-white
px-8
py-3
rounded-full
hover:scale-105
transition">  View Resume
</a>

</div>

</div>

</div>

</div>

</div>

</section>
);
}

export default Contact;