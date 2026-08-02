import { motion } from "framer-motion";
import { ArrowBigLeftDash, ArrowBigRightDashIcon, ArrowBigRightIcon, ArrowBigUpDashIcon, ArrowDownCircleIcon, ArrowDownRight } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen overflow-hidden bg-[#FFF8FC]/95"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f8dce8_1px,transparent_1px),linear-gradient(to_bottom,#f8dce8_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-pink-200 blur-[140px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-200 blur-[150px] opacity-30"></div>

      {/* Decorative Stars */}
      <div className="absolute left-20 top-20 text-2xl text-pink-400">
        ✦
      </div>

      <div className="absolute right-28 top-48 text-xl text-pink-300">
        ✦
      </div>

      <div className="absolute bottom-32 left-40 text-lg text-pink-400">
        ✦
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-8 lg:grid-cols-2 lg:px-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6 uppercase tracking-[0.45em] text-[#EC4899]">
            SOFTWARE ENGINEER
          </p>

          <h1 className="font-serif text-[70px] leading-none text-[#1b1b1b] lg:text-[120px]">
            Srishti
          </h1>

          <h1 className="font-serif text-[70px] leading-none text-[#EC4899] lg:text-[120px]">
            Sehgal
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-9 text-[#666]">
            Building modern full-stack applications with React, Node.js,
            Express and MongoDB while creating beautiful user experiences
            through thoughtful design and clean code.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a href="#projects">

              <button className="group rounded-full border border-pink-300 bg-white/70 px-8 py-4 backdrop-blur-xl transition duration-500 hover:bg-[#EC4899] hover:text-white">

                Explore Work

                <ArrowBigRightIcon
                  className="ml-2 inline transition group-hover:translate-x-1"
                  size={18}
                />

              </button>

            </a>

            <a href="/Srishti_Sehgal_Resume.pdf" target="_blank" rel="noopener noreferrer">

              <button className="rounded-full border border-pink-300 px-8 py-4 transition duration-500 hover:bg-white">

                View Resume 
                 <ArrowBigRightIcon
                  className="ml-2 inline transition group-hover:translate-x-1"
                  size={18}
                />

              </button>

            </a>

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Background Frame */}

          {/* <div className="absolute h-[580px] w-[430px] rounded-[50px] border border-pink-200 bg-gradient-to-br from-white/70 via-pink-50 to-purple-50 shadow-[0_25px_80px_rgba(236,72,153,.15)] backdrop-blur-2xl"></div> */}

          {/* Decorative Border */}

          <div className="absolute -left-5 top-12 h-[520px] w-[390px] rounded-[45px] border border-pink-200"></div>

          {/* Image */}

          <motion.img
            whileHover={{
              scale: 1.03,
              rotate: 0,
            }}
            transition={{
              duration: .5
            }}
            src="/srishti.jpeg"
            alt="Srishti"
            className="relative z-20 mt-8 h-[520px] w-[370px] rounded-[40px] object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="absolute -left-8 bottom-12 z-30 rounded-3xl bg-white/80 px-6 py-5 shadow-xl backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[.3em] text-pink-500">
              Currently
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#222]">
             A Full Stack Developer
            </h3>
          </motion.div>

          {/* Floating Circle */}

          <motion.div
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 6
            }}
            className="absolute -right-8 top-10 h-28 w-28 rounded-full border border-pink-300 bg-white/50 backdrop-blur-xl"
          ></motion.div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="mb-3 text-xs uppercase tracking-[.4em] text-pink-500">
          Scroll
        </p>

        <div className="mx-auto h-10 w-[2px] rounded-full bg-pink-300"></div>
      </motion.div>

    </section>
  );
}

export default Home;