"use client";
import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Example from "./ProfitAbleLoan";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./style.css";

export default function Navbar() {
  const [hover, setHover] = useState(false);

  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the menu on link click
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const router = useRouter();
  const signinNav = () => {
    router.push("../auth/signin");
  };
  const handleNavigation = () => {
    router.push("../about");
  };
  const handleNavigatione = () => {
    router.push("../docs");
  };
  const handleNav = () => {
    router.push("../");
  };

  return (
    <div>
      <nav className="bg-[#0F0D06] lg:h-[90px] md:h-[145px] opacity-80 border-b-lightgold border-x-black border-t-black border-2 font-san w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <img
                src="/Agua-logo1.png"
                className="h-16 w-24 md:h-20 md:w-28 lg:pr-4 sm:mr-0"
                alt="Flowbite Logo"
              />
            </Link>
            {/* <span className="self-center text-xl font-merry md:text-2xl font-semibold hover:text-[#AF820E] text-[#5C5D5E]">
              Agua
            </span> */}
          </div>

          {/* Buttons Section */}
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            {/* <Link
              onClick={signinNav}
              href={"/"}
              className="mr-2 rounded-md bg-gradient-to-r from-[#353535] font-roboto  via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply lg:py-3 lg:px-10 py-3 px-3 text-black-2 font-semibold hover:bg-[#fad55a] cursor-pointer whitespace-nowrap"
            >
              SignIn
            </Link> */}
            {/* <button className="relative group px-8 py-4 text-white font-bold rounded-md overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#CA8A16] to-[#F5ED1C] via-[#F5ED1C] animate-border-move"></span>
              <span className="absolute inset-[2px] bg-[#110F09] rounded-md"></span>
              <span className="relative z-10">SignIn</span>
            </button>
            <button className="relative group px-8 py-4 text-white font-bold rounded-md overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#CA8A16] to-[#F5ED1C] via-[#F5ED1C] animate-border-move"></span>
              <span className="absolute inset-[2px] bg-[#110F09] rounded-md"></span>
              <span className="relative z-10">Connect Wallet</span>
            </button> */}
            <Example />
            <Example />

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-semibold border border-gray-100 text-[#5C5D5E] text-2xl rounded-lg  md:flex-row md:mt-0 md:border-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3  font-roboto hover:text-[#AF820E]"
                  onClick={handleNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 font-roboto hover:text-[#AF820E]"
                  onClick={handleNavigation}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="block py-2 px-3 font-roboto hover:text-[#AF820E]"
                  onClick={handleNavigatione}
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="block py-2 px-3 font-roboto hover:text-[#AF820E]"
                  onClick={handleLinkClick}
                >
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
