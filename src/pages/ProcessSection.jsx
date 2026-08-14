import { HiOutlineRocketLaunch, HiOutlineArrowPath } from "react-icons/hi2";
import { TbBulb } from "react-icons/tb";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi";

const process = [
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Buy Plan To Get Started",
    description:
      "Submit as many design tasks as you need without worrying about individual project fees.",
  },
  {
    icon: <TbBulb />,
    title: "Polished designs - on time",
    description:
      "Our designers get to work to deliver your request. Receive your design within a few days.",
  },
  {
    icon: <HiOutlineArrowPath />,
    title: "Revisions made simple",
    description:
      "Custom designs, prompt replies and as many revisions as you need.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-background text-text py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <h2 className="text-center font-bold leading-tight text-[38px] md:text-[52px] md:text-[60px] tracking-[-2px] max-w-5xl mx-auto">
          We didn’t reinvent the wheel.
          <br />
          Just develop.
        </h2>

        {/* ================= Desktop ================= */}

        <div className="hidden md:flex justify-between items-start mt-20 relative">
          {process.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[31%]"
            >
              {/* Line */}

              {index !== process.length - 1 && (
                <div className="absolute top-8 lg:left-[62%] md:left-[68%] flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>

                  <div className="lg:w-70 md:w-30 h-[2px] bg-primary-500 mx-2"></div>

                  {/* Arrow */}
                  <HiOutlineArrowRight
                    className="text-primary-500 text-xl  shrink-0"
                    strokeWidth={2.5}
                  />
                </div>
              )}

              {/* Icon */}

              <div className="w-20 h-20  rounded-full bg-surface flex items-center justify-center text-primary-500 text-4xl">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 font-semibold text-[26px] text-center">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-text-muted text-[17px] leading-8 text-center max-w-[320px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= Mobile ================= */}

        <div className="md:hidden mt-16 flex flex-col gap-16">
          {process.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary-500 text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-[15px] leading-7 text-[#9b9b9b] max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
