import { BsBuildings } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { FaGoogle, FaMicrosoft, FaLinkedin, FaInstagram, FaApplePay } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si"; // MetalLB is a k8s load balancer
export default function MissionSection() {
  const stats = [
    {
      icon: (
        <BsBuildings
          className="text-4xl"
          style={{ color: "var(--color-primary-500)" }}
        />
      ),
      stat: "120+ Company Trusted",
      desc: "Already working with large, medium and small companies that can be traced in our portfolio",
    },
    {
      icon: (
        <BsBriefcase
          className="text-4xl"
          style={{ color: "var(--color-primary-500)" }}
        />
      ),
      stat: "200% Business Success",
      desc: "Average annual business success growth rate among our clients who have trusted us",
    },
    {
      icon: (
        <BsPeopleFill
          className="text-4xl"
          style={{ color: "var(--color-primary-500)" }}
        />
      ),
      stat: "80% Client Increase",
      desc: "Number of clients at Ultraclose has increased dramatically compared to previous year",
    },
  ];

  const brands = [
    {
      name: "Google+",
      icon: "",
      style: "font-sans font-bold text-lg",
    },
    {
      name: "Microsoft",
      icon: <FaMicrosoft />,
      style: "font-sans font-semibold text-lg",
    },
    {
      name: "MetalLB",
     icon: <SiKubernetes />,
      style: "font-sans font-semibold text-lg",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      style: "font-sans font-bold text-lg",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      style: "font-serif italic text-xl",
    },
    {
      name: "",
      icon: <FaApplePay className="text-6xl" />,
      style: "font-sans font-semibold text-lg",
    },
  ];

  return (
    <section
      className=" lg:block py-20 px-6"
      style={{ background: "var(--color-background)" }}
      id="mission"
    >
      <div className="mx-auto  max-w-6xl">
        {/* ── Top Row: Heading + Description ── */}
        <div className="hidden lg:grid overflow-hidden  mb-14  grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start">
          <h2
            className="text-2xl font-black leading-tight tracking-tight lg:text-4xl"
            style={{ color: "var(--color-text)" }}
          >
            We are on a mission to help your business grow faster than ever
          </h2>
          <p
            className="text-sm leading-7 md:text-base md:leading-8 pt-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            Simplified Marketing Strategy. Ultraclose Is A One-Stop Shop That
            Provides Your Company With Skilled Marketing Staff, Expertise And
            Resources For Endless Development That Impacts The Business
          </p>
        </div>

        {/* ── Stats Cards ── */}
        <div className="hidden lg:grid overflow-hidden mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border p-8 text-center transition-colors duration-300"
              style={{
                background: "var(--color-background-glass)",
                borderColor: "var(--color-border)",
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.borderColor =
            //       "var(--color-border-light)")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.borderColor = "var(--color-border)")
            //   }
            >
              <div>{item.icon}</div>
              <p
                className="text-lg font-bold"
                style={{ color: "var(--color-text)" }}
              >
                {item.stat}
              </p>
              <p
                className="text-sm leading-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        {/* <div
          className="mb-12 h-px w-full"
          style={{ background: "var(--color-border)" }}
        /> */}

        {/* ── Brand Logos ── */}
        {/* <div className="flex flex-wrap items-center justify-between gap-6">
          {brands.map((brand, i) => (
            <span
              key={i}
              className={`${brand.style} flex items-center gap-2 cursor-default transition-colors duration-200`}
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              <span className="text-2xl">{brand.icon}</span>
              {brand.name}
            </span>
          ))}
        </div> */}
        {/* ── Brand Logos Marquee ── */}
<div className="overflow-hidden">
  <div
    className="flex gap-16 w-max"
    style={{
      animation: "marquee 18s linear infinite",
    }}
  >
    {[...brands, ...brands].map((brand, i) => (
      <span
        key={i}
        className={`${brand.style} flex items-center gap-2 cursor-default whitespace-nowrap transition-colors duration-200`}
        style={{ color: "var(--color-text)"}}
        // onMouseEnter={e => e.currentTarget.style.color = "var(--color-text)"}
        // onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-muted)"}
      >
        <span className="text-4xl">{brand.icon}</span>
        {brand.name}
      </span>
    ))}
  </div>
</div>

{/* Add to your index.css or App.css */}
{/* 
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
*/}
      </div>
    </section>
  );
}
