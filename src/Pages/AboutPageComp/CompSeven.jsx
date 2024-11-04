import React from 'react';
import { motion } from 'framer-motion';

const CompSeven = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Duration for the fade-in effect
    },
  };

  return (
    <div>
      <div className="py-16 sm:py-20 px-10 sm:px-20 bg-white">
        <motion.div
          className="border-l-4 bbl py-2 pl-2 mb-5"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-black">
            The Need Being Met
          </h2>
        </motion.div>

        <div className='text-md text-black leading-9'>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5 }} // Delay for the first paragraph
          >
            The specific need that TAYAR! Transitions is meeting is the lack of structured support systems that enable Africa's youth to navigate critical transitions in their personal, educational, and professional lives.
          </motion.p>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1 }} // Delay for the second paragraph
          >
            By addressing key barriers—such as societal pressures, economic constraints, institutional inflexibility, and limited access to transformative skills and resources—TAYAR! Transitions provides young people with the tools, networks, and mindset needed to unlock their full potential. It offers a holistic approach that empowers individuals to manage life changes, build resilience, and seize opportunities that lead to personal and professional growth.
          </motion.p>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1.5 }} // Delay for the third paragraph
          >
            In essence, we bridge the gap between potential and opportunity, helping young people overcome systemic obstacles and thrive in transformative sectors.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CompSeven;
