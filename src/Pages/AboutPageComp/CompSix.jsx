import React from 'react';
import { motion } from 'framer-motion';
import CompSixData from './CompSixData.js';

const CompSix = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div>
      <div className="py-16 sm:py-20 px-10 sm:px-20 bg-gray-100">
        <motion.div
          className="border-l-4 obl py-2 pl-2 mb-5"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-black">
            How Can You Get Involved?
          </h2>
        </motion.div>

        <div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className='text-black pb-5'>
              Whether you're here to learn, mentor, or invest, TAYARi Transitions invites you to be part of a transformative journey. Discover how you can contribute and benefit from our mission to unlock Africa’s youth potential. Explore the ways to get involved below:
            </p>
          </motion.div>


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-black'>
            {CompSixData.map((CSD, idx) => (
              <motion.div
                key={idx}
                className='bg-white py-5 px-4 rounded-sm hover:shadow-xl'
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.2 }} // Stagger the delay to animate one after another
              >
                <p className='text-md pb-2 font-semibold'>{CSD.progName}</p>
                <p>{CSD.progTitle}</p>
                <hr className='mb-2 bg-black py-0.5 bg-opacity-80' />
                <p className='text-sm leading-6'>{CSD.progDetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompSix;
