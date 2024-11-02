"use client";
import Link from "next/link";
import React, { useState } from "react";
import { headerNavigations } from "./constant";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
   const router = useRouter();

   // Function to toggle the mobile menu
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="bg-[#FCFCFC] h-[117px] relative z-50">
         <div className="max-w-[1000px] h-full mx-auto flex justify-between items-center px-4 md:px-0">
            {/* Logo */}
            <div className="text-xl font-bold text-brandColor leading-none">
               <Link href="/">
                  theDiplomats
                  <span className="text-black">
                     <br />
                     DigitalWorld
                  </span>
               </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
               <ul className="flex space-x-6 text-gray-700">
                  {headerNavigations.map((navItem, index) => (
                     <li key={index}>
                        <Link
                           className={`${
                              router.pathname === navItem.path ? "text-brandColor font-bold" : "text-gray-700"
                           }`}
                           href={navItem.path}
                        >
                           {navItem.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <Link
               href="/auth/register"
               className="border border-brandColor py-3 px-9 font-bold rounded-sm hover:bg-brandColor hover:text-white transition-all"
            >
               Register
            </Link>

            {/* Mobile Menu Button */}
            <button
               className="md:hidden text-gray-700"
               onClick={toggleMenu}
               aria-label="Toggle menu"
            >
               {/* Icon for Mobile Menu (hamburger icon) */}
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

         {/* Mobile Menu Overlay */}
         <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
               isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu} // Close menu when overlay is clicked
         ></div>

         {/* Mobile Menu */}
         <div
            className={`fixed right-0 top-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
               isOpen ? "translate-x-0" : "translate-x-full"
            }`}
         >
            <div className="flex justify-between items-center p-4 border-b">
               <h2 className="text-lg font-bold text-brandColor">Menu</h2>
               <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-gray-700"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
            </div>
            <nav className="mt-4">
               <ul className="flex flex-col space-y-4 p-4">
                  {headerNavigations.map((navItem, index) => (
                     <li key={index}>
                        <Link
                           className={`${
                              router.pathname === navItem.path ? "text-brandColor font-bold" : "text-gray-700"
                           }`}
                           href={navItem.path}
                           onClick={toggleMenu} // Close menu on item click
                        >
                           {navItem.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
