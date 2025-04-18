import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import Testimonials from '../Components/Testimonials/Testimonials';
import HostingPlans from '../Components/HostingPlans/HostingPlans';
import Controls from '../Components/Controls/Controls';
import Faq from '../Components/Faq/Faq';
import banner from '.././assets/banner-img.png'
import google from '.././assets/google-partner.png'
import microsoft from '.././assets/microsoft-partner.png'
import mail from '.././assets/Mail Letter.gif'
import Cloud from '.././assets/Cloud downloading.gif'
import shield from '.././assets/shield.gif'




const Homepage = () => {

  const services = [
    { img: mail, label: 'Email Send/Recive Speed', desc: 'Fastest Outlokk any Email Application Sync Speed' },
    { img: Cloud, label: 'Backup And Restore', desc: 'Automated 30 Days Scheduled Backup on AWS s3 Bucket' },
    { img: shield, label: 'AWS Security Standards', desc: 'AWS Foundational Security Best Practices CIS AWS Foundation Benchmark & PCI DSS' },
  ];

  return (
    <section className="mt-8 w-full bg-gradient-to-b py-10 sm:px-10" style={{ backgroundColor:'#E1F0DA' }}>

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">

        {/* Right-side image for desktop, top image for mobile */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-48 sm:w-60 md:w-72 lg:w-full">
            <img
              src={banner}
              alt="Happy User"
              className="w-full object-contain z-10 relative mx-auto"
            />
          </div>
        </motion.div>

        {/* Left text content */}
        <motion.div
          className="text-center lg:text-left w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600 leading-snug font-mono">
            <span className="text-black">
              <span className="text-blue-500 font-extrabold">PREMIUM<span className="inline-block"></span></span> Cloud Business<br />
              Email Hosting <span className="text-yellow-300 font-extrabold">INDIAN</span><br />
              Company
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Save time of your team and Grow your Business with our<br className="hidden sm:inline" />
            world class Faster Cloud Email Service
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full text-sm shadow-lg hover:bg-blue-700 transition"
          >
            Start Now
          </motion.button>

          {/* Logos */}
          <div className="flex gap-6 mt-6 items-center justify-center lg:justify-start">
            <img src={google} alt="Google Cloud" className="h-8 sm:h-10" />
            <img src={microsoft} alt="Microsoft Partner" className="h-8 sm:h-10" />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <IconBox icon={<FaFacebookF />} />
            <IconBox icon={<FaInstagram />} />
            <IconBox icon={<FaTwitter />} />
            <IconBox icon={<FaLinkedinIn />} />
            <IconBox icon={<FaGoogle />} />
            <IconBox icon={<FaWhatsapp />} />
          </div>
        </motion.div>
      </div>

      {/* service section */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl transition shadow-[0_0_5px_0px_rgba(0,0,255,0.4)] hover:shadow-[0_0_5px_2px_rgba(0,0,255,0.4)] p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.label}
                className="w-20 h-20 object-contain rounded-full shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{service.label}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
        <button className="mt-8 block mx-auto px-6 py-2 text-blue-600 font-semibold border-b-2 border-blue-600 cursor-pointer bg-blue-100 transition-all duration-300 rounded">
          View All
        </button>


      </div>

      {/* testimonials  */}
      <Testimonials />

      {/*  plan section*/}
      <HostingPlans />

      {/* fretures sections */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-red-400">
          Features of Tizzy® Email
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }} // start lower
          animate={{ opacity: 1, x: 0 }}  // move up to original position
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-5">
          <p>
            Tizzy Mail can be settup automatic or manual modeon any device andin any email application.<br/>
            it also her a user freindly webmail interface to access from browser.<br/>
            creating your buisness email addressis very fast and easy on tizzy mail for eg.<br/>
            sales@yourcompanyname.com
          </p>
        </motion.div>
        <button className="mt-8 px-6 py-2 text-blue-600 font-semibold border-b-2 border-blue-600 cursor-pointer bg-blue-100 transition-all duration-300 rounded">
          View all
        </button>
      </div>

      {/* control section */}
      <Controls />

      {/* FAQ section */}
      <Faq />

   

    </section>
  );
};

const IconBox = ({ icon }) => (
  <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600 transition">
    {icon}
  </div>
);

export default Homepage;
