'use client'
import { useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-800 w-full flex flex-col sm:flex-row h-auto sm:h-16 items-center text-white mb-4 md:mb-8">
      <div className="flex justify-center w-full mx-8 h-16 items-center">
        {/* <div>Logo</div> */}

        {/* Hamburger icon (visible only on mobile) */}
        <button
          className="sm:hidden focus:outline-none "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop menu (visible on medium and larger screens) */}
        <div className="hidden sm:flex w-full px-4 gap-8 justify-center">
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Link href={"/about"}>
            <div>About</div>
          </Link>
          <Link href={"/contact_us"}>
            <div>Contact</div>
          </Link>
        </div>

        {/* <div>Icon</div> */}
      </div>

      {/* Mobile dropdown menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center w-full px-4 gap-4 pb-4">
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Link href={"/about"}>
            <div>About</div>
          </Link>
          <Link href={"/contact_us"}>
            <div>Contact</div>
          </Link>
        </div>
      )}
    </nav>
  );
}
