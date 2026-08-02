import { useEffect, useState } from "react";

function Intro() {
  // phase: "name" -> just showing the name
  //        "rising" -> curtain lifting away
  //        "done" -> removed from the DOM entirely
  const [phase, setPhase] = useState("name");

  useEffect(() => {
    const riseTimer = setTimeout(() => setPhase("rising"), 1900);
    const doneTimer = setTimeout(() => setPhase("done"), 3100);

    return () => {
      clearTimeout(riseTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-gradient-to-br from-[#FCE4EF] via-[#F6D9EE] to-[#E6D7F5]
        transition-transform duration-[1100ms]
        ${phase === "rising" ? "-translate-y-full" : "translate-y-0"}
      `}
      style={{ transitionTimingFunction: "cubic-bezier(0.83, 0, 0.17, 1)" }}
    >
      <div className="text-center px-6">
        <p
          className="
            uppercase tracking-[6px] md:tracking-[10px]
            text-xs md:text-base text-[#B06B93] mb-5
            opacity-0 animate-[fadeIn_0.8s_ease_0.2s_forwards]
          "
        >
          Welcome to the portfolio 
        </p>

        <h1
          className="
            text-5xl md:text-8xl font-black
            tracking-[-2px] text-[#8C4B6B]
            opacity-0 animate-[fadeInUp_1s_ease_0.5s_forwards]
          "
        >
          Srishti Sehgal
        </h1>

        <div
          className="
            w-16 h-[3px] bg-[#D66A96] mx-auto mt-7 rounded-full
            opacity-0 animate-[fadeIn_0.8s_ease_1.1s_forwards]
          "
        ></div>
      </div>
    </div>
  );
}

export default Intro;
