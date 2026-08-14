// new card code here 
// ProjectsList.jsx
// A minimal list-style projects section matching the dark near-black + neon lime palette

const projects1 = [
  {
    title: "MyCard - Money manager",
    year: "2024",
    category: "Mobile app",
    href: "#",
  },
];

const ArrowIcon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function ProjectsList() {
  return (
    <section
      className="relative  px-6 flex flex-col justify-center"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* ── Heading ── */}
        {/* <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: "var(--color-text-muted)" }}>
            Selected Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold"
            style={{ color: "var(--color-text)" }}>
            Projects
          </h2>
        </div> */}

        {/* ── Project rows ── */}
        <ul>
          {projects1.map((project1, i) => (
            <li
              key={project1.title}
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <a
                href={project1.href}
                className="group flex items-center justify-between py-6 transition-colors duration-200"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "var(--color-surface)";
                  e.currentTarget.style.paddingLeft = "16px";
                  e.currentTarget.style.paddingRight = "16px";
                  e.currentTarget.style.marginLeft = "-16px";
                  e.currentTarget.style.marginRight = "-16px";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.paddingRight = "0";
                  e.currentTarget.style.marginLeft = "0";
                  e.currentTarget.style.marginRight = "0";
                }}
              >
                {/* Left: title + meta */}
                <div>
                  <h3 className="text-xl font-semibold mb-1"
                    style={{ color: "var(--color-text)" }}>
                    {project1.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text-muted)" }}>
                    <span>{project1.year}</span>
                    <span style={{ color: "var(--color-border-light)" }}>•</span>
                    <span>{project1.category}</span>
                  </div>
                </div>

                {/* Right: neon arrow button */}
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    borderRadius: "50%",
                    color: "var(--color-background)",
                  }}
                >
                  <ArrowIcon1 />
                </div>
              </a>
            </li>
          ))}

          {/* closing border */}
          <li style={{ borderTop: "1px solid var(--color-border)" }} />
        </ul>

      </div>
    </section>
  );
}