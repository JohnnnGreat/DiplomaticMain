"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { menuItems } from "./constant";

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);
   const [isSticky, setIsSticky] = useState(false);

   const handleDropdownToggle = (name) => {
      setOpenDropdown(openDropdown === name ? null : name);
   };

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.pageYOffset > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav className={`bg-white shadow-sm ${isSticky ? "fixed top-0 z-50 w-full shadow-md" : ""}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16">
            {/* Logo */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-4 items-center">
               <Link
                  href="/registration"
                  className="text-gray-700 hover:text-gray-900"
               >
                  Registration
               </Link>

               {menuItems.map((menu, idx) => (
                  <DropdownMenu key={idx}>
                     <DropdownMenuTrigger
                        asChild
                        onClick={() => handleDropdownToggle(menu.title)}
                     >
                        <Button
                           variant="ghost"
                           className="flex items-center text-gray-700 hover:text-gray-900"
                        >
                           {menu.title}
                           <ChevronDown
                              className={`ml-1 transition-transform ${openDropdown === menu.title ? "rotate-180" : ""}`}
                           />
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        {menu.links.map((link) => (
                           <DropdownMenuItem key={link.slug}>
                              <Link
                                 href={`/courses${link.slug}`}
                                 className="text-gray-700"
                              >
                                 {link.title}
                              </Link>
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
               ))}

               {/* <Link
                  href="/immigration-questions"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
               >
                  Immigration Questions + AI
               </Link> */}
               <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
               >
                  Contact Us
               </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
               className="lg:hidden"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {isMenuOpen ? <X size={24} /> : <p>Menu</p>}
            </button>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-md">
               <div className="px-4 pt-4 pb-3 space-y-1">
                  <Link
                     href="/registration"
                     className="text-gray-700 hover:text-gray-900"
                  >
                     Registration
                  </Link>

                  {menuItems.map((menu) => (
                     <div
                        key={menu.title}
                        className="border-t border-gray-200"
                     >
                        <button
                           className="w-full flex justify-between items-center px-3 py-2 text-gray-700"
                           onClick={() => handleDropdownToggle(menu.title)}
                        >
                           {menu.title}
                           <ChevronDown
                              className={`ml-1 transition-transform ${openDropdown === menu.title ? "rotate-180" : ""}`}
                           />
                        </button>
                        {openDropdown === menu.title && (
                           <div className="pl-4 space-y-1">
                              {menu.links.map((link) => (
                                 <Link
                                    key={link.slug}
                                    href={`/courses${link.slug}`}
                                    className="block px-3 py-2 text-gray-700"
                                 >
                                    {link.title}
                                 </Link>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         )}
      </nav>
   );
}
