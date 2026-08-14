import { FiArrowUpRight } from "react-icons/fi";
import { TbInfinity } from "react-icons/tb";

export default function About() {
  const stats = [
    { value: "$8M+", label: "MONEY RAISED" },
    { value: "400+", label: "OUR CLIENT" },
    { value: "12+",  label: "UNICORN AWARD" },
    { value: "4.250+", label: "PROJECT COMPLETE" },
  ];

  return (
    <section
      className="py-10 px-6"
      style={{ background: "var(--color-background)" }}
      id="about"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Top Row ── */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">

          {/* Left: Heading + Icon */}
          <div className="flex items-center gap-4">
            <h2
              className="text-4xl font-black tracking-tight lg:text-6xl xl:text-7xl"
              style={{ color: "var(--color-text)" }}
            >
              Why Us?
            </h2>
            <TbInfinity
              className="text-5xl lg:text-6xl xl:text-7xl shrink-0"
              style={{ color: "var(--color-primary-500)" }}
            />
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col items-start gap-6">
            <p
              className="text-sm leading-7 md:text-base md:leading-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              Total Of All Clients Around The World Who Have Collaborated With
              Us. We Have Received Various Awards With Prayers And Efforts
            </p>
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                rounded-full
                px-6 py-3
                text-sm font-semibold
                text-black
                transition-all duration-300
                hover:scale-105
                whitespace-nowrap
              "
              style={{ background: "var(--color-primary-400)" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--color-primary-500)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--color-primary-400)"}>

              Begin Your Journey
              <FiArrowUpRight className="ml-1.5 text-lg font-bold" />
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        {/* <div
          className="mb-14 h-px w-full"
          style={{ background: "var(--color-border)" }}
        /> */}

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span
                className="text-2xl font-black tracking-tight lg:text-5xl xl:text-6xl"
                style={{ color: "var(--color-text)" }}
              >
                {item.value}
              </span>
              <span
                className="text-xs font-semibold tracking-[0.2em]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}