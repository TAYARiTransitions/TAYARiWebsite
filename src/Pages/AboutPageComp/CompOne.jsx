import React from 'react';
import { motion } from 'framer-motion';

const CompOne = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5, // Increase delay for slower sequential animation
        duration: 0.5,   // Adjust duration for the animation
      },
    }),
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-16 gap-5 px-7 sm:px-20">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          custom={0}
          variants={variants}
          viewport={{ once: false }} // Allows animation to re-trigger
        >
          <div>
            <div className="border-l-4 bbl py-2 pl-2 mb-5">
              <h2 className="text-3xl font-semibold text-black">
                What We Believe
              </h2>
            </div>
            <p className="text-md text-black font-semibold leading-8">
              At TAYARi Transitions, we offer transition management - a structured approach to navigating life's pivotal moments with wisdom and foresight.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          custom={1} // Change index for sequential delay
          variants={variants}
          viewport={{ once: false }} // Allows animation to re-trigger
        >
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?ga=GA1.1.115725304.1724684508&semt=ais_hybrid"
            alt="Teamwork illustration"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CompOne;
