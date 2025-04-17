import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/tizzy_logo_new.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Tizzy Logo" className="h-7" />
                    {/* <span className="text-xl font-bold text-blue-600">TIZ<span className="text-orange-400">Z</span>Y</span> */}
                </div>

                {/* Desktop Nav - hidden on large and below */}
                <ul className="hidden xl:flex space-x-6 font-medium text-gray-700 items-center">
                    <li><a href="#" className="hover:text-blue-600">Tizzy Cloud Email</a></li>
                    <li><a href="#" className="hover:text-blue-600">Tizzy Cloud Hosting</a></li>
                    <li className="relative group">
                        <button className="hover:text-blue-600">Managed Services ▾</button>
                        <ul className="absolute top-full left-0 mt-1 bg-white shadow-md rounded hidden group-hover:block min-w-[160px] z-10">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Reports</a></li>
                        </ul>
                    </li>
                </ul>

                {/* Right Items */}
                <div className="hidden xl:flex items-center space-x-4">
                    <span className="text-sm text-gray-700 flex items-center space-x-1">
                        <span className="text-green-500 text-xl">📞</span>
                        <span>Global Helpline: <a href="tel:+919925992599" className="text-blue-600 font-medium">+91 9925 9925 99</a></span>
                    </span>
                    <a href="#" className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">My Account</a>
                    <a href="#" className="text-sm font-medium hover:text-blue-600">Sign In</a>
                
                </div>
                <a href="#" className="relative">
                        <FiShoppingCart className="text-xl text-gray-700" />
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </a>
                {/* Mobile Menu Toggle */}
                <div className="xl:hidden">
                    <button onClick={toggleMenu}>
                        <FiMenu className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide-In */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Side Menu */}
                        <motion.div
                            className="fixed top-1/2 right-0 transform -translate-y-1/2 w-72 h-[95%] bg-gradient-to-b from-white to-blue-50 shadow-2xl z-50 p-6 rounded-l-2xl flex flex-col justify-between"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div>
                                {/* Logo + Close */}
                                <div className="flex justify-between items-center mb-8">
                                   <img src={logo} alt="" className='w-25' />
                                    <button onClick={toggleMenu}>
                                        <FiX className="text-3xl text-gray-500 hover:text-red-500 transition duration-300" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <ul className="space-y-5 text-[16px] font-medium text-gray-700 text-center">
                                    <li><a href="#" className="hover:text-blue-600 transition bg-blue-100 p-2 rounded block">Tizzy Cloud Email</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition bg-blue-100 p-2 rounded block">Tizzy Cloud Hosting</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition block bg-blue-100 p-2 rounded">Managed Services</a></li>
                                    <li><a href="tel:+919925992599" className="text-blue-600 font-semibold block bg-blue-100 p-2 rounded">+91 9925 9925 99</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition block bg-blue-100 p-2 rounded">My Account</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition block bg-blue-100 p-2 rounded">Sign In</a></li>
                                </ul>
                            </div>
                        </motion.div>

                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
