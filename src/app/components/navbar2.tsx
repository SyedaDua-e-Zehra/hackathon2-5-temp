import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[91px] px-4 md:px-10 bg-white shadow-md">
      <nav className="w-full h-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-[#252B42]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute md:relative top-[91px]  md:top-0 left-0 w-full md:w-auto bg-white md:flex md:items-center md:space-x-8 z-10 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 px-4 md:px-0">
            <li>
              <Link href="/" legacyBehavior>
                <a className="block py-2 md:py-0 text-sm font-semibold text-[#737373] hover:text-[#252B42]">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="block py-2 md:py-0 text-sm font-semibold text-[#737373] hover:text-[#252B42]">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="block py-2 md:py-0 text-sm font-semibold text-[#737373] hover:text-[#252B42]">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="block py-2 md:py-0 text-sm font-semibold text-[#737373] hover:text-[#252B42]">
                  Contact
                </a>
              </Link>
            </li>
          </ul>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row md:space-x-4 px-4 md:px-0 mt-4 md:mt-0">
            <Link href="/login" legacyBehavior>
              <a className="text-sm font-semibold text-[#23A6F0] hover:text-[#1D8ED4]">
                Login
              </a>
            </Link>
            <Link href="/learn-more" legacyBehavior>
              <a className="mt-2 md:mt-0 text-sm font-semibold text-white bg-[#23A6F0] hover:bg-[#1D8ED4] flex items-center justify-center px-6 py-2 rounded-md">
                Become a Member
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="#FFFFFF"
                >
                  <path d="M2 5h8M5 2l3 3-3 3" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
