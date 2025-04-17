import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText, FaUsers } from 'react-icons/fa';

const plans = [
    {
        title: 'Tizzy® Mail Basic 10 GB',
        price: '₹792',
        renews: '₹792',
        icon: <FaEnvelopeOpenText className="text-red-500 text-4xl mb-3" />,
    },
    {
        title: 'Tizzy® Mail Corporate 1 TB',
        price: '₹8000',
        renews: '₹8000',
        icon: <FaUsers className="text-black text-4xl mb-3" />,
    },
];

const HostingPlans = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-400">
                Tizzy® Cloud Business Email Hosting Plans
            </h2>
            <div className="flex justify-center items-center mb-8">
                <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        className="bg-white p-6 rounded-xl shadow-xl relative hover:scale-105 transition-transform"
                    >
                        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                        {plan.icon}
                        <p className="text-xl font-bold mb-1">{plan.price} <span className="text-sm font-medium text-gray-600">/Per user /Per Year</span></p>
                        <p className="text-sm text-gray-600 mb-1">Renews at {plan.renews}</p>
                        <p className="text-sm text-gray-600 mb-4">GST 18% Additional</p>
                        <button className="text-blue-600 font-medium hover:underline">Details</button>

                        {/* {index === 0 && (
              <div className="absolute right-[-39px] top-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-16 h-16 flex flex-col items-center justify-center font-semibold text-sm text-gray-600 z-10">
                <span className="-mb-1">Up</span>
                <span>To</span>
              </div>
            )} */}
                    </motion.div>
                ))}
            </div>
            <button className="mt-8 px-6 py-2 text-blue-600 font-semibold border-b-2 border-blue-600 cursor-pointer bg-blue-100 transition-all duration-300 rounded">
                View all Plan
            </button>

        </div>
    );
};

export default HostingPlans;
