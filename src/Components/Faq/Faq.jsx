import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: '1) What is Cloud Business Email Hosting Service?',
    color:'bg-red-50',
    answer:
      'It is a professional email hosting solution for businesses with cloud-powered infrastructure for speed, reliability, and security.',
  },
  {
    question: '2) What is Tizzy®Mail?',
    color:'bg-amber-100',
    answer:
      'Tizzy®Mail is our in-house secure email solution tailored for business use with excellent performance and security.',
  },
  {
    question: '3) We have not heard about Tizzy®Mail so How old is Tizzy®Mail?',
    color:'bg-green-100',
    answer:
      'Tizzy®Mail has been trusted by businesses for several years and is constantly evolving to meet modern needs.',
  },
  {
    question: '4) How do we migrate to Tizzy®Mail?',
    color:'bg-blue-100',
    answer:
      'Migration is easy and seamless. Our team assists you with complete migration without any data loss.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We are glad to answer the frequently asked questions. You can email us on{' '}
        <a href="mailto:sales@tizzycloud.com" className="text-blue-500 underline">
          sales@tizzycloud.com
        </a>{' '}
        for any further queries.
      </p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-xl p-4 shadow-sm transition-all duration-300 ${faq.color} cursor-pointer`}
            
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-base font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-blue-500">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {activeIndex === index && (
              <div className="mt-3 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
