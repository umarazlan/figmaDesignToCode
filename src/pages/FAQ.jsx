// FAQ.jsx
import { useState } from "react";

const faqs = [
  {
    question: "Why is digital Service important for my business?",
    answer:
      "Digital Solutions allows businesses to reach and engage with a wider audience, generate leads, drive Sales, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How can digital Solution help improve my website's visibility?",
    answer:
      "Digital Solutions allows businesses to reach and engage with a wider audience, generate leads, drive Sales, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How long does it take to see results from digital Services efforts?",
    answer:
      "Results vary depending on the strategy and goals, but most businesses begin to see meaningful improvements within 3–6 months of consistent digital marketing efforts.",
  },
  {
    question: "How do you measure the success of digital Service?",
    answer:
      "We use key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, ROI, and engagement metrics to measure and report on campaign success.",
  },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // "How can digital Solution..." open by default

  return (
    <section
      className="py-16 px-5 sm:px-8 lg:px-14"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Hero heading ── */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            Let's Works Together<br />
            Let's{" "}
            <span style={{ color: "var(--color-accent)" }}>Creative.</span>
          </h1>

          {/* CTA button */}
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-background)",
                borderRadius: "999px",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--color-accent)"}
            >
              Start a Project
              <span
                className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderRadius: "50%",
                  color: "var(--color-accent)",
                }}
              >
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-12" style={{ borderTop: "1px solid var(--color-border)" }} />

        {/* ── Two-column layout: left info + right accordion ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── Left: FAQ title + description + CTA ── */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
            >
              Webilo Digital Solutions FAQs
            </h2>

            <p
              className="text-sm leading-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              As a leading digital marketing agency, we are dedicated to providing
              comprehensive educational resources and answering frequently asked
              questions.
            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "999px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-background)";
                  e.currentTarget.style.border = "1px solid var(--color-accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-text)";
                  e.currentTarget.style.border = "1px solid var(--color-border-light)";
                }}
              >
                View all insight
                <span
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    borderRadius: "50%",
                    color: "var(--color-background)",
                  }}
                >
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>

          {/* ── Right: FAQ accordion ── */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className="text-sm sm:text-base font-semibold leading-snug"
                      style={{ color: "var(--color-text)" }}
                    >
                      {faq.question}
                    </span>

                    {/* + / − icon */}
                    <span
                      className="flex-shrink-0 text-xl font-light mt-0.5 leading-none"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <p
                      className="pb-5 text-sm leading-6"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* bottom border */}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>

        </div>
      </div>
    </section>
  );
}