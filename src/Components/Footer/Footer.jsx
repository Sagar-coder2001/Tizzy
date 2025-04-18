import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../../assets/tizzy_logo_new.png'
import free from '../../assets/free.png'
import iso from '../../assets/iso.png'
import back from '../../assets/back.png'


export default function Footer() {
  return (

    <footer className="bg-[#BAC7A7] py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-md text-gray-700">
        {/* Left section */}
        <div>
          <img src={logo} alt="Tizzy Logo" className="h-10 mb-3 text-xl" />
          <p className='text-lg font-sans'>
            Tizzy Cloud is a team of enthusiastic techies specialized in Cloud Computing
            services. Since inception we are focused on educating rather just selling services.
          </p>

          {/* Certification logos */}
          <div className="flex gap-2 mt-8">
            <img src={iso} alt="ISO" className="h-15 rounded-full" />
            <img src={free} alt="Money Back" className="h-12 rounded-full" />
            <img src={back} alt="Free Trial" className="h-10 rounded-full" />
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:underline hover:text-blue-700">About Tizzy</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Contact Us</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Media</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Legal</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover: hover:text-blue-700">Tizzy Mail</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Tizzy Cloud</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Google workspace</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Microsoft 365</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:underline hover:text-blue-700">Support</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Migration</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Backup & Restore</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-700">Career</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a href="#"><FaInstagram className="text-blue-500 hover:text-blue-700 text-lg" /></a>
            <a href="#"><FaFacebookF className="text-blue-500 hover:text-blue-700 text-lg" /></a>
            <a href="#"><FaLinkedinIn className="text-blue-500 hover:text-blue-700 text-lg" /></a>
            <a href="#"><FaTwitter className="text-blue-500 hover:text-blue-700 text-lg" /></a>
            <a href="#"><FaGoogle className="text-blue-500 hover:text-blue-700 text-lg" /></a>
            <a href="#"><FaWhatsapp className="text-blue-500 hover:text-blue-700 text-lg" /></a>
          </div>
        </div>
      </div>
    </footer>

  );
}
