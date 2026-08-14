import React from "react";
import project1 from "../assets/project-1.jpg"
import project2 from "../assets/project-2.jpg"
import project3 from "../assets/project-3.jpg"
import project4 from "../assets/project-4.jpg"

const theme = {
  primary500: "#E5FF1F",
  accentHover: "#D7F014",
  background: "#050505",
  backgroundCard: "#111111",
  border: "#262626",
  textMuted: "#9A9A9A",
  textSecondary: "#D6D6D6",
};

const projects = [
  {
    title: "MyCard - Money manager",
    meta: "2024 • Mobile app",
    seed: "mycard-workspace",
    image: project1, // Add this
  },
  {
    title: "Lumen - Smart lighting",
    meta: "2024 • Web app",
    seed: "lumen-studio",
    image: project2, // Add this
  },
      {
        title: "Verve - Fitness coach",
        meta: "2023 • Mobile app",
        seed: "verve-fitness",
        image: project3, // Add this
      },
    {
      title: "Northwind - E-commerce",
      meta: "2023 • Web app",
      seed: "northwind-shop",
      image: project4, // Add this
    }
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

// function ProjectCard({ title, meta, seed }) {
//   return (
//     <div
//       className="relative overflow-hidden w-full rounded-2xl"
//       style={{
//         backgroundColor: theme.backgroundCard,
//         aspectRatio: "16 / 7",
//       }}
//     >
//       {/* Background image */}
//       <img
//         src={`https://picsum.photos/seed/${seed}/1920/840`}
//         alt={title}
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark gradient overlay — bottom only */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.88) 100%)",
//         }}
//       />

//       {/* Bottom-left: title + meta */}
//       <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-8 md:left-12 md:bottom-10 z-10">
//         <p className="text-white text-base sm:text-xl md:text-2xl font-semibold mb-1">
//           {title}
//         </p>
//         <p className="text-xs sm:text-sm md:text-base" style={{ color: theme.textMuted }}>
//           {meta}
//         </p>
//       </div>
      
//       {/* Bottom-right: arrow button */}
//       <button
//         aria-label={`View ${title} case study`}
//         className="
//           absolute right-6 bottom-6
//           sm:right-10 sm:bottom-8
//           md:right-12 md:bottom-10
//           z-10
//           w-9 h-9
//           sm:w-13 sm:h-13
//           md:w-16 md:h-16
//           rounded-full
//           flex items-center justify-center
//           transition-all duration-200
//           hover:scale-105
//         "
//         style={{ backgroundColor: theme.primary500 }}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.accentHover)}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary500)}
//       >
//         <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
//       </button>
//     </div>
//   );
// }
// function ProjectCard({ title, meta, seed }) {
//   return (
//     <div
//       className="project-card relative overflow-hidden w-full rounded-2xl"
//       style={{ backgroundColor: theme.backgroundCard }}
//     >
//       <img
//         src={`https://picsum.photos/seed/${seed}/1920/840`}
//         alt={title}
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ zIndex: 1 }}
//       />
//       <div
//         className="absolute inset-0"
//         style={{
//           zIndex: 2,
//           background:
//             "linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.88) 100%)",
//         }}
//       />
//       <div
//         className="absolute left-4 bottom-4 sm:left-8 sm:bottom-6 md:left-12 md:bottom-10"
//         style={{ zIndex: 3 }}
//       >
//         <p className="text-white text-sm sm:text-xl md:text-2xl font-semibold mb-1">
//           {title}
//         </p>
//         <p className="text-xs sm:text-sm md:text-base" style={{ color: theme.textMuted }}>
//           {meta}
//         </p>
//       </div>
//       <button
//         aria-label={`View ${title} case study`}
//         className="
//           absolute right-4 bottom-4
//           sm:right-8 sm:bottom-6
//           md:right-12 md:bottom-10
//           w-10 h-10
//           sm:w-12 sm:h-12
//           md:w-16 md:h-16
//           rounded-full
//           flex items-center justify-center
//           transition-transform duration-200
//           hover:scale-105
//         "
//         style={{ zIndex: 3, backgroundColor: theme.primary500 }}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.accentHover)}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary500)}
//       >
//         <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-black" />
//       </button>
//     </div>
//   );
// }
function ProjectCard({ title, meta, seed , image}) {
  return (
    <div
      className="project-card relative overflow-hidden w-full rounded-2xl"
      style={{ backgroundColor: theme.backgroundCard }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />

      {/* Gradient — stronger on mobile */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.95) 100%)",
        }}
      />

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 sm:px-8 sm:pb-6 md:px-12 md:pb-10"
        style={{ zIndex: 3 }}
      >
        {/* Title + meta */}
        <div className="flex flex-col gap-1">
          <p
            className="text-white font-semibold leading-snug text-base sm:text-lg md:text-2xl"
          >
            {title}
          </p>
          <p
            className="text-xs sm:text-sm md:text-base"
            style={{ color: theme.textMuted }}
          >
            {meta}
          </p>
        </div>

        {/* Arrow button */}
        <button
          aria-label={`View ${title} case study`}
          className="
            shrink-0 ml-4
            rounded-full
            flex items-center justify-center
            transition-transform duration-200
            hover:scale-105
            w-10 h-10
            sm:w-12 sm:h-12
            md:w-16 md:h-16
          "
          style={{ backgroundColor: theme.primary500 }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.accentHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary500)}
        >
          <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-black" />
        </button>
      </div>
    </div>
  );
}

