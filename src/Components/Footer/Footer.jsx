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

    <footer className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Left section */}
        <div>
          <img src={logo} alt="Tizzy Logo" className="h-10 mb-3" />
          <p>
            Tizzy Cloud is a team of enthusiastic techies specialized in Cloud Computing
            services. Since inception we are focused on educating rather just selling services.
          </p>

          {/* Certification logos */}
          <div className="flex gap-2 mt-8">
            <img src={iso} alt="ISO" className="h-20" />
            <img src={free} alt="Money Back" className="h-15" />
            <img src={back} alt="Free Trial" className="h-10" />
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Tizzy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Media</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Tizzy Mail</a></li>
            <li><a href="#" className="hover:underline">Tizzy Cloud</a></li>
            <li><a href="#" className="hover:underline">Google workspace</a></li>
            <li><a href="#" className="hover:underline">Microsoft 365</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Migration</a></li>
            <li><a href="#" className="hover:underline">Backup & Restore</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
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
