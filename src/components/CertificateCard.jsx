import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData } from '../constants/certificates';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  // Auto-play logic
  useEffect(() => {
    if (certificatesData.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1); // Hamesha right se slide hoga
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificatesData.length);
    }, 10000); // 3 seconds interval for better readability

    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (certificatesData.length === 0) return null;

  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter italic text-white">
          Career <span className="text-blue-600">Wins</span>
        </h2>
      </motion.div>

      {/* Main Slider Container */}
      <div className="relative flex justify-center items-center h-[350px] md:h-[500px] w-full max-w-4xl mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-full h-full flex items-center justify-center rounded-2xl   overflow-hidden "
          >
            <img
              src={certificatesData[currentIndex].image}
              alt="Certificate"
              className="max-w-full max-h-full object-contain select-none pointer-events-none rounded-md"
            />
            
            {/* Optional: Certificate Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/50 text-sm font-medium">
                    {currentIndex + 1} / {certificatesData.length}
                </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar Effect */}
      <div className="flex justify-center gap-2 mt-8">
        {certificatesData.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-1000 rounded-full ${
              index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;