import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
   return (
      <footer className="bg-[#000000c2] text-white py-10">
         <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div className="mb-4">
               <div className="text-xl font-bold text-brandColor leading-none">
                  <Link href="/">
                     theDiplomats
                     <span className="text-white">
                        <br />
                        DigitalWorld
                     </span>
                  </Link>
               </div>
               <p className="text-gray-400 mt-4">
                  Building the future with innovative solutions that enhance businesses globally.
               </p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
               <ul className="text-gray-400 space-y-2">
                  <li>
                     <a
                        href="/about"
                        className="hover:text-gray-200"
                     >
                        About Us
                     </a>
                  </li>
                  <li>
                     <a
                        href="/services"
                        className="hover:text-gray-200"
                     >
                        Registration
                     </a>
                  </li>
                  <li>
                     <a
                        href="/portfolio"
                        className="hover:text-gray-200"
                     >
                        Our Courses
                     </a>
                  </li>
                  <li>
                     <a
                        href="/contact"
                        className="hover:text-gray-200"
                     >
                        Contact
                     </a>
                  </li>
               </ul>
            </div>

            {/* Services */}
            <div>
               <h3 className="text-lg font-semibold mb-4">Coding Courses</h3>
               <ul className="text-gray-400 space-y-2">
                  <li>
                     <a
                        href="/course/javascript"
                        className="hover:text-gray-200"
                     >
                        Javascript
                     </a>
                  </li>
                  <li>
                     <a
                        href="/services/digital"
                        className="hover:text-gray-200"
                     >
                        HTML, CSS and Javascript
                     </a>
                  </li>
                  <li>
                     <a
                        href="/services/branding"
                        className="hover:text-gray-200"
                     >
                        Data Analysis
                     </a>
                  </li>
                  <li>
                     <a
                        href="/services/registration"
                        className="hover:text-gray-200"
                     >
                        App Development
                     </a>
                  </li>
               </ul>
            </div>

            {/* Contact & Social Media */}
            <div>
               <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
               <p className="text-gray-400">3rd Gate Army Barrack, by Ebube Block Industry, Azhata, Abuja FCT</p>
               <p className="text-gray-400 mt-2">Phone: +23470 8184 3000</p>
               <p className="text-gray-400 mt-2">Email: talktothediplomats@gmail.com</p>
               <div className="flex space-x-4 mt-6">
                  <a
                     href="https://facebook.com"
                     aria-label="Facebook"
                     className="text-gray-400 hover:text-white"
                  >
                     <FaFacebookF />
                  </a>
                  <a
                     href="https://twitter.com"
                     aria-label="Twitter"
                     className="text-gray-400 hover:text-white"
                  >
                     <FaTwitter />
                  </a>
                  <a
                     href="https://instagram.com"
                     aria-label="Instagram"
                     className="text-gray-400 hover:text-white"
                  >
                     <FaInstagram />
                  </a>
                  <a
                     href="https://linkedin.com"
                     aria-label="LinkedIn"
                     className="text-gray-400 hover:text-white"
                  >
                     <FaLinkedinIn />
                  </a>
               </div>
            </div>
         </div>

         {/* Footer Bottom */}
         <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
