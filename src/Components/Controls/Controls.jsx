import React, { useState } from 'react';
import { motion } from 'framer-motion';
import desktop from '../../assets/webmail.png';
import fast from '../../assets/fast.png';
import spam from '../../assets/spam.png';
import DNS from '../../assets/DNS.png';
import plesk from '../../assets/plesk.png';
import security from '../../assets/security.png';

const features = [
  {
    title: 'Faster Desktop and Mobile Webmail',
    description: 'Enjoy blazing fast webmail access on both desktop and mobile platforms.',
    image: desktop,
  },
  {
    title: 'Faster POP, IMAP and SMTP Protocols',
    description: 'Secure and fast communication protocols for efficient email delivery.',
    image: fast,
  },
  {
    title: 'Integrated Spam, Antivirus and Email Filtering',
    description: 'Built-in protection against spam, viruses and phishing.',
    image: spam,
  },
  {
    title: 'DNS Management',
    description: 'Control and configure DNS settings with ease.',
    image: DNS,
  },
  {
    title: 'Dedicated Control Panel',
    description:
      'Manage your email accounts in just a few clicks with our powerful control panel.',
    image: plesk,
  },
  {
    title: 'SSL/TLS Security',
    description: 'Advanced encryption for secure email communication.',
    image: security,
  },
];

export default function Controls() {
  const [selected, setSelected] = useState(4);

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 gap-5">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3">
        <ul className="space-y-4">
          {features.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 text-gray-950 font-bold rounded-lg transition-colors ${
                selected === index
                  ? 'bg-[#E1F0DA] text-blue-600 font-semibold  shadow-[0_0_5px_0px_rgba(0,0,255,0.4)] hover:shadow-[0_0_5px_2px_rgba(0,0,255,0.4)]'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelected(index)}
            >
              <div>{item.title}</div>

              {/* Mobile: show description + image below selected item */}
              {selected === index && (
                <div className="block md:hidden mt-4">
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[200px] object-contain"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: Right Content Area */}
      <motion.div
        key={selected}
        initial={{ opacity: 0, y:-80 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-full md:w-2/3 bg-[#c5dfc8] p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {features[selected].title}
        </h2>
        <p className="text-gray-600 mb-6">{features[selected].description}</p>
        <img
          src={features[selected].image}
          alt={features[selected].title}
          className="w-full max-h-[300px] object-contain"
        />
      </motion.div>
    </div>
  );
}
