// // Testimonials.jsx
// import { useState } from "react";

// const testimonials = [
//   {
//     quote: "Fast, reliable, affordable.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Never a downtime. Peace of mind.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Switched to Bytebites. No regrets.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Top-notch support. Always helpful.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Pages load lightning fast!",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Simple setup. Even for beginners.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Security is rock solid. Trustworthy.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Perfect for small businesses.",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
//   {
//     quote: "Goodbye server headaches. Bytebites!",
//     name: "Name Surname",
//     position: "Position, Company name",
//   },
// ];

// const AvatarPlaceholder = () => (
//   <div
//     className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
//     style={{
//       backgroundColor: "var(--color-border-light)",
//       color: "var(--color-text-muted)",
//     }}
//   >
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
//       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
//       <path strokeLinecap="round" strokeLinejoin="round"
//         d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//     </svg>
//   </div>
// );

// const ChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
//     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
//   </svg>
// );

// const ChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
//     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//     <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//   </svg>
// );

// const TestimonialCard = ({ quote, name, position }) => (
//   <div
//     className="flex flex-col justify-between p-6 h-full"
//     style={{
//       backgroundColor: "var(--color-surface)",
//       border: "1px solid var(--color-border)",
//       borderRadius: "12px",
//       minHeight: "180px",
//     }}
//   >
//     <p className="text-lg font-bold leading-snug mb-6"
//       style={{ color: "var(--color-text)", letterSpacing: "-0.01em" }}>
//       {quote}
//     </p>
//     <div className="flex items-center gap-3">
//       <AvatarPlaceholder />
//       <div>
//         <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{name}</p>
//         <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{position}</p>
//       </div>
//     </div>
//   </div>
// );

// const MOBILE_PER_PAGE = 1;

// export default function Testimonials() {
//   const [page, setPage] = useState(0);
//   const totalPages = testimonials.length;

//   const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
//   const next = () => setPage((p) => (p + 1) % totalPages);

//   return (
//     <section
//       className="py-20 px-5 sm:px-8 lg:px-14"
//       style={{ backgroundColor: "var(--color-background)" }}
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* ── Heading ── */}
//         <h2
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-14 leading-tight"
//           style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
//         >
//           What Our Clients Say
//         </h2>

//         {/* ── Desktop: 2-row scrolling grid ── */}
//         <div className="hidden md:block overflow-hidden">
//           {/* Row 1 */}
//           <div className="grid grid-cols-4 gap-4 mb-4">
//             {testimonials.slice(0, 4).map((t, i) => (
//               <TestimonialCard key={i} {...t} />
//             ))}
//           </div>
//           {/* Row 2 — offset left by half a card to match the screenshot */}
//           <div className="grid grid-cols-4 gap-4 -ml-[calc(100%/8+8px)]"
//             style={{ width: "calc(100% + 100%/4 + 16px)" }}>
//             {testimonials.slice(4).map((t, i) => (
//               <TestimonialCard key={i} {...t} />
//             ))}
//           </div>
//         </div>

//         {/* ── Mobile: single card + pagination ── */}
//         <div className="md:hidden flex flex-col gap-6">
//           <TestimonialCard {...testimonials[page]} />

//           {/* Pagination controls */}
//           <div className="flex items-center justify-center gap-4">
//             {/* Prev */}
//             <button
//               onClick={prev}
//               className="w-9 h-9 flex items-center justify-center transition-colors duration-150"
//               style={{
//                 borderRadius: "50%",
//                 border: "1px solid var(--color-border-light)",
//                 color: "var(--color-text-muted)",
//                 backgroundColor: "transparent",
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.backgroundColor = "var(--color-accent)";
//                 e.currentTarget.style.color = "var(--color-background)";
//                 e.currentTarget.style.border = "none";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = "var(--color-text-muted)";
//                 e.currentTarget.style.border = "1px solid var(--color-border-light)";
//               }}
//             >
//               <ChevronLeft />
//             </button>

//             {/* Dots */}
//             <div className="flex items-center gap-1.5">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setPage(i)}
//                   className="transition-all duration-200"
//                   style={{
//                     width: i === page ? "20px" : "6px",
//                     height: "6px",
//                     borderRadius: "999px",
//                     backgroundColor: i === page
//                       ? "var(--color-accent)"
//                       : "var(--color-border-light)",
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Next */}
//             <button
//               onClick={next}
//               className="w-9 h-9 flex items-center justify-center transition-colors duration-150"
//               style={{
//                 borderRadius: "50%",
//                 border: "1px solid var(--color-border-light)",
//                 color: "var(--color-text-muted)",
//                 backgroundColor: "transparent",
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.backgroundColor = "var(--color-accent)";
//                 e.currentTarget.style.color = "var(--color-background)";
//                 e.currentTarget.style.border = "none";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = "var(--color-text-muted)";
//                 e.currentTarget.style.border = "1px solid var(--color-border-light)";
//               }}
//             >
//               <ChevronRight />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// Testimonials.jsx
import { useState } from "react";

