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
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-16 gap-3 px-7 sm:px-20">
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
                Brief History
              </h2>
            </div>
            <p className="text-md text-black  leading-8">
            TAYARi was born from a need we saw firsthand—a group of people feeling “stuck,” seeking direction and purpose. Through an intensive 8-week interactive coaching program, we discovered that many are not only searching for career success but a deeper understanding of their passions and impact. This experience revealed that with the right guidance, each individual could connect their life’s experiences into a meaningful, purpose-driven path forward. From that first cohort, a larger vision emerged: to empower others to find clarity, overcome barriers, and move forward with foresight.

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
