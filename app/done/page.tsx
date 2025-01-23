'use client';

import InaugurationAnimation from '@/components/InaugurationAnimation';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
    setShowToast(true); // Show toast on page load
    setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    // Hide toast after 3 seconds
    const toastTimeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(toastTimeout); // Cleanup timeout
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-8">
      {/* Inauguration Animation */}
      <AnimatePresence>
        {showAnimation && <InaugurationAnimation />}
      </AnimatePresence>

      {/* Toast Message */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-2 left-1/3 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 border border-gray-100 sm:px-6 sm:py-4 sm:space-x-4 md:px-8 md:py-6 md:rounded-xl md:space-x-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 sm:h-7 sm:w-7 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm font-medium sm:text-base md:text-lg">
              Your request message has been sent successfully!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shimmer Button */}
      <div className="mt-8">
        <ShimmerButton
          onClick={() => {
            window.location.href = 'https://vellapmahal.in/dashboard';
          }}
          className="shadow-2xl hover:shadow-lg transition-shadow duration-300"
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
            Show Dashboard
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default Page;