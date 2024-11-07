import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbarplace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <nav
      className={`relative w-full z-10 ${
        scrolled
          ? "bg-transparent"
          : "bg-gradient-to-br from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
      } ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-70 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/hi/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Overview
                </Link>
                <Link
                  to="/hi/about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  About
                </Link>
                <Link
                  to="/hi/teams"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Teams
                </Link>
                {/* <Link
                  to="/hi/hotels"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Hotels Nearby
                </Link> */}
              </div>
            </div>
          </div>
         
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
              >
                Overview
              </Link>
              <Link
                to="/hi/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
              >
                About
              </Link>
              <Link
                href="/hi/teams"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
              >
                Teams
              </Link>
              {/* <Link
                to="/hi/hotels"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
              >
                Hotels Nearby
              </Link> */}
             
            </div>
          </div>
        )}
      </Transition>
    </nav>
    </>
  );
};

export default Navbarplace;