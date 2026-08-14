// ==========================================================
// Home / Hero Section
// Inspired by your reference
// ==========================================================

import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden  text-text">
      {/* ===============================
            Background Glow
      =============================== */}
      <div
        className="hidden absolute inset-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          ellipse 70% 50% at 50% 50%,
          rgba(229,255,31,0.20) 0%,
          rgba(229,255,31,0.08) 26%,
          #050505 70%
        )
      `,
        }}
      />

      {/* ===============================
            Hero Content
      =============================== */}

<div className="relative mx-auto px-6 max-w-4xl flex flex-col items-center text-center pt-5 sm:pt-24 lg:pt-28">   
  

        {/* Small Badge */}

        {/* <div className="mb-8 rounded-full border border-border bg-background-card px-5 py-2">
          <p className="text-sm tracking-[0.25em] uppercase text-primary">
            Available For Work
          </p>
        </div> */}

        {/* Main Heading */}

        <h1
          className="max-w-5xl text-3xl font-black leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[100px] text-center ">
          Driving Growth With Tailored Digital Solutions
        </h1>

        {/* Description */}

        <p
          className="mt-6 max-w-[700px] px-4 text-center text-sm leading-7 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-8 text-text-muted lg:text-lg xl:mt-10">
          where we specialize in transforming your brand's vision into reality
          with innovative and effective digital solutions.{" "}
        </p>

        {/* Buttons */}

        <div className="mt-6 flex flex-col gap-5 sm:flex-row">
          {/* <a
            href="#projects"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-primary
              px-8
              py-4
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
            "
          >
            View Projects

            <FaArrowRight />
          </a> */}

          <a
            href="#contact"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-black shadow-lg transition-all duration-300 whitespace-nowrap rounded-full bg-primary-400 px-5 py-2.5 sm:px-7 sm:py-3 lg:px-8 lg:py-3 hover:scale-105 hover:bg-primary-500">
            Begin Your Project{" "}
            <span className="ml-1 ">
              <FiArrowUpRight className="font-bold text-xl" />
            </span>
          </a>
        </div>

        {/* Bottom Statistics */}
      </div>
    </section>
  );
}
