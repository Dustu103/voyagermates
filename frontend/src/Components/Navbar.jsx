// To implement the profile menu using the provided `Menu` component from Headless UI, you can integrate it within your `Navbar` component. Here's how you can modify your `Navbar` to include the dropdown menu that appears when the profile image button is clicked:

// ```javascript
import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav
      className={`relative w-full z-10 ${
        scrolled
          ? "bg-transparent"
          : "bg-gradient-to-br from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
      } ${scrolled ? "shadow-lg" : ""}`}
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-70 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  About
                </Link>
                {/* <Link
                  href="/contactus"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Services
                </Link> */}
                <Link
                  to="/contactus"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-glow"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/register"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Register
              </span>
            </Link>

            {/* Profile Menu */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </Menu.Button>
              </div>
              <Transition
                as="div"
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
            >
              About
            </Link>
            {/* <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
            >
              Services
            </a> */}
            <Link
              to="/contactus"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Register
              </span>
            </Link>
            <a
              href="#"
              className="relative

 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-glow"
            >
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
      </Transition>
      
    </nav>
  );
};

export default Navbar;
// ```

// // ### Key Changes:

// // 1. **Profile Dropdown Menu**: The `Menu` component from `@headlessui/react` is added for the profile dropdown menu, wrapping the profile image button and its dropdown items.
  
// // 2. **Menu Transition**: A `Transition` component is added for smooth animations when the dropdown menu opens or closes.

// // 3. **Responsive Behavior**: The dropdown menu appears on click of the profile image on screens where the navbar is expanded (`md:block`).

// // This setup should correctly render a dropdown menu that appears when the user clicks on the profile image.