const testimonials = [
  { quote: "Fast, reliable, affordable.",           name: "Name Surname", position: "Position, Company name" },
  { quote: "Never a downtime. Peace of mind.",      name: "Name Surname", position: "Position, Company name" },
  { quote: "Switched to Bytebites. No regrets.",    name: "Name Surname", position: "Position, Company name" },
  { quote: "Top-notch support. Always helpful.",    name: "Name Surname", position: "Position, Company name" },
  { quote: "Pages load lightning fast!",            name: "Name Surname", position: "Position, Company name" },
  { quote: "Simple setup. Even for beginners.",     name: "Name Surname", position: "Position, Company name" },
   { quote: "Security is rock solid. Trustworthy.",  name: "Name Surname", position: "Position, Company name" },
   { quote: "Perfect for small businesses.",         name: "Name Surname", position: "Position, Company name" },
//   { quote: "Goodbye server headaches. Bytebites!",  name: "Name Surname", position: "Position, Company name" },
 ];

const AvatarPlaceholder = () => (
  <div
    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
    style={{ backgroundColor: "var(--color-border-light)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
      viewBox="0 0 24 24" stroke="var(--color-text-muted)" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  </div>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const TestimonialCard = ({ quote, name, position, wide = false }) => (
  <div
    className="flex flex-col justify-between p-6 flex-shrink-0"
    style={{
      backgroundColor: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "12px",
      width: wide ? "260px" : "220px",
      minHeight: "180px",
    }}
  >
    <p className="text-base font-bold leading-snug mb-6"
      style={{ color: "var(--color-text)", letterSpacing: "-0.01em" }}>
      {quote}
    </p>
    <div className="flex items-center gap-3">
      <AvatarPlaceholder />
      <div>
        <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{name}</p>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{position}</p>
      </div>
    </div>
  </div>
);

// ── Mobile paginated view ──────────────────────────────────────
function MobileView() {

 const cardsPerPage = 4;
const totalPages = Math.ceil(testimonials.length / cardsPerPage);

const [page, setPage] = useState(0);

const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
const next = () => setPage((p) => (p + 1) % totalPages);

 const visibleTestimonials = testimonials.slice(
  page * cardsPerPage,
  page * cardsPerPage + cardsPerPage
);
  return (
    <div className="flex flex-col gap-6">
      {/* Single card */}
      <div className="flex flex-col gap-6">
  {visibleTestimonials.map((testimonial, index) => (
    <div
      key={index}
      className="flex flex-col justify-between p-6"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        minHeight: "180px",
      }}
    >
      <p
        className="text-xl font-bold leading-snug mb-6"
        style={{ color: "var(--color-text)" }}
      >
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3">
        <AvatarPlaceholder />
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            {testimonial.name}
          </p>

          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center transition-all duration-150"
          style={{
            borderRadius: "50%",
            border: "1px solid var(--color-border-light)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--color-accent)"; e.currentTarget.style.color = "#000"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-text-muted)"; }}
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                backgroundColor: i === page ? "var(--color-accent)" : "var(--color-border-light)",
                transition: "all 0.2s",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center transition-all duration-150"
          style={{
            borderRadius: "50%",
            border: "1px solid var(--color-border-light)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--color-accent)"; e.currentTarget.style.color = "#000"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-text-muted)"; }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

// ── Desktop two-row overflow layout ───────────────────────────
function DesktopView() {
  const row1 = testimonials.slice(0, 4);
  // row2 starts with a partially visible card offset effect
  const row2 = testimonials.slice(4);

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {/* Row 1 — flush left, cards fill full width */}
      <div className="flex gap-4">
        {row1.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-6 flex-1"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              minHeight: "180px",
            }}
          >
            <p className="text-lg font-bold leading-snug mb-6"
              style={{ color: "var(--color-text)", letterSpacing: "-0.01em" }}>
              {t.quote}
            </p>
            <div className="flex items-center gap-3">
              <AvatarPlaceholder />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 — offset left so first card is half-cut, last card half-cut */}
      <div
        className="flex gap-4"
        style={{
          marginLeft: "-120px",
          marginRight: "-120px",
          paddingLeft: "120px",
          paddingRight: "120px",
          overflow: "hidden",
        }}
      >
        {/* extra partial card clone at start */}
        <div
          className="flex flex-col justify-between p-6 flex-shrink-0"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            width: "200px",
            minHeight: "160px",
            opacity: 0.6,
          }}
        >
          <p className="text-base font-bold leading-snug mb-6" style={{ color: "var(--color-text)" }}>
            {row2[row2.length - 1].quote}
          </p>
          <div className="flex items-center gap-3">
            <AvatarPlaceholder />
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--color-text)" }}>{row2[row2.length - 1].name}</p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{row2[row2.length - 1].position}</p>
            </div>
          </div>
        </div>

        {row2.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-6 flex-1"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              minHeight: "160px",
            }}
          >
            <p className="text-base font-bold leading-snug mb-6"
              style={{ color: "var(--color-text)", letterSpacing: "-0.01em" }}>
              {t.quote}
            </p>
            <div className="flex items-center gap-3">
              <AvatarPlaceholder />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-background)", overflow: "hidden" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14">

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 leading-tight"
          style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
        >
          What Our Clients Say
        </h2>

        {/* Desktop */}
        <div className="hidden md:block">
          <DesktopView />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileView />
        </div>

      </div>
    </section>
  );
}