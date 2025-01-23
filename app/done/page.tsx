'use client';

import InaugurationAnimation from '@/components/InaugurationAnimation';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
  }, []);

  const handleButtonClick = () => {
    // Simulate sending a request
    setTimeout(() => {
      setShowPopup(true); // Show the popup after a short delay
    }, 1000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      {/* Inauguration Animation */}
      <AnimatePresence>
        {showAnimation && <InaugurationAnimation />}
      </AnimatePresence>

      {/* Shimmer Button */}
      <div className="mt-8">
        <ShimmerButton
          onClick={()=>{
            window.location.href = "https://vellapmahal.in/dashboard"
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