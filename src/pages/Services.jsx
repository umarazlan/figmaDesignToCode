// Services.jsx
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    number: "1.",
    title: "Website Development",
    description:
      "Self-service data analytics software that you create only visually appealing data visualizations.",
    defaultOpen: true,
  },
  { number: "2.", title: "Paid User Acquisition",     description: "Strategic paid campaigns across search, social, and display to drive qualified traffic and maximize your ROI.", defaultOpen: false },
  { number: "3.", title: "Creative Design Solution",  description: "End-to-end creative direction — from brand identity to UI/UX — crafted to make your product unforgettable.", defaultOpen: false },
  { number: "4.", title: "Influencer Marketing",      description: "Connect with the right voices in your niche to build authentic awareness and accelerate audience growth.", defaultOpen: false },
  { number: "5.", title: "UGC Content Creation",      description: "User-generated content strategies that build trust, drive conversions, and keep your community engaged.", defaultOpen: false },
];

// const ArrowIcon = ({ diagonal = false }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
//     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//     {diagonal
//       ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />
//       : <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
//     }
//   </svg>
// );
const DiscoverIcon = () => <FiArrowUpRight size={16} />;

import { useState } from "react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="py-20 px-5 md:px-10 lg:px-16"
      style={{ backgroundColor: "var(--color-background)" }}
      id="services"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Top block ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 items-start">

          {/* Left: big headline */}
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Innovative digital solutions tailored to your success
          </h2>

          {/* Right: description + discover CTA */}
          <div className="flex flex-col gap-6 md:pt-2">
            <p
              className="text-sm leading-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Simplified Marketing Strategy. Ultraclose Is A One-Stop Shop That
              Provides Your Company With Skilled Marketing Staff, Expertise And
              Resources For Endless Development That Impacts The Business
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-background)",
                borderRadius: "999px",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--color-accent)"}
            >
              Discover <DiscoverIcon />
            </a>
          </div>
        </div>

        {/* ── Service rows ── */}
        <ul>
          {services.map((svc, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={svc.title}
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 text-left transition-colors duration-150 group"
                  style={{ backgroundColor: "transparent" }}
                >
                  {/* Title row */}
                  <span
                    className="text-base md:text-lg font-semibold transition-colors duration-150"
                    style={{ color: isOpen ? "var(--color-text)" : "var(--color-text-secondary)" }}
                  >
                    <span style={{ color: "var(--color-text-muted)", marginRight: "8px" }}>
                      {svc.number}
                    </span>
                    {svc.title}
                  </span>

                  {/* Arrow button */}
                 <div
  className="w-10 h-10 flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-300 group-hover:scale-110"
  style={{
    backgroundColor: isOpen ? "var(--color-accent)" : "transparent",
    border: isOpen ? "none" : "1px solid var(--color-border-light)",
    borderRadius: "50%",
    color: isOpen
      ? "var(--color-background)"
      : "var(--color-text-muted)",
  }}
>
  {isOpen ? (
    <FiArrowUpRight size={18} />
  ) : (
    <FiArrowRight size={18} />
  )}
</div>
                </button>

                {/* Expandable description */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "120px" : "0px" }}
                >
                  <p
                    className="pb-5 text-sm leading-6 max-w-xl"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {svc.description}
                  </p>
                </div>
              </li>
            );
          })}

          {/* closing border */}
          <li style={{ borderTop: "1px solid var(--color-border)" }} />
        </ul>

      </div>
    </section>
  );
}