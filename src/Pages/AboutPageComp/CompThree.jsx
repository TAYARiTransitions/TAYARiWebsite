import React from 'react';
import { motion } from 'framer-motion';

const CompThree = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Slower animation duration
    },
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-gray-100 py-16 sm:py-24 gap-5 px-7 sm:px-20">
        <motion.div
          className="max-w-3xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div>
            <div className="border-l-4 bbl py-2 pl-2 mb-5">
              <h2 className="text-3xl font-semibold text-black">
                What We Believe
              </h2>
            </div>

            <p className="text-md text-black  leading-8">
            We believe Africa’s people hold incredible potential to shape a brighter, more innovative future. We understand the unique journey encountered as they move from education to employment, scale the career ladder, explore entrepreneurship, or transition to retirement. These steps can be daunting without the right guidance, skills, and support network. At TAYARi, our goal is to dismantle barriers and unveil pathways that will empower individuals to scale from where they are to where they want to be - leaving a lasting impact and legacy in communities

            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2 }} // Delay for the image
        >
          <img
            src="https://img.freepik.com/premium-photo/3d-vector-isolated-light-bulb-target-with-word-vision-concept-as-vector-design-featurin_980716-676404.jpg?w=740"
            alt=""
            className="rounded-md hidden lg:block h-full w-full"
          />
          <img
            src="https://img.freepik.com/premium-photo/compass-with-vision-highlighted-clear-sense-direction_904318-21795.jpg?w=740"
            alt=""
            className="rounded-md block lg:hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CompThree;
