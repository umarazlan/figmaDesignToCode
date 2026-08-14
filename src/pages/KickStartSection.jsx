import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const steps = [
  {
    step: "Step1",
    title: "Information",
  },
  {
    step: "Step2",
    title: "Requirements",
  },
  {
    step: "Step3",
    title: "Budget & time",
  },
  {
    step: "Step4",
    title: "Contact Information",
  },
];

const industries = [
  "FinTech",
  "Automobile",
  "Industrial",
  "Manufacturing",
  "Tech",
  "Ecommerce",
];

const projectStates = ["Idea", "MVP", "Prototype", "Designed Solution"];

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
      h-[40px]
      px-5
      rounded-full
      text-[14px]
      transition-all
      duration-200
      border
      whitespace-nowrap
      ${
        active
          ? "bg-[#E7FF2B] text-black border-[#E7FF2B]"
          : "bg-transparent text-white border-[#8A8A8A] hover:border-white"
      }
      `}
    >
      {children}
    </button>
  );
}

function StepCard({ active, step, title }) {
  return (
    <div className="flex-1 min-w-[150px] lg:min-w-0 px-5 py-5 relative border-r border-[#555555] last:border-r-0">
      <div
        className={`absolute left-5 right-5 top-0 h-[3px] rounded-full ${
          active ? "bg-[#E7FF2B]" : "bg-[#595959]"
        }`}
      />

      <p
        className={`mt-3 text-[12px] font-bold uppercase tracking-wider ${
          active ? "text-[#E7FF2B]" : "text-[#A3A3A3]"
        }`}
      >
        {step}
      </p>

      <p
        className={`text-[14px] mt-1 ${
          active ? "text-white" : "text-[#9A9A9A]"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default function KickstartForm() {
   const [currentStep, setCurrentStep] = useState(0);
  // const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [industry, setIndustry] = useState("FinTech");

  const [projectState, setProjectState] = useState("Idea");

  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center lg:text-left text-white text-[34px] md:text-[44px] font-bold leading-tight mb-10">
          Kickstart with webilo:{" "}
          <span className="font-normal text-[#CFCFCF]">
            Discover Your Potential
          </span>
        </h2>

        <div className="rounded-[22px] border-[5px] border-[#676767] bg-[#2B2B2B] p-2">
          {/* STEP CARD */}

          <div className="rounded-xl bg-[#303030] overflow-x-auto">
            <div className="flex min-w-[700px] lg:min-w-0">
              {steps.map((item, index) => (
                <StepCard
                  key={index}
                  active={index === currentStep}
                  step={item.step}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          {/* FORM CARD */}

          <div className="rounded-xl bg-[#303030] p-8 mt-2">
            {/* STEP 1 */}

            {currentStep === 0 && (
              <>
                <div>
                  <h3 className="text-white text-[18px] font-medium mb-5">
                    Select your business industry
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {industries.map((item) => (
                      <Chip
                        key={item}
                        active={industry === item}
                        onClick={() => setIndustry(item)}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-[#4B4B4B] my-8" />

                <div>
                  <h3 className="text-white text-[18px] font-medium mb-5">
                    What is the current state of project?
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {projectStates.map((item) => (
                      <Chip
                        key={item}
                        active={projectState === item}
                        onClick={() => setProjectState(item)}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* STEP 2 */}

            {currentStep === 1 && (
              <div>
                <h3 className="text-white text-[18px] mb-6">
                  What services do you need?
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    "Website Development",
                    "UI / UX Design",
                    "Mobile Application",
                    "Ecommerce",
                    "SEO",
                    "Digital Marketing",
                    "Brand Identity",
                    "Maintenance",
                  ].map((item) => (
                    <div
                      key={item}
                      onClick={() => toggleService(item)}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <div
                        className={`w-6 h-6 rounded border flex items-center justify-center transition

${
  selectedServices.includes(item)
    ? "bg-[#E7FF2B] border-[#E7FF2B]"
    : "border-[#777]"
}
`}
                      >
                        {selectedServices.includes(item) && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>

                      <p className="text-white group-hover:text-[#E7FF2B] transition">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 */}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-[18px] mb-4">
                    Project Budget
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "$1000-$5000",
                      "$5000-$10000",
                      "$10000-$25000",
                      "$25000+",
                    ].map((item) => (
                      <Chip
                        key={item}
                        active={selectedBudget === item}
                        onClick={() => setSelectedBudget(item)}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-[18px] mb-4">
                    Project Timeline
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {["1 Month", "2 Months", "3 Months", "Flexible"].map(
                      (item) => (
                        <Chip key={item} active={false}>
                          {item}
                        </Chip>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}

            {currentStep === 3 && (
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-[58px] bg-[#262626] border border-[#5E5E5E] rounded-lg px-5 text-white placeholder:text-[#9C9C9C] focus:border-[#E7FF2B] outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[58px] bg-[#262626] border border-[#5E5E5E] rounded-lg px-5 text-white placeholder:text-[#9C9C9C]focus:border-[#E7FF2B] outline-none transition"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-[58px] bg-[#262626] border border-[#5E5E5E] rounded-lg px-5 text-white placeholder:text-[#9C9C9C]focus:border-[#E7FF2B] outline-none transition"
                />

                <textarea
rows={6}
className="
w-full
bg-[#262626]
border
border-[#5E5E5E]
rounded-lg
px-5
py-4
text-white
placeholder:text-[#9C9C9C]
focus:border-[#E7FF2B]
outline-none
resize-none
transition
"
/>
              </div>
            )}
          </div>

          {/* BUTTON CARD */}

          <div className="rounded-xl bg-[#303030] p-8 mt-2 transition-all duration-500 ease-in-out">
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="w-44 h-[60px] rounded-lg border border-[#666] text-white"
                >
                  Back
                </button>
              )}

              <button
                onClick={nextStep}
                className="flex-1 h-[60px] rounded-lg bg-[#E7FF2B] text-black font-semibold flex items-center justify-center gap-2"
              >
                {currentStep === 4 ? "Submit" : "Next"}

                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