// export default function ProjectsSection() {
//   return (
//     <section
//       className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: theme.background }}
//     >
//       <div className="mx-auto max-w-15xl">

//         {/* ── Section Header ── */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-16 mb-12 md:mb-16">
//   <h2
//     className="text-white text-4xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-lg"
//   >
//     Real-world examples of how we have helped companies achieve their Goals.
//   </h2>

//   {/* Right: para + button stacked */}
//   <div className="flex flex-col  items-start gap-6 max-w-sm pt-1">
//     <p
//       className="text-sm leading-relaxed"
//       style={{ color: theme.textSecondary }}
//     >
//       Simplified Marketing Strategy. Ultraclose Is A One-Stop Shop That
//       Provides Your Company With Skilled Marketing Staff, Expertise And
//       Resources For Endless Development That Impacts The Business
//     </p>

//     <button
//       className="
//         inline-flex items-center gap-2
//         rounded-full
//         px-6 py-3
//         text-sm font-semibold
//         text-black
//         transition-all duration-200
//         hover:scale-105
//       "
//       style={{ backgroundColor: theme.primary500 }}
//       onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.accentHover)}
//       onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary500)}
//     >
//       Discover
//       <ArrowIcon className="w-3.5 h-3.5 text-black" />
//     </button>
//   </div>
// </div>
//         <div className="space-y-4 sm:space-y-5 md:space-y-6">
//   {projects.map((p) => (
//     <ProjectCard key={p.seed} {...p} />
//   ))}
// </div>

//       </div>
//     </section>
//   );
// }
export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .project-card { aspect-ratio: 5 / 4; }
        @media (min-width: 640px) { .project-card { aspect-ratio: 16 / 9; } }
        @media (min-width: 1024px) { .project-card { aspect-ratio: 16 / 7; } }
      `}</style>

      <section
        className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: theme.background }}
      >
        <div className="mx-auto max-w-6xl">

          {/* ── Section Header ── */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 mb-12 md:mb-16">
            <h2 className="text-white text-4xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-lg">
              Real-world examples of how we have helped companies achieve their Goals.
            </h2>
            <div className="flex flex-col items-start  gap-6 max-w-sm pt-1">
              <p className="text-sm leading-relaxed" style={{ color: theme.textSecondary }}>
                Simplified Marketing Strategy. Ultraclose Is A One-Stop Shop That
                Provides Your Company With Skilled Marketing Staff, Expertise And
                Resources For Endless Development That Impacts The Business
              </p>
              <button
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: theme.primary500 }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.accentHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary500)}
              >
                Discover
                <ArrowIcon className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>

          {/* ── Project Cards ── */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {projects.map((p) => (
              <ProjectCard key={p.seed} {...p} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

