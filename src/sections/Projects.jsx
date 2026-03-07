import { useEffect, useMemo, useRef, useState } from "react";
import img1 from "../assets/img1.png";

import img3 from "../assets/img3.jpeg";
import photo1 from "../assets/photo1.png";

import photo3 from "../assets/photo3.jpg";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

/* -------------------- MOBILE DETECTION HOOK -------------------- */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

/* -------------------- PROJECTS SECTION -------------------- */
export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "AI ChatBot",
        link: "https://aikare-ai.vercel.app/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "SafeMiles",
        link: "https://sarthi-chi.vercel.app/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const threshold = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshold.findIndex((t) => v <= t);
    const nextIndex = idx === -1 ? threshold.length - 1 : idx;

    setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      {/* ---------------- STICKY CONTENT ---------------- */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* SECTION TITLE */}
        <h2 className={`text-3xl font-semibold z-20 ${isMobile ? "mt-4" : "mt-8"}`}>
          My Work
        </h2>

        {/* PROJECT SLIDES */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`italic font-semibold text-[clamp(2rem,6vw,5rem)] text-white/95 ${
                      isMobile ? "-mt-24 text-center" : "absolute -top-20 left-0"
                    }`}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* IMAGE CARD */}
              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl ${
                  isMobile ? "rounded-lg h-[62vh]" : "rounded-xl h-[66vh]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ VIEW PROJECT BUTTON (FIXED POSITION) */}
        <motion.a
          key={activeProject.title}
          href={activeProject.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute z-30 ${
            isMobile ? "bottom-20" : "bottom-10"
          } inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200`}
        >
          View Project
        </motion.a>
      </div>
    </section>
  );
}
