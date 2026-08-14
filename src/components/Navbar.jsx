// ===================================================
// Premium Navbar (Weblio Replica)
// ===================================================
import { TbBrandSnowflake } from "react-icons/tb";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
// const navItems = [
//   "About.",
//   "Services.",
//   "Reviews",
//   "Portfolio.",
//   "Hire Developers",
// ];
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#features" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}

      <header className="relative w-full bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Left Side */}

          <div className="flex items-center gap-4">
            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-text text-3xl"
            >
              <CgMenuLeft />
            </button>

            {/* Logo */}

            <a href="#" className="flex items-center gap-3">
              <div className="grid grid-cols-2 gap-[3px]">
                <span className="h-2.5 w-2.5 rounded-sm bg-primary"></span>
                <span className="h-2.5 w-2.5 rounded-sm bg-primary"></span>
                <span className="h-2.5 w-2.5 rounded-sm bg-primary"></span>
              </div>
              <TbBrandSnowflake size={30} className="text-primary-400" />
              <h1 className="text-lg font-semibold tracking-wide text-text">
                Weblio
              </h1>
            </a>
          </div>

          {/* Center Navigation */}

          <nav className="hidden lg:flex pl-110 gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-primary-400 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Button */}

          {/* <button
            className="
             
              lg:flex
              items-center
              rounded-full
              bg-primary
              px-7
              py-3
              text-[14px]
              font-semibold
              text-black
              transition-all
              duration-300
              
              hover:bg-primary-400
            "
          >
            Contact Us
          </button> */}
          <button className=" hidden font-semibold text-black transition-all duration-300 hover:bg-primary hover:scale-105 shadow-lg lg:flex items-center justify-center rounded-full bg-primary-400 px-8 py-3 text-sm ">
            Contact Us
          </button>
        </div>
      </header>

      {/* ================= Mobile Sidebar ================= */}

      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? "visible bg-black/70" : "invisible bg-transparent"
        }`}
      >
        <aside
          className={`absolute left-0 top-0 h-screen w-72 bg-background-card transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-border p-6">
            <h2 className="text-xl font-semibold text-text">Weblio</h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-text"
            >
              <HiOutlineX />
            </button>
          </div>

          {/* Links */}

          <div className="flex flex-col gap-7 p-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-text-secondary transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <button className="mt-5 rounded-full bg-primary-400 py-3 font-semibold text-black transition   ">
              Contact Us
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
